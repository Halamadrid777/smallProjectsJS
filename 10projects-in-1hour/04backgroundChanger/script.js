const btn = document.getElementById('changer')
const body = document.getElementById('bodyAll')
btn.addEventListener('click',()=>{
  document.body.style.background = randomBg();
})
function randomBg() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}