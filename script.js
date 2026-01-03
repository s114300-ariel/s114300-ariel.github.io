const messages = [
  "你很棒 💖",
  "今天也辛苦了 ☁️",
  "慢慢來沒關係 🌱",
  "你值得休息一下 😌"
  "加油！你可以的 🌈"
];

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
function showMessage(text) {
  const msg = document.createElement("div");
  msg.innerText = text;

  msg.style.position = "fixed";
  msg.style.top = "50%";
  msg.style.left = "50%";
  msg.style.transform = "translate(-50%, -50%)";
  msg.style.background = "rgba(255,255,255,0.9)";
  msg.style.padding = "20px 30px";
  msg.style.borderRadius = "20px";
  msg.style.fontSize = "20px";
  msg.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
  msg.style.zIndex = "9999";

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 2000);
}
