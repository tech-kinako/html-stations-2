function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const isCheck = document.getElementById("check");
  const target = document.getElementById("text");
  if (isCheck.checked) {
      target.style.backgroundColor = "red";
  } else {
    target.style.backgroundColor = "transparent";
  }
}
