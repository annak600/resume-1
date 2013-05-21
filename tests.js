exports['test resume app'] = function(assert, done) {
  require('child_process').exec('node app.js', function(error, stdout, stderr) {
        assert.equal(error, null, error);
        assert.notEqual(stdout, null, stdout);
        done();
    });
    setTimeout(function(){
      console.log('Exiting');
      done();
    }, 10000);
}

if (module == require.main) require('test').run(exports)
