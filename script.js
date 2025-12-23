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

 if (guess > answer) {
  result.textContent = "太大了！";
  result.style.color = "red";
  document.getElementById("funnyImg").style.display = "none";
}
else if (guess < answer) {
  result.textContent = "太小了！";
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

