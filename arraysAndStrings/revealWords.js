function wordReveals(someWord, someString) {

    let words = someWord.split(', ');
    let text = someString.split(' ');

    for (let i = 0; i < text.length; i++) {

        if (text[i].includes('*')) {

            for (let word of words) {

                if (text[i].length === word.length) {
                    text[i] = word;
                }

            }

        }

    }
    console.log(text.join(' '));
}


wordReveals('great, learning',
'softuni is ***** place for ******** new programming languages'
)