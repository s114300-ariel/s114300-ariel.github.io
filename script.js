const gameArea = document.getElementById("gameArea");

// 每 1.5 秒生一朵雲
setInterval(createCloud, 1500);

function createCloud() {
  const cloud = document.createElement("div");
  cloud.classList.add("cloud");

  // 隨機高度
  const top = Math.random() * 60 + 10;
  cloud.style.top = top + "vh";

  // 隨機速度
  const duration = Math.random() * 10 + 15;
  cloud.style.animationDuration = duration + "s";

  // 點擊雲 → 雲消失
  cloud.addEventListener("click", () => {
    cloud.remove();
  });

  gameArea.appendChild(cloud);

  // 雲跑完自動刪掉（避免越來越多）
  setTimeout(() => {
    cloud.remove();
  }, duration * 1000);
}
