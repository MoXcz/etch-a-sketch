const container = document.querySelector(".container");
const button = document.querySelector(".user-prompt");
let grid = document.querySelectorAll(".container > div");

function generateGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let newDiv = document.createElement("div");
      newDiv.style.height = `${750 / gridSize}px`;
      newDiv.style.width = `${750 / gridSize}px`;
      container.appendChild(newDiv);
    }
  }

  grid = document.querySelectorAll(".container > div");
  grid.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
    square.addEventListener("mouseout", () => {
      square.style.backgroundColor = "white";
    });
  });
}

function deleteGrid() {
  grid = document.querySelectorAll(".container > div");
  while (container.hasChildNodes()) {
    grid.forEach((element) => {
      container.removeChild(element);
    });
  }
}

function createGrid() {
  let gridSize = prompt("Enter the size of the Grid (< 100): ");
  while (gridSize > 100) {
    alert("The number is too big, select a number less than or equal to 100");
    gridSize = prompt("Enter the size of the Grid (< 100): ");
  }
  deleteGrid();
  generateGrid(gridSize);
}

button.addEventListener("click", createGrid);
