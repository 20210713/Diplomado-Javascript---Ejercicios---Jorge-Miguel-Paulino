let divisible = require('prompt');
divisible.start();
+ divisible.get(['Numero'], function (err, result) {
    if(parseFloat(result.Numero)%2 == 0){
        console.log("Es divisible por 2.");
    }
    else{
        console.log("No es divisible por 2.");
    }
});