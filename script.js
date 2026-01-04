const sky = document.getElementById("sky");

const messages = [
  "你很棒 🌟",
  "慢慢來就好 ☁️",
  "今天的你已經很努力了 💙",
  "沒關係，休息一下也可以 😊"
];

function createCloud() {
  const cloud = document.createElement("div");
  cloud.classList.add("cloud");

  // 隨機高度
  cloud.style.top = Math.random() * 70 + "vh";

  // 隨機速度
  const duration = Math.random() * 10 + 15;
  cloud.style.animationDuration = duration + "s";

  // 🎁 20% 機率是彩蛋雲
  const isEaster = Math.random() < 0.2;
  if (isEaster) {
    cloud.classList.add("easter");
  }

  cloud.onclick = () => {
    if (isEaster) {
      alert(messages[Math.floor(Math.random() * messages.length)]);
    }
    cloud.remove();
  };

  sky.appendChild(cloud);

  // 跑完自動消失
  setTimeout(() => {
    cloud.remove();
  }, duration * 1000);
}

// 每 1.5 秒生一朵雲
setInterval(createCloud, 1500);
