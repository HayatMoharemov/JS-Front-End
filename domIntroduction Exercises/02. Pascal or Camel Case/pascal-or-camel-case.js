function solve() {
  const input = document.getElementById('text').value.toLowerCase().split(' ');
  const currentCase = document.getElementById('naming-convention').value;
  const result = document.getElementById('result')

  if (currentCase === 'Pascal Case') {
    result.textContent = input.map(word => word[0].toUpperCase() + word.slice(1)).join('')
  } else if (currentCase === 'Camel Case') {
    result.textContent = input[0] + input.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join('')
  } else { 
    result.textContent = 'Error!'
  }
}
  