const sky = document.getElementById("sky");

// 建立雲朵
function createCloud() {
  const cloud = document.createElement("div");
  cloud.classList.add("cloud");

  // 隨機高度
  cloud.style.top = Math.random() * 300 + "px";

  // 20% 機率生成粉紅色雲
  if (Math.random() < 0.2) {
    cloud.classList.add("pink");
  }

  // 點擊雲朵後消失
  cloud.addEventListener("click", function () {
    cloud.remove();
  });

  sky.appendChild(cloud);

  // 雲朵飄完後自動移除
  setTimeout(() => {
    cloud.remove();
  }, 10000);
}

// 每 1.5 秒生成一朵雲
setInterval(createCloud, 1500);
