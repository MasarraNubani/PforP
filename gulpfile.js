import gulp from 'gulp';
import shell from 'gulp-shell';

export const defaultTask = gulp.series(shell.task('parcel serve index.html'));
export const test = gulp.series(shell.task('mocha'));
export const cypress = gulp.series(shell.task('npx cypress run'));

export default defaultTask;
