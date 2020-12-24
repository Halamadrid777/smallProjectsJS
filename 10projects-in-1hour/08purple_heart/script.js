function createHeart(){
  const heart = document.createElement('heart')
  heart.classList.add('heart')
  heart.innerText = "💜"
  
  heart.style.left = Math.random() * 100 +"vw"
  heart.animationDuration = Math.random() *3+1+"s"


  document.body.appendChild(heart)
  setInterval(()=>{
    heart.remove()
  },3000)
}
setInterval(createHeart,300)