function solve() {
   const listItems = document.querySelectorAll('#towns li')
   const searchInput = document.getElementById('searchText').value
   const result = document.getElementById('result')

   let matches = 0

   for (const li of listItems) {
      const liItemLoweredText = (li.textContent).toLowerCase()
      const searchInputLoweredText = searchInput.toLowerCase()

      if(liItemLoweredText.includes(searchInputLoweredText)) {
         li.style.fontWeight = 'bold'
         li.style.textDecoration = 'underline'
         matches++
      } else {
         li.style.fontWeight = ''
         li.style.textDecoration = ''
      }
   }
   result.textContent = `${matches} matches found`
}