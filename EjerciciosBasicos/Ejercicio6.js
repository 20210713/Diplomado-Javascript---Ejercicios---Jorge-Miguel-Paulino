let comparacion = require('prompt');
comparacion.start();
comparacion.get(['num1','num2','num3'], function (err, result) {
    if(parseFloat(result.num1)>=parseFloat(result.num2) && parseFloat(result.num1)>=parseFloat(result.num3)){
console.log(result.num1+" es el mayor.");
    }
    else if(parseFloat(result.num2)>=parseFloat(result.num1) && parseFloat(result.num2)>=parseFloat(result.num3)){
        console.log(result.num2+" es el mayor.");
            }
            else if(parseFloat(result.num3)>=parseFloat(result.num2) && parseFloat(result.num3)>=parseFloat(result.num1)){
                console.log(result.num3+" es el mayor.");
                    }    
});