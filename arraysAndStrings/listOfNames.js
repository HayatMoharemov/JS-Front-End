function sortingArr(arr) {
    arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    let counter = 1;
    for(let name of arr){
        console.log(`${counter}.${name}`)
        counter += 1
    }
}

sortingArr(["John", "Bob", "Christina", "Ema"])