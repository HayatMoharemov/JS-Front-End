function printElements(strArray, num){
    let result = [];
    for(let i=0; i<strArray.length; i++){
        if (i % num === 0){
           result.push(strArray[i])
        }
    }
    return result;
}