function stringOccurances(someText, someWord) {
    let someTextArr = someText.split(' ');
    let counter = 0;
    for(word of someTextArr){
        if (word === someWord){
            counter += 1
        }
    }
    console.log(counter)
}

stringOccurances('softuni is great place for learning new programming languages',
'softuni')