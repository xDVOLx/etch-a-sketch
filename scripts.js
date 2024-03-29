function makeGrid(sideLength) {
    if (!sideLength || isNaN(sideLength) || sideLength <= 0 || sideLength > 100) {
      alert("Please choose a number between 1 and 100")
    } else {
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
          row.style.backgroundColor = "white";
          row.addEventListener("mouseover", function () {
            if (rainbowModeActive) {
              row.style.backgroundColor = getRandomColor();
            } else {
              row.style.backgroundColor = "black";
            }
          });
          column.appendChild(row);
        }
        gridContainer.appendChild(column);
      }
    }
  }
  
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  const changeGridSizeButton = document.getElementById("change-grid-size");
  changeGridSizeButton.addEventListener("click", function () {
    let gridSize = prompt(
      "Type your desired grid size (e.g. 16 for a 16x16 grid, min: 1 max: 100"
    );
    let gridSizeInt = parseInt(gridSize);
    makeGrid(gridSizeInt);
  });
  
  let rainbowModeActive = false;
  
  const rainbowModeButton = document.getElementById("rainbow-mode");
  rainbowModeButton.addEventListener("click", function () {
    rainbowModeActive = !rainbowModeActive;
  });
  
  makeGrid(16);
  