function solve() {
   const studentsList = document.querySelectorAll('.container tbody tr');
   const searchTerm = document.getElementById('searchField').value.toLowerCase();
   const students = Array.from(studentsList).map(el => el.innerText);

   if(!(searchTerm !== '')) return false
   studentsList.forEach(item => {
      item.classList.remove('select');
   });

   students.forEach((el, index) => {
      if (el.toLowerCase().includes(searchTerm)) {
         studentsList[index].classList.add('select');
      }
   });
}