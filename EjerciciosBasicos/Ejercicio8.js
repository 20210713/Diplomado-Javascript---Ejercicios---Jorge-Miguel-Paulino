let primo = require('prompt');
primo.start();
primo.get(['Numero'], function(err, result){
    if(parseFloat(result.Numero)<0 || parseFloat(result.Numero)<=1){
        console.log("No es primo.")
    }
    else if(parseFloat(result.Numero)==2 ||parseFloat(result.Numero)==3 || parseFloat(result.Numero)==5 ){
        console.log("No es primo.");
    }
    else if(parseFloat(result.Numero) % 2 != 0 && parseFloat(result.Numero) % 3 != 0 && parseFloat(result.Numero) % 5 != 0){
        console.log(result.Numero+" es primo.");
    }
    else{
        console.log(result.Numero+" no es primo.");
    }
});