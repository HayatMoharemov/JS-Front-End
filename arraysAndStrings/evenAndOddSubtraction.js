function evenOddSubtraction(numArray){
    let evenNumbers = 0;
    let oddNumbers = 0;

    for(let i=0; i < numArray.length; i++)
        if(numArray[i] % 2 == 0){
            evenNumbers += numArray[i]
        } else {
            oddNumbers += numArray[i]
        }

    console.log(evenNumbers - oddNumbers)
}

evenOddSubtraction([3,5,7,9])