function pascalSplitter(text) {
    let result = text.match(/[A-Z][a-z]*/g);
    console.log(result.join(', '));
}