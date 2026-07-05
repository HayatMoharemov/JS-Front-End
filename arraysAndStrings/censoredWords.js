function censoredWords (someString, someWord) {
    let stars = '*'.repeat(someWord.length);
    let result = someString.replaceAll(someWord, stars);

    console.log(result)
}

censoredWords('A small sentence with some small words', 'small')