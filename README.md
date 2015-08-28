[![Build Status](https://travis-ci.org/dancali/gulp-vanilla.svg?branch=master)](https://travis-ci.org/dancali/gulp-vanilla)

## Overview

**gulp-vanilla** allows you perform some non-file related asynchronous work during your gulp process.

## Installation

```
$ npm install --save-dev gulp-vanilla
```

## Usage

```js
var gulp = require('gulp');
var vanilla = require('gulp-vanilla');

function myVanillaWorker(success, error) {
   // Do whatever you want here

   // To signal success
   // success(); // To signal success

   // To signal an error
   // error('Some error message');
}

gulp.task('vanilla', function () {
	return gulp.src('files/**/*')
		.pipe(vanilla.worker(myVanillaWorker))
		.pipe(gulp.dest('dist'));
});
```

## License

MIT © [Dan Calinescu](http://dancali.io)
