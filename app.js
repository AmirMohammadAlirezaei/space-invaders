const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector(".results");
const width = 15;

for (let i = 0; i < width * width; i++) {
  const squares = document.createElement("div");
  grid.appendChild(squares);
}

const squares = Array.from(document.querySelectorAll(".grid div"));
console.log(squares);

const alienInvaders = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  ,
  23,
  24,
  25,
  26,
  27,
  28,
  2930,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
];

function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {}
}
