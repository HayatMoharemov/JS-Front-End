function arrayRotation(numArr, rotationCount){
    let element = 0;
    for(let i=0; i<rotationCount; i++){
        element = numArr.shift()
        numArr.push(element)
    }
    console.log(numArr.join(' '))
}
