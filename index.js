'use strict';

var binary={

'+':'add',
'-':'sub',
'*':'mul',
'/':'div',
'%':'mod',
'<<':'lshift',
'>>':'rshift',
'=':'assign',
'<':'lt',
'>':'gt',
'<=':'lte',
'>=':'gte',
'==':'eq',
'!=':'neq',
'===':'teq',
'!==':'tneq'

};





function makeWrapperFuncFor(N){
  //console.log(N);
  var o=N.operator;
  var l=N.left;
  var r=N.right;
  var key = binary[o];
  var L = l.name||l.value;
  var R = r.name||r.value;
  if(l.left){ L = makeWrapperFuncFor(l); }
  if(r.right){ R = makeWrapperFuncFor(r); }


  return 'Cor.'+key+'('+L+','+R+')';

}
var i=0;
module.exports = function (babel) {

    return new babel.Transformer('babel-plugin-custom-operators', {
        BinaryExpression: {
            enter: function (node,parent,a,b) {
                return  this.replaceWithSourceString(makeWrapperFuncFor(node) );
            }
        }
    });
};
