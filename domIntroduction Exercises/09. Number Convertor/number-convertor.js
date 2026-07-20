function solve() {
    const input = document.getElementById('input');
    const selectMenuTo = document.getElementById('selectMenuTo');
    const result = document.getElementById('result');

    const number = Number(input.value);
    const option = selectMenuTo.value;

    if (option === 'binary') {
        result.value = number.toString(2);
    } else if (option === 'hexadecimal') {
        result.value = number.toString(16).toUpperCase();
    }
}