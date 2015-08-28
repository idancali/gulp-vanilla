var chai     =  require('chai/chai');
var expect   =  chai.expect;
var assert   =  chai.assert;
var vanilla  =  require('..');
var es       = require('event-stream');

describe('Worker', function () {

  it('can complete successfully', function (done) {
    var inp = [0];
    var error = function(errorMessage) {
      assert.notOk;
    }
    var worker = vanilla.worker(function(success, error) {
      success();
    });
    es.readArray(inp)
      .pipe(worker)
      .pipe(es.writeArray(function(err, arr) {
        done();
      }));
  });

  it('can catch errors successfully', function (done) {
    var inp = [0];
    var error = function(errorMessage) {
      expect(errorMessage).to.equal('Oops');
    }
    var worker = vanilla.worker(function(success, error) {
      error('Oops');
    });

    worker.on('error', function(err) {
      expect(err).not.to.be.null;
      expect(err.message).to.equal('Oops');
      done();
    });

    es.readArray(inp)
      .pipe(worker)
      .pipe(es.writeArray(function(err, arr) {
        done();
      }));
  });

});
