function sumDigits(num){
    let sum = 0;
    let digits = num.toString();

    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
    }

    console.log(sum);
}