function extractText() {
    let liEls = document.querySelectorAll('li');
    let textAreaEl = document.querySelector('#result')

    for (let liEl of liEls) {
        let text = liEl.textContent;
        textAreaEl.textContent += text + '\n';
    }
}