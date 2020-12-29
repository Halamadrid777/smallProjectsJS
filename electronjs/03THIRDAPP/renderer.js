const electron = require('electron')
const {shell} = require('electron')
const showSite =()=>{
  shell.openExternal('https://www.electronjs.org')
}
showSite()
// shell.openItem is used for opening  items such as Images,... in the <-DEFAULT-> launcher of its type
// shell.showItemInFolder is used for open items in <-Explorer->
// shell.MoveItemToTrash 

console.log(electron.screen.getPrimaryDisplay);
console.log(process.memoryUsage);
const div1 = document.createElement('div')
div1.innerHTML = "<h3>BYE</h3>"
document.body.appendChild(div1)
const container = document.getElementById('container')
const display = document.getElementById('display-num')

const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')
const increase = document.getElementById('increase')


increase.addEventListener('click', () => {
  number++
})
decrease.addEventListener('click', () => {
  number--
})
reset.addEventListener('click', () => {
  number=0
})



let number=00000000;
function operation() {
    display.innerText = 000+number

}
setInterval(operation, 100)