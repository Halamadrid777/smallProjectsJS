const data = [{
  id: 1,
  name: "Diana Korkunova",
  job: "Smiling",
  img: "https://i.pinimg.com/564x/de/58/29/de5829b76d2dba2bd54677d25bd30126.jpg",
  text: "Beautiful Gorgeous Wifey",
  instagram:"https://www.instagram.com/diana_korkunova/"

},
{
  id:2,
  name:"aijanasemova_",
  job:"Modelling" ,
  img: "https://suburbanmen.com/wp-content/uploads/2020/10/instagram-crush-aijan-asemova-20201006-1001.jpg",
  text: "Eyecatching",
  instagram:"https://www.instagram.com/aijanasemova_"

},

  {
  id:3,
  name:"kitty plays",
  job: "super gamer",
  img:"https://i.pinimg.com/564x/0e/9e/fa/0e9efad90ce1822d91ea06ca3d1b1088.jpg",
  text: "good looking",
  instagram:"https://www.instagram.com/kittyplays/"

  },
  {
    id:4,
    name:"Camilakillia",
    job: "murderer",
    img: "https://i.pinimg.com/564x/93/b7/2c/93b72c80ca6a6764525144198911a504.jpg",
    text: "Killer ",
    instagram:"https://www.instagram.com/camilakilla/"

    },
]

const name = document.getElementById('name')
const job = document.getElementById('title')
const image = document.getElementById('image')
const info = document.getElementById('info')
const insta = document.getElementById('insta')

const indexDown = document.getElementById('indexDown')
const indexUp = document.getElementById('indexUp')
let index = 1

console.log(data[index]);


function display(){
  name.innerText = data[index].name
  job.innerText = data[index].job
  image.src = data[index].img
  info.innerText = data[index].text
  insta.href = data[index].instagram
}
main()
indexUp.addEventListener('click',()=>{
  index++
  main()
})
indexDown.addEventListener('click',()=>{
  index--
  main()
})

function main(){

  console.log(index);
  display()
}

