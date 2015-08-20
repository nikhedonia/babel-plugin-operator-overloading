var Cor = require('babel-plugin-operator-overloading/runtime');

function x(a,b){
return a + b + 5;
}

console.log( x({add:function(x){return x*10;}},2) );
