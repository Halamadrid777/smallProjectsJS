

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

var index = 0
var index1 = 0
var index2 = 0
var index3 = 0


var dataIndex = data[index]
var dataIndex1 = data[index1]
var dataIndex2 = data[index2]
var dataIndex3 = data[index3]

var container = document.createElement('div')
container.style.alignContent="center"
container.style.justifyContent="center"
container.style.alignItems = "center"

var QuestionElement = document.createElement('h3');
var QuestionElement1 = document.createElement('h3');
var QuestionElement2 = document.createElement('h3');
var QuestionElement3 = document.createElement('h3');
QuestionElement.innerText = dataIndex.question
QuestionElement1.innerText = dataIndex1.question
QuestionElement2.innerText = dataIndex2.question
QuestionElement3.innerText = dataIndex3.question


var AnswerElement = document.createElement('p')
var AnswerElement1 = document.createElement('p')
var AnswerElement2 = document.createElement('p')
var AnswerElement3 = document.createElement('p')
AnswerElement.innerText = dataIndex.answers
AnswerElement1.innerText = dataIndex1.answers
AnswerElement2.innerText = dataIndex2.answers
AnswerElement3.innerText = dataIndex3.answers

// set style
// better to use CSS though - just set class
QuestionElement.setAttribute('class', 'question'); // and make sure myclass has some styles in css
QuestionElement1.setAttribute('class', 'question'); // and make sure myclass has some styles in css
QuestionElement2.setAttribute('class', 'question'); // and make sure myclass has some styles in css
QuestionElement3.setAttribute('class', 'question'); // and make sure myclass has some styles in css

AnswerElement.setAttribute('class', 'answer')
AnswerElement1.setAttribute('class', 'answer1')
AnswerElement2.setAttribute('class', 'answer2')
AnswerElement3.setAttribute('class', 'answer3')


document.body.appendChild(container);
container.appendChild(QuestionElement)
container.appendChild(AnswerElement)

container.appendChild(QuestionElement1)
container.appendChild(AnswerElement1)

container.appendChild(QuestionElement2)
container.appendChild(AnswerElement2)

container.appendChild(QuestionElement3)
container.appendChild(AnswerElement3)




var buttonElement= document.createElement('button')
var buttonElement1= document.createElement('button')
var buttonElement2= document.createElement('button')
var buttonElement3 = document.createElement('button')


buttonElement.innerText = "X"
buttonElement1.innerText = "X"
buttonElement2.innerText = "X"
buttonElement3.innerText = "X"

QuestionElement.appendChild(buttonElement)
QuestionElement1.appendChild(buttonElement1)
QuestionElement2.appendChild(buttonElement2)
QuestionElement3.appendChild(buttonElement3)


// document.body.appendChild(AnswerElement);


index++

buttonElement.addEventListener('click', () => {
  AnswerElement.classList.toggle('active')
})
buttonElement1.addEventListener('click', () => {
  AnswerElement1.classList.toggle('active')
})
buttonElement2.addEventListener('click', () => {
  AnswerElement2.classList.toggle('active')
})
buttonElement3.addEventListener('click', () => {
  AnswerElement3.classList.toggle('active')
})




// var buttonElement = document.createElement('button')
// buttonElement.innerText = "X"
// buttonElement.addEventListener('click', () => {
//   AnswerElement.classList.toggle('active')
// })
// QuestionElement.appendChild(buttonElement)
