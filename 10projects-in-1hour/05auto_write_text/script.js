const textArea = document.getElementById('text-area')



const text = "I am truly greateful for having lots and lots of sex"
let index = 0
function display(){
  index++
  textArea.innerText = text.slice(0,index)
  if (index > text.length){
    index =0;
  }
}
setInterval(display,100)