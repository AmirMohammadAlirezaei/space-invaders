const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector(".results");
const width = 15;

for (let i = 0; i < width * width; i++) {
  const squares = document.createElement("div");
  grid.appendChild(squares);
}

const squares = Array.from(document.querySelectorAll(".grid div"));
