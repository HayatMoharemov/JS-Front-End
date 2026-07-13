function addAndSubtract(a, b, c) {

    function sumNum (a, b) {
        return a + b
    }

    let sumFirstNums = sumNum(a,b)

    let subtract = (c) => {
        return sumFirstNums - c
    }

    let result = subtract(c)
    console.log(result)
} 

addAndSubtract(23,6,10)
