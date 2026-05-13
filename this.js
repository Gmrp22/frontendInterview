
//arrow()// is not hoisted even if used let and cost, because is not a function declaracio

var arrow = () => {
    console.log(this)//undefined
}

arrow()

// arrow function is a experesion, like a variable a=1, is not a function declaracion. so ir will show undefined because it behaves like a variable, expression
// let a is a declaraion its value is an expression, thatw why th arrow function ()=> is an expressionm