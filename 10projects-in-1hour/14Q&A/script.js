

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

var container = document.createElement('div')
container.style.alignContent = "center"
container.style.justifyContent = "center"
container.style.alignItems = "center"
document.body.appendChild(container);
var index = 0


do {
  var dataIndex = data[index]
  var QuestionElement = document.createElement('h3');
  QuestionElement.innerText = dataIndex.question
  QuestionElement.setAttribute('class', 'question'); // and make sure myclass has some styles in css
  
  var answers = document.getElementsByTagName('p')
  var AnswerElement = document.createElement('p')
  AnswerElement.innerText = dataIndex.answers
  AnswerElement.setAttribute('id', 'answers')
  
  var buttonElement= document.createElement('button')
  buttonElement.setAttribute('class','button')
  buttonElement.innerText = "X"

  container.appendChild(QuestionElement)
  container.appendChild(AnswerElement)
  QuestionElement.appendChild(buttonElement)



  index++

} while (index < data.length);

answers[0].setAttribute('class', 'answer')
answers[1].setAttribute('class', 'answer1')
answers[2].setAttribute('class', 'answer2')
answers[3].setAttribute('class', 'answer3')

var buttons = document.getElementsByClassName('button')
buttons[0].addEventListener('click', () => {
  answers[0].classList.toggle('active')
})
buttons[1].addEventListener('click', () => {
  answers[1].classList.toggle('active')
})
buttons[2].addEventListener('click', () => {
  answers[2].classList.toggle('active')
})
buttons[3].addEventListener('click', () => {
  answers[3].classList.toggle('active')
})