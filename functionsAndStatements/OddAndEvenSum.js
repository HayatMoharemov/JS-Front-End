function oddAndEvenSum (number) {
    let strArr = (number.toString()).split('')
    let evenSum = 0
    let oddSum = 0

    for(num of strArr) {
        if (num % 2 === 0) {
            evenSum += parseInt(num)
        } else {
            oddSum += parseInt(num)
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddAndEvenSum(1000435)