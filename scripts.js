function makeGrid(sideLength) {
  let gridContainer = document.getElementById("grid-container");
  gridContainer.replaceChildren();
  let cellHeight = Math.floor(500 / sideLength) + "px";
  let cellWidth = Math.floor(500 / sideLength) + "px";
  for (let i = 0; i < sideLength; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (let j = 0; j < sideLength; j++) {
      let row = document.createElement("div");
      row.classList.add("row");
      row.style.outline = "1px solid black";
      row.style.height = cellHeight;
      row.style.width = cellWidth;
      row.addEventListener("mouseover", function () {
        this.style.backgroundColor = "black";
      });
      column.appendChild(row);
    }
    gridContainer.appendChild(column);
  }
}

const changeGridSizeButton = document.getElementById('change-grid-size');
changeGridSizeButton.addEventListener("click", function() {
    let gridSize = prompt("Type your desired grid size (e.g. 16 for a 16x16 grid, max: 100, grid will default to 16x16 if an error occurs");
    let gridSizeInt = parseInt(gridSize);
    makeGrid(gridSizeInt);
}) 

makeGrid(16);
