let funnyTexts = [
  "你偷看答案對不對 😏",
  "這不是運氣，是實力 💪",
  "數學之神降臨 😂",
  "太強了吧 😎",
  "要不要去買樂透阿 🎰"
];

let answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkNumber() {
  const input = document.getElementById("guessInput");
  const result = document.getElementById("result");
  const count = document.getElementById("count");

  let guess = Number(input.value);
  attempts++;
  count.textContent = "猜測次數：" + attempts;

let diff = Math.abs(guess - answer);

if (guess > answer) {
  result.textContent = diff > 10 ? "太大了 😵（差有點遠）" : "有點大 🤏 快接近了！";
  result.style.color = "red";
  document.getElementById("funnyImg").style.display = "none";
}
else if (guess < answer) {
  result.textContent = diff > 10 ? "太小了 😵（差有點遠）" : "有點小 🤏 快接近了！";
  result.style.color = "red";
  document.getElementById("funnyImg").style.display = "none";
}

else {
  let randomText = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];

  result.innerHTML = "🎉🎉 猜對了！！<br>" + randomText;
  result.style.color = "green";

  document.getElementById("funnyImg").style.display = "block";
}



  count.textContent = "猜測次數：" + attempts;
}
function restartGame() {
  answer = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  document.getElementById("guessInput").value = "";
  document.getElementById("result").textContent = "遊戲已重新開始！";
  document.getElementById("result").style.color = "black";
  document.getElementById("count").textContent = "猜測次數：0";

  document.getElementById("funnyImg").style.display = "none";
}

function restartGame() {
  answer = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  document.getElementById("result").textContent = "";
  document.getElementById("count").textContent = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("funnyImg").style.display = "none";
}
