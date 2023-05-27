"use strick";

const containerMenu = document.getElementById("menu");
const containerQuiz = document.getElementById("quiz");
const containerResult = document.getElementById("result");
//

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

  btnStartQuiz.addEventListener("click", () => {
    containerMenu.classList.replace("display", "no-display");
    containerQuiz.classList.replace("no-display", "display");

    containerQuiz.innerHTML = ` <h4 class="quiz__question">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, provident?</h4>
    <div class="option-container">
      <p class="option wrong">Lorem ipsum dolor sit amet</p>
      <p class="option deactive">Lorem ipsum dolor sit.</p>
      <p class="option deactive">Lorem ipsum dolor sit amet consectetur.</p>
      <p class="option deactive">Lorem ipsum dolor sit .</p>
    </div>
    <div class="quiz__footer footer">
      <p class="timer">Timer left: 00:30 Sec</p>
      <button class="btn">Next Question <i class="fa-solid fa-chevron-right"></i></button>
    </div>`;
  });
};
