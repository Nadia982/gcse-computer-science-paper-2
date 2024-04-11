const questions = [
    {
    id: 1,
    question: "What does MAR stand for?",
    answer: "Memory Address Register"
    }, 
    {
        id: 2,
        question: "What does PC stand for (in the context of Von Neumann architecture)?",
        answer: "Program Counter"
    }, 
    // {
    //     id: 3,
    //     question: "",
    //     answer: ""
    // },  
    // {
    //     id: [],
    //     question: "",
    //     answer: ""
    // }, 
    // {
    //     id: [],
    //     question: "",
    //     answer: ""
    // },
    // {
    //     id: [],
    //     question: "",
    //     answer: ""
    // }, 
    // {
    //     id: [],
    //     question: "",
    //     answer: ""
    // },
    // {
    //     id: [],
    //     question: "",
    //     answer: ""
    // }, 
    // {
    //     id: [],
    //     question: "",
    //     answer: ""
    // },
    // {
    //     id: [],
    //     question: "",
    //     answer: ""
    // }, 
    // {
    //     id: [],
    //     question: "",
    //     answer: ""
    // },
    // {
    //     id: [],
    //     question: "",
    //     answer: ""
    // }, 
    // {
    //     id: [],
    //     question: "",
    //     answer: ""
    // },

];

let message = document.getElementById("message")


function checkAnswers(){
  let score = 0;
  for(let x=0; x < questions.length; x++){
    let response = document.getElementById(`${questions[x].country}`)

  if(response.value == ""){
    message.innerHTML = `<p>Please input an answer</p>`
}

if(response.value == `{$questions[x].answer}`){
    console.log("correct answer")
    score++
    message.innerHTML = `{$questions[x].answer} is correct!`
}

}
document.getElementById("score").innerHTML += `Score: ${score} / ${questions.length}` 
}

let text = "";

for(let i=0; i<questions.length; i++){
  text+= `<p>${questions[i].question}</p>
  <input id="${questions[i].country}" type = "text">
`
}

document.getElementById("quiz").innerHTML = text + `<button onclick="checkAnswers()">Submit</button>`
