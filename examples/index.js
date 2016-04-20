var Cor = require('babel-plugin-operator-overloading/runtime');

function sum(a,b){
return a + b + 5;
}

console.log( sum( {add:(x)=>x*10} , 2 ) ); //25
