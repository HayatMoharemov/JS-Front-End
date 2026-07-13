function palindromeNumbers (array) {

    array.forEach(number => {
        let numToString = number.toString()
        let reversed = numToString.split('').reverse().join('')
        
        console.log(numToString === reversed ? 'true' : 'false')
    })
}