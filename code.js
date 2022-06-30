const sizeDialog = document.querySelector(".size-dialog");
const changeSize = document.querySelector(".change-size");
const enterSize = document.querySelector(".enter-size");
const screen = document.querySelector(".screen");

/* function removeCells() {

} */

function addCells(size) {
  screen.style.setProperty("--size", size);
  for (let i = 0; i < size * size; i++) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell")
    screen.append(newCell)
  }
}

function populateScreen(event) {
  /* removeCells() */
  const sizeInput = document.getElementById("sizeInput");
  let numCells = sizeInput.value
  addCells(numCells);
  sizeDialog.close()
}

changeSize.addEventListener("click", () => {
  sizeDialog.showModal();
})

enterSize.addEventListener("click", populateScreen)