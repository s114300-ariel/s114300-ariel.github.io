let answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkNumber() {
  const input = document.getElementById("guessInput");
  const result = document.getElementById("result");
  const count = document.getElementById("count");

  let guess = Number(input.value);
  attempts++;

  if (guess > answer) {
    result.textContent = "太大了！";
  } else if (guess < answer) {
    result.textContent = "太小了！";
  } else {
    result.textContent = "🎉 答對了！";
  }

  count.textContent = "猜測次數：" + attempts;
}

