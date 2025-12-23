let answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkNumber() {
  let guess = document.getElementById("guessInput").value;
  attempts++;

  if (guess > answer) {
    document.getElementById("result").innerText = "太大了！";
  } else if (guess < answer) {
    document.getElementById("result").innerText = "太小了！";
  } else {
    document.getElementById("result").innerText = "🎉 答對了！";
  }

  document.getElementById("count").innerText =
    "猜測次數：" + attempts;
}
