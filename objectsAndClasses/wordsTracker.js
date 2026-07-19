function wordsTracker(input) {
    let searchedWOrds = input.shift().split(' ')

    let searchedWordsObject = {};
    
    for (let word of searchedWOrds) {
        searchedWordsObject[word] = 0;
    }

    for (let word of input) {
        if (word in searchedWordsObject) {
            searchedWordsObject[word] ++;
        }
    }

    Object.entries(searchedWordsObject).sort((a,b) => b[1] - a[1]).forEach(([word, count]) => {
        console.log(`${word} - ${count}`)
    }) 
}