

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
do {
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

  QuestionElement.appendChild(buttonElement)

  // document.body.appendChild(AnswerElement);


  index++
} while (index < data.length);

// var buttonElement = document.createElement('button')
// buttonElement.innerText = "X"
// buttonElement.addEventListener('click', () => {
//   AnswerElement.classList.toggle('active')
// })
// QuestionElement.appendChild(buttonElement)

const buttons = document.querySelectorAll('button')
buttons.forEach((button)=>{

  button.addEventListener('click', () => {
    AnswerElement.classList.toggle('active')
})
})
  