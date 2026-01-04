const sky = document.getElementById("sky");

const messages = [
  "你很棒 🤍",
  "慢慢來就好 ☁️",
  "已經很努力了",
  "今天也撐過來了",
  "加油 加油"
];

// 產生雲
function createCloud() {
  const cloud = document.createElement("div");
  cloud.classList.add("cloud");

  // 20% 機率是鼓勵雲
  const isEaster = Math.random() < 0.2;
  if (isEaster) {
    cloud.classList.add("easter");
  }

  const top = Math.random() * (window.innerHeight - 200) + 80;
  cloud.style.top = top + "px";

  const duration = Math.random() * 10 + 20;
  cloud.style.animationDuration = duration + "s";

  // 點雲
  cloud.addEventListener("click", () => {
    if (isEaster) {
      showMessage(cloud);
    }
  });

  sky.appendChild(cloud);

  // 雲跑完就刪掉
  setTimeout(() => {
    cloud.remove();
  }, duration * 1000);
}

// 顯示鼓勵文字（雲不會停）
function showMessage(cloud) {
  const msg = document.createElement("div");
  msg.classList.add("message");

  msg.innerText =
    messages[Math.floor(Math.random() * messages.length)];

  const rect = cloud.getBoundingClientRect();
  msg.style.left = rect.left + rect.width / 2 - 40 + "px";
  msg.style.top = rect.top + rect.height + "px";

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 2000);
}

// 每 2 秒生一朵雲
setInterval(createCloud, 2000);
