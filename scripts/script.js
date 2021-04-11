const grid = document.querySelector('#grid-container');
const reset = document.querySelector('button');

// generate a random rgb value
const randColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// function to set the background color of given node
function colorize() {
    this.style.backgroundColor = randColor();
}

// make rows the size rows/cols
function makeRows(rows, cols) {
    // change the css variable that holds rows/cols 
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);

    // create new divs inside of the main grid
    for(let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        // add event to change the color and add it to main div
        cell.addEventListener('mouseenter', colorize);
        grid.appendChild(cell).className = 'grid-item';
    }
}

// reset the grid and ask for a new size
function resetGrid() {
    // remove the old grid
    const cells = Array.from(grid.childNodes);
    for(let i = 0; i < cells.length; i++)
        grid.removeChild(cells[i]);

    // get the new size
    let size = 0;
    while(size < 2 || size > 100 || isNaN(size)) {
        size = prompt("Enter a new grid size between 2 and 100:");
    }
    // create a grid with the new size
    makeRows(size, size);
}

// add button event to reset
reset.addEventListener('click', function() {
    resetGrid();
});

// make original grid
makeRows(16, 16);