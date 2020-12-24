const btn = document.getElementById('btn')
const container = document.getElementById('container')

btn.addEventListener('click', ()=>{
  createNotification()
})


function createNotification(){
  const notify = document.createElement('div');
  notify.classList.add('toast')
  notify.innerText = "I am a greateful soul"

  container.appendChild(notify)

  setInterval(()=>{
    notify.remove()
  },3000)
}