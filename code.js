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
    // Prevent div from being dragged instead of "colored"
    newCell.addEventListener('dragstart', (event) => {
      event.preventDefault()
    });
    newCell.addEventListener('drop', (event) => {
      event.preventDefault()
    });
    // Color first cell on click then all subsequently moused over cells
    newCell.addEventListener("mousedown", () => {
      newCell.style.background = "black";
    });
    newCell.addEventListener("mouseover", () => {
      if (isDrawing === false) {
        return;
      }
      newCell.style.background = "black";
    });
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

// Can only draw while mouse is held down and on screen 
screen.addEventListener("mousedown", () => {
  isDrawing = true;
});

// When mouse is let up drawing will stop
window.addEventListener("mouseup", () => {
  isDrawing = false;
});

changeSize.addEventListener("click", () => {
  sizeDialog.showModal();
});

enterSize.addEventListener("click", populateScreen);





