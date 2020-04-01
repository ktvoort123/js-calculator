const add = (num1, num2) => num1 + num2;
const subtract = (num1,num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const calculate = function(input) {
  num1 = input.num1;
  num2 = input.num2;
  operation = input.operation.toLowerCase();

  if(isNaN(num1) || isNaN(num2)) return "one or both of the numbers are not valid";
  
  if(operation === "add" || operation === "+") {
    return add(num1, num2);
  } else if(operation === "subtract" || operation === "-" || operation === "minus") {
    return subtract(num1, num2);
  } else if(operation === "multiply" || operation === "*") {
    return multiply(num1, num2);
  } else if(operation === "divide" || operation === "/") {
    if(num2 === 0) return "Can't divide by 0!";
    return divide(num1, num2);
  } else {
    return "not a valid operator"
  }
}

const testCases = [{
  num1: 3,
  num2: 5,
  operation: 'add',
},
{
  num1: 8,
  num2: 10,
  operation: '+',
},
{
  num1: 15,
  num2: 5,
  operation: 'minus',
},
{
  num1: 12,
  num2: 15,
  operation: '-',
},
{
  num1: 8,
  num2: 7,
  operation: 'multiply',
},
{
  num1: 7,
  num2: 6,
  operation: '*',
},
{
  num1: 15,
  num2: 5,
  operation: 'divide',
},
{
  num1: 6,
  num2: 10,
  operation: '/',
},
{
  num1: 3,
  num2: 0,
  operation: 'divide',
},
{
  num1: 3,
  num2: 5,
  operation: 'not a real operator',
},
{
  num1: 'cow',
  num2: 10,
  operation: 'divide',
},
{
  num1: 3,
  num2: 'dog',
  operation: 'divide',
}
];

testCases.forEach(testCase => console.log(`${testCase.num1} ${testCase.operation} ${testCase.num2} = ${calculate(testCase)}`));