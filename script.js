const field = document.getElementById("field");

field.addEventListener("click", function (e) {
  const grass = document.createElement("div");
  grass.classList.add("grass");
  grass.textContent = "🌱";

  // 取得點擊位置
  grass.style.left = e.clientX + "px";
  grass.style.top = e.clientY + "px";

  field.appendChild(grass);
});
