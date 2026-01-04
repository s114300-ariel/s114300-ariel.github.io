const gameArea = document.getElementById("gameArea");

function createCloud() {
  const cloud = document.createElement("div");
  cloud.className = "cloud";

  // 隨機高度
  const top = Math.random() * 400;
  cloud.style.top = top + "px";

  // 從左邊出現
  cloud.style.left = "-120px";

  // 點到雲 → 消失
  cloud.onclick = () => {
    cloud.remove();
  };

  gameArea.appendChild(cloud);

  let position = -120;
  const speed = Math.random() * 1.5 + 0.5;

  // 移動雲
  const move = setInterval(() => {
    position += speed;
    cloud.style.left = position + "px";

    // 超出畫面就刪掉
    if (position > window.innerWidth) {
      cloud.remove();
      clearInterval(move);
    }
  }, 10);
}

// 每 1.5 秒生一朵雲
setInterval(createCloud, 1500);
