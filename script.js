const gameArea = document.getElementById("gameArea");

// 每 1.5 秒產生一朵新雲
setInterval(createCloud, 1500);

function createCloud() {
  const cloud = document.createElement("div");
  cloud.classList.add("cloud");

  // 隨機高度（不要太低或太高）
  const top = Math.random() * 60 + 10;
  cloud.style.top = top + "vh";

  // 隨機移動速度
  const duration = Math.random() * 10 + 15;
  cloud.style.animationDuration = duration + "s";

  // ⭐ 重點：點擊才會消失（戳戳樂）
  cloud.addEventListener("click", () => {
    cloud.remove();
  });

  gameArea.appendChild(cloud);
}
