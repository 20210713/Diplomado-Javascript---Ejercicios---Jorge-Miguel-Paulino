let suma = require('prompt');
suma.start();
suma.get(['num1','num2'], function (err, result) {
    console.log(parseFloat(result.num1)+parseFloat(result.num2));
});