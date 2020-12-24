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