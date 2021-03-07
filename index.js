// Your code here

function saturdayFun(activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`  
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(style="*"){
    return function(adjective="special"){
        return `You are ${style}${adjective}${style}!` 
    }
}
const num1 = 1
const num2 = 3
const num3 = 5
const num4 = 10

const Calculator = {
    add: function add() {return num1 + num2},
    subtract: function() {return num1 - num2},
    multiply: function() {return num1 * num2},
    divide: function() {return num4 / num3},
}

let actionApplyer = function(start, array) {
    let num3 = start

    for (let i = 0; i < array.length; i++ ){
        num3 = array[i](num3)
    }

    return num3
}




