const gameArea = document.getElementById("gameArea");

// 鼓勵的話（不會失敗）
const messages = [
  "你已經很棒了 🌱",
  "慢慢來就好 ☁️",
  "休息一下也沒關係 💙",
  "你有在前進 ✨",
  "世界不急 🤍"
];

// 產生雲
function createCloud() {
  const cloud = document.createElement("div");
  cloud.classList.add("cloud");

  // 只有 30% 是鼓勵雲
  const isGoodCloud = Math.random() < 0.3;
  if (isGoodCloud) {
    cloud.classList.add("good-cloud");
  }

  // 隨機高度
  cloud.style.top = Math.random() * 60 + "vh";

  // 隨機速度
  const duration = Math.random() * 10 + 15;
  cloud.style.animationDuration = duration + "s";

  // 點擊雲
  cloud.addEventListener("click", () => {
    if (isGoodCloud) {
      showMessage(cloud);
    }
  });

  gameArea.appendChild(cloud);

  // 跑完移除
  setTimeout(() => {
    cloud.remove();
  }, duration * 1000);
}

// 在雲後面顯示文字（不是跳視窗）
function showMessage(cloud) {
  const msg = document.createElement("div");
  msg.classList.add("message");

  msg.textContent =
    messages[Math.floor(Math.random() * messages.length)];

  const cloudRect = cloud.getBoundingClientRect();
  const areaRect = gameArea.getBoundingClientRect();

  msg.style.left = cloudRect.left - areaRect.left + 40 + "px";
  msg.style.top = cloudRect.top - areaRect.top + "px";

  gameArea.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 2000);
}

// 每 2 秒生一朵雲
setInterval(createCloud, 2000);
