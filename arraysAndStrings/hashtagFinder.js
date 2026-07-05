function hashtagFinder(someString){
    let someStringArr = someString.split(' ');
    let specialWords = [];
    let newWord = '';

    for(let word of someStringArr){
        if(word.startsWith('#')){
            newWord = word.slice(1)

            if (/^[A-Za-z]+$/.test(newWord)) {
            specialWords.push(newWord)
            }
        }
    }
    console.log(specialWords.join('\n'))
}

hashtagFinder('The symbol # is known #variously in English-speaking #regions as the #number sign')