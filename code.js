const sizeDialog = document.querySelector(".size-dialog");
const sizeButton = document.querySelector(".change-size");
const enterButton = document.querySelector(".enter-button");
const screen = document.querySelector(".screen");

sizeButton.addEventListener("click", () => {
  sizeDialog.showModal();
})

enterButton.addEventListener("click", () => {
  screen.textContent = "hello";
  sizeDialog.close();
})