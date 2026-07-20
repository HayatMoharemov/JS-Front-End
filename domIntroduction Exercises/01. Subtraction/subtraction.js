function subtract() {
    const firstNum = document.getElementById('firstNumber').value
    const secondNum = document.getElementById('secondNumber').value
    const sum = document.getElementById('result')

    const result = Number(firstNum) - Number(secondNum)

    sum.textContent = result
}