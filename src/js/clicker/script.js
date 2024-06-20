alert("Правила: копите деньги и прокачиваетесь, в минус можно уходить до -100, далее вы проиграете!")
var score = 0;
updating = 1;




function clickBtn() {
  score = score + updating;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
}
function update() {
  score = score - 100;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 1;
}
function update1() {
  score = score - 150;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 2;
}
function update2() {
  score = score - 250;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 3;
}
function update3() {
  score = score - 500;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  if1();
  updating += 10;
}

let autoLvl1 = 1

function auto() {
  score = score - 100;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
  setInterval("pulsauto()", 100);
  if1();
}

const progressBar = document.getElementById("progressBar");
let timerDuration = 10; // Таймер на 10 секунд
let interval;

function pulsauto () {
  score += autoLvl1;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";

  if (interval) {
    clearInterval(interval);
  }

  // Сбросить прогресс бар
  progressBar.style.width = "0%";

  let startTime = Date.now();
  interval = setInterval(() => {
    let elapsedTime = (Date.now() - startTime) / 1000;
    let progressPercentage = Math.min((elapsedTime / timerDuration) * 100, 100);
    progressBar.style.width = progressPercentage + "%";

    // Остановить таймер, если прошла вся длительность
    if (progressPercentage >= 100) {
      clearInterval(interval);
      alert("Таймер завершен!");
    }
  }, 10000);
}
function autoLvlUp () {
  score -= 100;
  autoLvl1 += 1;
  if1();
}




function if1 () {
  if (score < -100) {
    document.write("Вы проиграли, так-как вы превысили лимит кредита");
  }
}
function auto1 () {
  score += updating;
  setTimeout("plusauto()", 1000);
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
}
function pashalka () {
  score += 10000;
  document.getElementsByTagName("h1")[0].firstChild.data = score + "$";
}
function reboot () {
  alert("Ваш уровень прокачки " + updating + ". Ваш баланс " + score + " .");
}





document.addEventListener("DOMContentLoaded", function() {
  const timerButton = document.getElementById("timerButton");
  const progressBar = document.getElementById("progressBar");
  let timerDuration = 10; // Таймер на 10 секунд
  let interval;

  timerButton.addEventListener("click", function() {
    if (interval) {
      clearInterval(interval);
    }

    // Сбросить прогресс бар
    progressBar.style.width = "0%";

    let startTime = Date.now();
    interval = setInterval(() => {
      let elapsedTime = (Date.now() - startTime) / 1000;
      let progressPercentage = Math.min((elapsedTime / timerDuration) * 100, 100);
      progressBar.style.width = progressPercentage + "%";

      // Остановить таймер, если прошла вся длительность
      if (progressPercentage >= 100) {
        clearInterval(interval);
        alert("Таймер завершен!");
      }
    }, 100);
  });
});


