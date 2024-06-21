alert("Правила: копите деньги и прокачиваетесь, в минус можно уходить до -100, далее вы проиграете!")
let score = 1000;
updating = 1;

function clickBtn() {
  score = score + updating;
  document.getElementById("main_btn").innerHTML = score + "$";
}
function update() {
  score = score - 100;
  document.getElementById("main_btn").innerHTML = score + "$";
  if1();
  updating += 1;
}
function update1() {
  score = score - 150;
  document.getElementById("main_btn").innerHTML = score + "$";
  if1();
  updating += 2;
}
function update2() {
  score = score - 250;
  document.getElementById("main_btn").innerHTML = score + "$";
  if1();
  updating += 3;
}
function update3() {
  score = score - 500;
  document.getElementById("main_btn").innerHTML = score + "$";
  if1();
  updating += 10;
}

// Кнопка авто 1
let auto_1_active = false;
let autoLvl1 = 1
const button = document.getElementById("btn_auto_1");
button.addEventListener("click", function() {
  score = score - 100 * autoLvl1;
  document.getElementById("main_btn").innerHTML = score + "$";
  let btn_text = document.getElementById("btn_auto_1_price");
  btn_text.innerHTML = 100 * (autoLvl1 + 1) + "$";

  const duration = 1000;
  let progress = 0;
  if (auto_1_active === false) {
    auto_1_active = true;
    setInterval(function () {
      progress++;
      let progressBar = document.getElementById("progressBar");

      // btn.disabled = true;
      progressBar.style.width = (progress / duration) * 190 + 'px';
      if (progress === duration) {
        score = score + autoLvl1;
        document.getElementById("main_btn").innerHTML = score + "$";
        progress = 0;
      }
    }, 10);
  } else {
    autoLvl1 += 1;
    let btn_lvl = document.getElementById("btn_auto_1_lvl");
    btn_lvl.innerHTML = "Lvl " + autoLvl1;
  }
  if1();
});

// Кнопка авто 2
let auto_2_active = false;
let autoLvl2 = 1
const button2 = document.getElementById("btn_auto_2");
button2.addEventListener("click", function() {
  score = score - 200 * autoLvl2;
  document.getElementById("main_btn").innerHTML = score + "$";
  let btn_text = document.getElementById("btn_auto_2_price");
  btn_text.innerHTML = 200 * (autoLvl2 + 1) + "$";

  const duration = 500;
  let progress = 0;
  if (auto_2_active === false) {
    auto_2_active = true;
    setInterval(function () {
      progress++;
      let progressBar = document.getElementById("progressBar2");
      let btn = document.getElementById("btn_auto_2");
      // btn.disabled = true;
      progressBar.style.width = (progress / duration) * 190 + 'px';
      if (progress === duration) {
        score = score + autoLvl2;
        document.getElementById("main_btn").innerHTML = score + "$";
        progress = 0;
      }
    }, 10);
  } else {
    autoLvl2 += 1;
    let btn_lvl = document.getElementById("btn_auto_2_lvl");
    btn_lvl.innerHTML = "Lvl " + autoLvl2;
  }
  if1();
});


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
function reboot () {
  alert("Ваш уровень прокачки " + updating + ". Ваш баланс " + score + " .");
}
