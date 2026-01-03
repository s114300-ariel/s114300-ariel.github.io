function praiseMe() {
    const input = document.getElementById('userInput').value;
    const display = document.getElementById('praiseText');

    if (input.trim() === "") {
        display.innerText = "請先輸入內容，AI 才能誇獎你呀！";
        return;
    }

    // 誇獎語庫 (與 Python 的 List 觀念相同)
    const praises = [
        "這件事看起來簡單，但你的堅持讓它變得不平凡！",
        "太強了！你簡直是處理這類事情的天才。",
        "世界因為有你這份小小的努力，變得更美好了。",
        "這種執行力，連 AI 都感到佩服！",
        "你就是這方面的專家，請收下我的膝蓋！"
    ];

    // 隨機選取
    const randomIndex = Math.floor(Math.random() * praises.length);
    const result = praises[randomIndex];

    // 顯示結果
    display.innerText = `針對「${input}」：\n${result}`;
}

  document.getElementById("result").textContent = "";
  document.getElementById("count").textContent = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("funnyImg").style.display = "none";
}
