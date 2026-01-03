const messages = [
  "雲朵今天也在混",
  "先休息一下再說",
  "人生不一定要有答案",
  "你已經很努力了",
  "戳我不會比較快下課"
];

function pokeCloud() {
  const msg = document.getElementById("message");
  const random = Math.floor(Math.random() * messages.length);
  msg.innerText = messages[random];
}
