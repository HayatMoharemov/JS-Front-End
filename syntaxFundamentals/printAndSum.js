function printAndSum(startNum, endNum){
    let totalSum = 0;
    let nums = [];
    for(let i=startNum; i<=endNum; i++){
        nums.push(i);
        totalSum += i;
    }
    console.log(nums.join(" "));
    console.log(`Sum: ${totalSum}`);
}

printAndSum(5,10)