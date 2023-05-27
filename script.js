"use strick";
const containerMenu = document.getElementById("menu");
const containerQuiz = document.getElementById("quiz");
const containerResult = document.getElementById("result");

window.addEventListener("load", () => {
  quizRules();
});
const quizRules = () => {
  containerMenu.innerHTML = ` <h3 class="menu__title">Quiz Rules</h3>
  <ol class="rules">
  
  </ol>
  <div class="menu__buttons">
  <button class="btn menu__btn--start">Start Quiz <i class="fa-solid fa-check-double"></i></button>
  <button class="btn menu__btn--info">Info <i class="fa-solid fa-barcode"></i></button>
  </div>`;

  const elementOl = document.querySelector(".rules");

  quizRulesList.forEach((rule, i) => {
    elementOl.innerHTML += `<li class="rules__item">${i + 1}. ${rule}</li>`;
  });
};
