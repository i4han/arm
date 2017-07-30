
let path = require('path')
let gulp = require('gulp')
let rename = require('gulp-rename')
let jsxHtml = require('gulp-jsx-html')

let source = './jsx'

gulp.task('jsx-html', () => 
    gulp.src( source + '/**/*.jsx', {base: source} )
        .pipe( jsxHtml() )
        .pipe( rename({ extname: ".js" }) )
        .pipe( gulp.dest('./client') )
)

gulp.task('cp:js', () => {
    console.log('js')
    gulp.src( source + '/**/*.js', {base: source} )
        .pipe( gulp.dest('./client') )

    }    )

gulp.task('watch', ['jsx-html', 'cp:js'], function () {
    gulp.watch( source + '/**/*.js',  ['cp:js'])
    gulp.watch( source + '/**/*.jsx', ['jsx-html'])
})

gulp.task('default', ['jsx-html', 'cp:js'])
