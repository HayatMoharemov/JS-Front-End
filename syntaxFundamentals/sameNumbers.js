function sameNumbers(numbers){
    let digits = numbers.toString();

    let sum = 0;
    let firstDigit = digits[0];
    let isSame = true;

    for (let digit of digits) {
        sum += Number(digit);

        if (digit !== firstDigit) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(1234)