var ops = require('operator');

function overloaded(op,a,b,def){
  if(a[op]){ return a[op](b); }
  else if(b['r'+op]){ return b['r'+op](a); }
  else{ return def(a,b); }
}

var rt={};

Object.keys(ops).forEach( function(k){
  rt[k] = function(a,b){
    return  overloaded(k,a,b,ops[k]);
  };
});

module.exports= rt;
