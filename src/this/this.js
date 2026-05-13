console.log('v', v)
console.log('v2', v2)
console.log('v3', v3)
var v = 0
let v2 = 1
const v3 = 2
testVar()
function testVar() {
    console.log('testVar', v, this)

}
testVar()
const { useState, useEffect, useContext } = React;


//this code will fail in bable script since babel transforms code to var
