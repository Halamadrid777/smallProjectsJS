const btn = document.getElementById('ham')
const sidebar = document.getElementById('sidebar')
console.log("H");
btn.addEventListener('click', ()=>{
  btn.classList.toggle('active')
  sidebar.classList.toggle('active')
  console.log("H");
})
