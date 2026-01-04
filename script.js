const gameArea = document.getElementById("gameArea");

const messages = [
  "你已經很棒了 🤍",
  "慢慢來沒關係 ☁️",
  "休息一下也可以 😊",
  "你正在前進中 ✨"
];

function createCloud() {
  const cloud = document.createElement("div");
  cloud.className = "cloud";

  // 隨機決定是不是「鼓勵雲」
  const isGoodCloud = Math.random() < 0.3;
  if (isGoodCloud) {
    cloud.classList.add("good-cloud");
  }

  cloud.style.top = Math.random() * 300 + "px";
  cloud.style.animationDuration = 15 + Math.random() * 10 + "s";

  cloud.addEventListener("click", () => {
    if (isGoodCloud) {
      showMessage(cloud);
    }
  });

  gameArea.appendChild(cloud);

  setTimeout(() => cloud.remove(), 25000);
}

function showMessage(cloud) {
  const msg = document.createElement("div");
  msg.className = "message";
  msg.innerText = messages[Math.floor(Math.random() * messages.length)];

  const rect = cloud.getBoundingClientRect();
  msg.style.left = rect.left + "px";
  msg.style.top = rect.top - 30 + "px";

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 2000);
}

setInterval(createCloud, 2000);
