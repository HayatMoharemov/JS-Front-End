function extract(content) {
    let contentEl = document.getElementById(content);

    const text = contentEl.textContent;

    const regExPattern = /\(.*?\)/g;

    const matches = text.match(regExPattern);

    console.log(matches.map(match => match.slice(1, -1)).join('; '));
}