function oddOccurances(elements) {
    let elementsArr = elements.toLowerCase().split(' ');

    let occurrencesObj = {};
    let order = [];

    for (let word of elementsArr) {
        if (!(word in occurrencesObj)) {
            occurrencesObj[word] = 0;
            order.push(word);
        }

        occurrencesObj[word]++;
    }

    let result = [];

    for (let word of order) {
        if (occurrencesObj[word] % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}

oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')