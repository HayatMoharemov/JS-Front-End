function calculator(firstNum, secondNum, operator){
    if (operator == '+'){
        console.log(firstNum + secondNum);
    } else if (operator == '-') {
        console.log(firstNum - secondNum);
    } else if (operator == '*') {
        console.log(firstNum * secondNum);
    } else if (operator == '/') {
        console.log(firstNum / secondNum);
    } else if (operator == '%') {
        console.log(firstNum % secondNum);
    } else if (operator == '**') {
        console.log(firstNum ** secondNum);
    }
}

function calculatorTwo(firstNum, secondNum, operator){
    
    let result;
    switch (operator) {
        case '+': result = firstNum + secondNum; break;
        case '-': result = firstNum - secondNum; break;
        case '*': result = firstNum * secondNum; break;
        case '/': result = firstNum / secondNum; break;
        case '%': result = firstNum % secondNum; break;
        case '**': result = firstNum ** secondNum; break
    }

    console.log(result);
}

