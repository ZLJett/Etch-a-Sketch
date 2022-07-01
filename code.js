const sizeDialog = document.querySelector(".size-dialog");
const changeSize = document.querySelector(".change-size");
const enterSize = document.querySelector(".enter-size");
const screen = document.querySelector(".screen");
let isDrawing = false;

function removeCells() {
  const cellList = document.querySelectorAll(".cell");
  cellList.forEach(cell => cell.remove());
}

function addCells(size) {
  screen.style.setProperty("--size", size);
  for (let i = 0; i < size * size; i++) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.addEventListener("mousedown", () => {
      newCell.style.background = "black";
    })
    newCell.addEventListener("mouseover", () => {
      if (isDrawing === false) {
        return;
      }
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

// Can only draw while mouse is held down
screen.addEventListener("mousedown", () => {
  isDrawing = true;
});

// When mouse is let up drawing will stop
screen.addEventListener("mouseup", () => {
  isDrawing = false;
});


changeSize.addEventListener("click", () => {
  sizeDialog.showModal();
});

enterSize.addEventListener("click", populateScreen);





