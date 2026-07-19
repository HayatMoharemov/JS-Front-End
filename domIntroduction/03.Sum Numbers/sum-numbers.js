function calc() {
    let numOneInputEl = document.getElementById('num1');
    let numTwoInputEl = document.getElementById('num2');
    let sumInputEl = document.getElementById('sum');

    let numOne = Number(numOneInputEl.value);
    let numTwo = Number(numTwoInputEl.value);

    let sum = numOne + numTwo

    sumInputEl.value = sum
}