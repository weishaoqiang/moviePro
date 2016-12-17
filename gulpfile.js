// 得到gulp模块
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    htmlmin = require('gulp-htmlmin'),
    connect = require('gulp-connect');
    // 同步浏览器
    var browserSync = require('browser-sync').create();
// 新建任务
// gulp.task('任务名',任务执行方法function(){});

// 定义web服务，使用gulp作为服务器打开本地文件
gulp.task('webserver',function(){
    connect.server({
        livereload:true
    });
});

// 用于操作js的任务
gulp.task('js',function(){
    gulp.src(['./node_modules/angular/angular.min.js',
'./node_modules/angular-route/angular-route.min.js'])
.pipe(gulp.dest('./dist/assets/js'));
    // 使用src找到文件路径
    gulp.src('./app/**/*.js')
    // 压缩js文件
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({stream: true}))
});
gulp.task('css',function(){
    gulp.src('./app/**/*.css')
    .pipe(concat('all.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/assets/css/'))
    .pipe(browserSync.reload({stream:true}))
});
gulp.task('html',function(){
    gulp.src('./app/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({stream:true}))
});
// 图片几乎没有什么用，这里就不处理了，也不打包了
// gulp.task('img',function(){
//     gulp.src('./app/assets/img/*.*')
//     .pipe(gulp.dest('./dist/assets/img/'))
// })
// 浏览器同步
gulp.task('browser-sync',function(){
    browserSync.init({
        // 监视的路径
        server: './dist'
    });
});

// 监视任务
gulp.task('watch',['browser-sync'],function(){
    gulp.watch('./app/assets//img/*.*',['img'])
    gulp.watch('./app/**.*.html',['html'])
    gulp.watch('./app/**.*.css',['css'])
    gulp.watch('./app/**.*.js',['js'])
});

// 设置默认任务
gulp.task('default',['webserver','html','css','js','watch']);
