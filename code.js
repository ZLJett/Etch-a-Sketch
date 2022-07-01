const sizeDialog = document.querySelector(".size-dialog");
const changeSize = document.querySelector(".change-size");
const enterSize = document.querySelector(".enter-size");
const screen = document.querySelector(".screen");

function removeCells() {
  const cellList = document.querySelectorAll(".cell");
  cellList.forEach(cell => cell.remove());
}

function addCells(size) {
  screen.style.setProperty("--size", size);
  for (let i = 0; i < size * size; i++) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.addEventListener("mouseover", () => {
      newCell.style.background = "black";
    })
    screen.append(newCell);
  }
}

function populateScreen(event) {
  removeCells();
  const sizeInput = document.getElementById("sizeInput");
  let numCells = sizeInput.value;
  addCells(numCells);
  sizeDialog.close();
}

function initialSetup(event) {
  let startingCells = 16;
  addCells(startingCells);
}

window.addEventListener("load", initialSetup);

changeSize.addEventListener("click", () => {
  sizeDialog.showModal();
})

enterSize.addEventListener("click", populateScreen);





