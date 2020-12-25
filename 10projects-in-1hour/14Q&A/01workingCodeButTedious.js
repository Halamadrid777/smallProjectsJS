// /* .answer.active{
//   padding:4px;
//   border:1px solid;
//   background-color:rgb(46, 44, 192); 
//   visibility:visible;
// }
// .answer{
//   visibility: hidden;
// } */

const data = [
  {
    id: 1,
    question: "What is AI with example?",
    answers: "Artificial Intelligence (AI) is the branch of computer sciences that emphasizes the development of intelligence machines, thinking and working like humans. For example, speech recognition, problem-solving, learning and planning.",
  },
  {
    id: 2,
    question: "How is AI created?",
    answers: "How Artificial Intelligence Works. AI works by combining large amounts of data with fast, iterative processing and intelligent algorithms, allowing the software to learn automatically from patterns or features in the data.",
  },
  {
    id: 3,
    question: "Can robots love?",
    answers: "Can you love your robot and can your robot love you back? According to Dr. Hooman Samani the answer is yes and it is already happening. ... He coined the terms lovotics — a combination of the words love and robotics — and studies 'bidirectional' love between robots and humans.",
  },
  {
    id: 4,
    question: "What is AI in simple words?",
    answers: "Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.",
  },
]

let index = 0

var dataIndex = data[index]
var container = document.createElement('div')

var QuestionElement = document.createElement('h3');
QuestionElement.innerText = dataIndex.question

var AnswerElement = document.createElement('p')
AnswerElement.innerText = dataIndex.answers
// set style
QuestionElement.style.color = 'red';
// better to use CSS though - just set class
QuestionElement.setAttribute('class', 'question'); // and make sure myclass has some styles in css
AnswerElement.setAttribute('class', 'answer')

document.body.appendChild(container);
container.appendChild(QuestionElement)
container.appendChild(AnswerElement)

var buttonElement = document.createElement('button')
buttonElement.innerText = "X"
buttonElement.addEventListener('click', () => {
  AnswerElement.classList.toggle('active')
})
QuestionElement.appendChild(buttonElement)

// document.body.appendChild(AnswerElement);

document.body.appendChild(container);
container.appendChild(QuestionElement)
container.appendChild(AnswerElement)

// second-------------------

let index1 = 0

var dataIndex1 = data[index1]
var container1 = document.createElement('div')

var QuestionElement1 = document.createElement('h3');
QuestionElement1.innerText = dataIndex1.question

var AnswerElement1 = document.createElement('p')
AnswerElement1.innerText = dataIndex1.answers
// set style
QuestionElement1.style.color = 'red';
// better to use CSS though - just set class
QuestionElement1.setAttribute('class', 'question'); // and make sure myclass has some styles in css
AnswerElement1.setAttribute('class', 'answer')

document.body.appendChild(container1);
container1.appendChild(QuestionElement1)
container1.appendChild(AnswerElement1)

var buttonElement1 = document.createElement('button')
buttonElement1.innerText = "X"
buttonElement1.addEventListener('click', () => {
  AnswerElement1.classList.toggle('active')
})
QuestionElement1.appendChild(buttonElement1)

// document.body.appendChild(AnswerElement);

document.body.appendChild(container1);
container1.appendChild(QuestionElement1)
container1.appendChild(AnswerElement1)











// third---------------------------
let index2 = 0

var dataindex2 = data[index2]
var container2 = document.createElement('div')

var QuestionElement2 = document.createElement('h3');
QuestionElement2.innerText = dataindex2.question

var AnswerElement2 = document.createElement('p')
AnswerElement2.innerText = dataindex2.answers
// set style
QuestionElement2.style.color = 'red';
// better to use CSS though - just set class
QuestionElement2.setAttribute('class', 'question'); // and make sure myclass has some styles in css
AnswerElement2.setAttribute('class', 'answer')

document.body.appendChild(container2);
container2.appendChild(QuestionElement2)
container2.appendChild(AnswerElement2)

var buttonElement2 = document.createElement('button')
buttonElement2.innerText = "X"
buttonElement2.addEventListener('click', () => {
  AnswerElement2.classList.toggle('active')
})
QuestionElement2.appendChild(buttonElement2)

// document.body.appendChild(AnswerElement);

document.body.appendChild(container2);
container2.appendChild(QuestionElement2)
container2.appendChild(AnswerElement2)








// fourth-------------

let index3 = 0

var dataindex3 = data[index3]
var container3 = document.createElement('div')

var QuestionElement3 = document.createElement('h3');
QuestionElement3.innerText = dataindex3.question

var AnswerElement3 = document.createElement('p')
AnswerElement3.innerText = dataindex3.answers
// set style
QuestionElement3.style.color = 'red';
// better to use CSS though - just set class
QuestionElement3.setAttribute('class', 'question'); // and make sure myclass has some styles in css
AnswerElement3.setAttribute('class', 'answer')

document.body.appendChild(container3);
container3.appendChild(QuestionElement3)
container3.appendChild(AnswerElement3)

var buttonElement3 = document.createElement('button')
buttonElement3.innerText = "X"
buttonElement3.addEventListener('click', () => {
  AnswerElement3.classList.toggle('active')
})
QuestionElement3.appendChild(buttonElement3)

// document.body.appendChild(AnswerElement);

document.body.appendChild(container3);
container3.appendChild(QuestionElement3)
container3.appendChild(AnswerElement3)