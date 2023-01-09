// Business Logic //
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) { 
  return number1 / number2;
}



// User Interface Logic //
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));


window.alert("Your numbers added together equal: " + add(number1, number2) +
    ". Your numbers subtracted equal: " + subtract(number1, number2) +
    ". Your numbers multiplied equal: " + multiply(number1, number2) +
    ". Your numbers divided equal: " + divide(number1, number2))


