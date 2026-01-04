const gameArea = document.getElementById("gameArea");

function createCloud() {
  const cloud = document.createElement("div");
  cloud.classList.add("cloud");
  cloud.textContent = "☁️";

  // 20% 機率是彩蛋雲
  if (Math.random() < 0.2) {
    cloud.classList.add("easter");
  }

  cloud.style.top = Math.random() * 60 + "vh";
  cloud.style.animationDuration = (8 + Math.random() * 6) + "s";

  gameArea.appendChild(cloud);

  // 離開畫面後刪掉
  setTimeout(() => {
    cloud.remove();
  }, 15000);
}

// 每 1.5 秒產生一朵雲
setInterval(createCloud, 1500);
