const sky = document.getElementById("sky");

// 鼓勵語句清單
const messages = [
  "你做得很好 💗",
  "慢慢來就好 ☁️",
  "今天的你很棒",
  "別忘了休息一下",
  "加油，你可以的"
];

// 建立雲朵
function createCloud() {
  const cloud = document.createElement("div");
  cloud.classList.add("cloud");

  // 隨機高度
  cloud.style.top = Math.random() * 300 + "px";

  // 是否為粉紅雲
  const isPink = Math.random() < 0.2;
  if (isPink) {
    cloud.classList.add("pink");
  }

  // 點擊雲朵
  cloud.addEventListener("click", function () {
    // 如果是粉紅色雲 → 顯示鼓勵文字
    if (isPink) {
      showMessage();
    }
    cloud.remove();
  });

  sky.appendChild(cloud);

  // 飄完自動移除
  setTimeout(() => {
    cloud.remove();
  }, 10000);
}

// 顯示鼓勵文字
function showMessage() {
  const msg = document.createElement("div");
  msg.innerText = messages[Math.floor(Math.random() * messages.length)];

  msg.style.position = "fixed";
  msg.style.top = "50%";
  msg.style.left = "50%";
  msg.style.transform = "translate(-50%, -50%)";
  msg.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  msg.style.padding = "15px 25px";
  msg.style.borderRadius = "20px";
  msg.style.fontSize = "18px";
  msg.style.color = "#e91e63";
  msg.style.zIndex = "1000";

  document.body.appendChild(msg);

  // 2 秒後消失
  setTimeout(() => {
    msg.remove();
  }, 2000);
}

// 每 1.5 秒生成一朵雲
setInterval(createCloud, 1500);
