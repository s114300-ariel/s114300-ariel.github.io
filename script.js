const gameArea = document.getElementById("gameArea");

// 每 1.2 秒生一顆氣球
setInterval(createBalloon, 1200);

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  // ⭐ 20% 機率是特別氣球
  const isSpecial = Math.random() < 0.2;
  if (isSpecial) {
    balloon.classList.add("special");
  }

  // 隨機左右位置
  const left = Math.random() * 90;
  balloon.style.left = left + "vw";

  // 隨機速度
  const duration = Math.random() * 5 + 6;
  balloon.style.animationDuration = duration + "s";

  // 點擊氣球
  balloon.addEventListener("click", () => {
    if (isSpecial) {
      showMessage(balloon.offsetLeft, balloon.offsetTop);
    }
    balloon.remove();
  });

  gameArea.appendChild(balloon);

  // 飄出畫面後自動清除
  setTimeout(() => {
    balloon.remove();
  }, duration * 1000);
}

function showMessage(x, y) {
  const msg = document.createElement("div");
  msg.classList.add("message");

  const texts = ["你很棒！", "做得好！", "繼續加油 💪"];
  msg.textContent = texts[Math.floor(Math.random() * texts.length)];

  msg.style.left = x + "px";
  msg.style.top = y + "px";

  gameArea.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 2000);
}
