const prompt = require('prompt');
prompt.start();
+ prompt.get(['Usuario'], function (err, result) {
    console.log('  Hola: ' + result.Usuario);
});