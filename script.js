const gameArea = document.getElementById("gameArea");

// 鼓勵文字清單
const messages = [
  "你很棒 🌟",
  "慢慢來沒關係 ☁️",
  "已經很努力了 💙",
  "休息一下也很好 🍃",
  "你值得被肯定 🤍"
];

// 產生雲
function createCloud() {
  const cloud = document.createElement("div");
  cloud.classList.add("cloud");

  // 30% 機率是「鼓勵雲」
  const isGood = Math.random() < 0.3;
  if (isGood) {
    cloud.classList.add("good-cloud");
  }

  // 隨機高度
  cloud.style.top = Math.random() * 60 + "vh";

  // 隨機速度
  const duration = Math.random() * 10 + 15;
  cloud.style.animationDuration = duration + "s";

  // 點擊事件
  cloud.addEventListener("click", () => {
    if (isGood) {
      showMessage(cloud);
    }
  });

  gameArea.appendChild(cloud);

  // 動畫結束後移除
  setTimeout(() => {
    cloud.remove();
  }, duration * 1000);
}

// 顯示鼓勵文字（在雲後面，不跳視窗）
function showMessage(cloud) {
  const msg = document.createElement("div");
  msg.classList.add("message");

  // 隨機一句鼓勵的話
  msg.textContent = messages[Math.floor(Math.random() * messages.length)];

  // 文字位置 = 雲的位置
  const rect = cloud.getBoundingClientRect();
  const gameRect = gameArea.getBoundingClientRect();

  msg.style.left = rect.left - gameRect.left + 40 + "px";
  msg.style.top = rect.top - gameRect.top + "px";

  gameArea.appendChild(msg);

  // 2 秒後移除文字
  setTimeout(() => {
    msg.remove();
  }, 2000);
}

// 每 2 秒產生一朵雲
setInterval(createCloud, 2000);
