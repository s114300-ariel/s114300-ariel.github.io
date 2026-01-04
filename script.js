const messages = [
  "你做得很好 💪",
  "慢慢來也沒關係 🌈",
  "你已經很努力了 ☁️",
  "今天的你很棒 ✨",
  "別急，一步一步來 🤍"
];

const gameArea = document.getElementById("gameArea");

// 產生雲朵
function createCloud() {
  const cloud = document.createElement("div");
  cloud.className = "cloud";

  // 隨機高度
  const top = Math.random() * 400 + 50;
  cloud.style.top = top + "px";

  // 隨機速度
  const speed = Math.random() * 5 + 5;
  cloud.style.animationDuration = speed + "s";

  // 點擊雲朵 → 消失
  cloud.addEventListener("click", () => {
    cloud.remove();
  });

  gameArea.appendChild(cloud);

  // 雲跑完自動移除
  setTimeout(() => {
    cloud.remove();
  }, speed * 1000);
}

// 每 1 秒生一朵雲
setInterval(createCloud, 1000);

