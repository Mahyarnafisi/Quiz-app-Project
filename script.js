"use strick";

const containerMenu = document.getElementById("menu");
const containerQuiz = document.getElementById("quiz");
const containerResult = document.getElementById("result");
//
let activeQuestion = true;
//
let numCorrectAns = 0;
let numWrongAns = 0;

window.addEventListener("load", () => {
  quizRules();
});
const quizRules = () => {
  containerMenu.innerHTML = ` <h3 class="menu__title">Quiz Rules</h3>
  <ol class="rules"></ol>
  <div class="menu__buttons">

  <button class="btn menu__btn--start">Start Quiz <i class="fa-solid fa-check-double"></i></button>

  <button class="btn menu__btn--info">Info <i class="fa-solid fa-barcode"></i></button>

  </div>`;

  const elementOl = document.querySelector(".rules");

  quizRulesList.forEach((rule, i) => {
    elementOl.innerHTML += `<li class="rules__item"> ${i + 1}. ${rule}</li>`;
  });

  //
  const btnStartQuiz = document.querySelector(".menu__btn--start");
  const btnInfo = document.querySelector(".menu__btn--info");

  // start button and go to first question
  btnStartQuiz.addEventListener("click", () => {
    containerMenu.classList.replace("display", "no-display");
    containerQuiz.classList.replace("no-display", "display");

    containerQuiz.innerHTML = ` <h4 class="quiz__question">${quizQuestions[0]["key"]}. ${quizQuestions[0]["question"]}</h4>
    <div class="option-container">
     
    </div>
    <div class="quiz__footer footer">
      <p class="timer">Timer left: 00:30 Sec</p>
      <button class="btn">Next Question <i class="fa-solid fa-chevron-right"></i></button>
    </div>`;
    const containerOption = document.querySelector(".option-container");
    quizQuestions[0]["options"].forEach((option, i) => {
      activeQuestion = true;
      containerOption.innerHTML += `<p class="option ">${i + 1}. ${option}</p>`;
    });

    // Click on answer Correct or Wrong
    const elementOptions = document.querySelectorAll(".option");
    elementOptions.forEach((option, i) => {
      option.addEventListener(
        "click",
        () => {
          if (i + 1 === quizQuestions[0]["answer"] && activeQuestion === true) {
            activeQuestion = false;
            option.classList.add("correct");
            option.innerHTML += `<span class="correct-tag">Correct</span>`;
            numCorrectAns++;
            console.log(numCorrectAns, numWrongAns);
          } else if (i + 1 !== quizQuestions[0]["answer"] && activeQuestion === true) {
            activeQuestion = false;
            option.classList.add("wrong");
            option.innerHTML += `<span class="wrong-tag">Wrong</span>`;
            numWrongAns++;
            console.log(numCorrectAns, numWrongAns);
          }
        },
        { once: true }
      );
    });
  });
};
