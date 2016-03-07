var gulp = require('gulp');
var  babel = require('gulp-babel');


gulp.task('test', function() {

  // 将你的默认的任务代码放在这
  console.log( 'test' );
});
gulp.task('default', () => {
	return gulp.src('./js/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
	 gulp.watch('./js/*.js',function(files){
		gulp.src(files.path)
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('build'));

	})
});