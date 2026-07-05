function findWord(word, text) {
    let words = text.toLowerCase().split(' ');
    let target = word.toLowerCase();

    for (let w of words) {
        if (w === target) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}