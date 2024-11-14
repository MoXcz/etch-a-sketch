const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  let grid = document.createElement("div");
  container.appendChild(grid);
}

const grid = document.querySelectorAll(".container > div");
grid.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "black";
  });
  element.addEventListener("mouseout", () => {
    element.style.backgroundColor = "white";
    console.log("test");
  });
});
