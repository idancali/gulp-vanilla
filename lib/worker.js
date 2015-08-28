var through = require('through2');
var gutil   = require('gulp-util');

module.exports = function (worker) {
  var stream = through.obj(function(file, encoding, cb) {
    worker(function() {
      // Worked finished successfully
      stream.push(file);
      stream.emit('end');
      return cb();
    }, function(errorMessage) {
      // // Worker stopped with an error message
      stream.emit('error', new gutil.PluginError({ plugin: 'gulp-vanilla', message: errorMessage }));
      return cb();
    });
  });

  return stream;
};
