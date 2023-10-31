function generateGrid(size) {
    const container = document.createElement('div');
    container.id = "boxContainer";

    var grid = [size];
    var rows = [size];
    for (var i = 0; i < size; i++) {
        grid[i] = [size];
        rows[i] = document.createElement('div');
        rows[i].className = 'boxRow';
        for (var j = 0; j < size; j++) {
            grid[i][j] = document.createElement('div');
            grid[i][j].className = 'boxBox';
            grid[i][j].id = 'box' + i + '-' + j;
            rows[i].appendChild(grid[i][j]);
        }
        container.appendChild(rows[i]);
    }
    document.getElementById("content").appendChild(container);
}

function resetGrid(size) {
    if (size >= 200) size = 200;
    document.getElementById("boxContainer").remove();
    generateGrid(size);
}

window.onload = function() {
    generateGrid(16);
    document.getElementById("reset").onclick = function() {
        resetGrid(window.prompt("Enter the size of the grid:"));
    }
};