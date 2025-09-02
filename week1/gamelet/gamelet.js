const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);

//Variable for Horizontal Position, positive is right
let position = 0;
//Variable for Vertical Position, positive is up
let height = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (e.code === "ArrowDown") {
    height = height + 10;
  }
  if (e.code === "ArrowUp") {
    height = height - 10;
  }
  if (e.code === "KeyR") {
    position = 0;
    height = 0;
  }
  if (position < 0) {
    position = 0;
  }
  if (height < 0) {
    height = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = position + "px";
  ball.style.top = height + "px";
}
