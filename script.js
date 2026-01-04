const field = document.getElementById("field");

field.addEventListener("click", function (e) {
  const plant = document.createElement("div");
  plant.classList.add("grass");

  // ⭐ 20% 機率長花，其餘是草
  if (Math.random() < 0.2) {
    plant.textContent = "🌸";
  } else {
    plant.textContent = "🌱";
  }

  plant.style.left = e.clientX + "px";
  plant.style.top = e.clientY + "px";

  field.appendChild(plant);
});
