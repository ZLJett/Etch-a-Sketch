const sizeDialog = document.querySelector(".size-dialog");
const sizeButton = document.querySelector(".change-size");
const closeButton = document.querySelector(".close-button");

sizeButton.addEventListener("click", () => {
  sizeDialog.showModal();
})

closeButton.addEventListener("click", () => {
  sizeDialog.close();
})