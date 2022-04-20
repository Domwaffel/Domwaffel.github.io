// variables for rows columns and the per ro and column
let cols;
let rows;
let resX;
let resY;
// number of shifts for ach row
let shifts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// only used to quickly store x and y starting positions
let x;
let y;

// the grid given by the riddle
var grid = [
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
]

// will run once when the page loads
function setup() {
    // creating the canvas so that every pixel is 42x42px
    var canvas = createCanvas(27 * 42, 21 * 42);
    canvas.parent("canvas");
    //number of rows and columns
    cols = 27;
    rows = 21;
    //resX and resY are the number of pixels per row and column
    resX = width / cols;
    resY = height / rows;
}

// will run each frame and is automatically called by p5.js
function draw() {
    //resetting the background
    background(255);

    //loop through the rows
    for (let i = 0; i < rows; i++) {
        //loop through the columns
        for (let j = 0; j < cols; j++) {
            //if the current grid value is 1, draw a black rectangle
            if (grid[i][j] == 1) {
                //find the pixel coordinates of the current row and column
                y = i * resY;
                x = j * resX;
                //draw a black rectangle
                fill(0);
                stroke(0);
                rect(x, y, resX - 1, resY - 1);
            }
        }
    }
}

function rotateRows(rows, direction) {
    //shift the columns in a specific row
    if (direction == "right") {
        grid[rows - 1].unshift(grid[rows - 1].pop());
    } else {
        grid[rows - 1].push(grid[rows - 1].shift());
    }

    //updates the shifts counter for the given row
    if (direction == "right") shifts[rows - 1]++;
    else shifts[rows - 1]--;

    //writes the current shifts counter to the specific counter of that row
    document.getElementById(rows + "display").textContent = shifts[rows - 1];
}

// this will run the Page finishes loading
// Add event listeners to the buttons to call the rotateRows function with the appropriate parameters
// the parameters are the row you want to shift and the direction you want to shift it
window.onload = function() {
    document.getElementById("1left").addEventListener("click", function() { rotateRows(1, "left"); });
    document.getElementById("1right").addEventListener("click", function() { rotateRows(1, "right"); });

    document.getElementById("2left").addEventListener("click", function() { rotateRows(2, "left"); });
    document.getElementById("2right").addEventListener("click", function() { rotateRows(2, "right"); });

    document.getElementById("3left").addEventListener("click", function() { rotateRows(3, "left"); });
    document.getElementById("3right").addEventListener("click", function() { rotateRows(3, "right"); });

    document.getElementById("4left").addEventListener("click", function() { rotateRows(4, "left"); });
    document.getElementById("4right").addEventListener("click", function() { rotateRows(4, "right"); });

    document.getElementById("5left").addEventListener("click", function() { rotateRows(5, "left"); });
    document.getElementById("5right").addEventListener("click", function() { rotateRows(5, "right"); });

    document.getElementById("6left").addEventListener("click", function() { rotateRows(6, "left"); });
    document.getElementById("6right").addEventListener("click", function() { rotateRows(6, "right"); });

    document.getElementById("7left").addEventListener("click", function() { rotateRows(7, "left"); });
    document.getElementById("7right").addEventListener("click", function() { rotateRows(7, "right"); });

    document.getElementById("8left").addEventListener("click", function() { rotateRows(8, "left"); });
    document.getElementById("8right").addEventListener("click", function() { rotateRows(8, "right"); });

    document.getElementById("9left").addEventListener("click", function() { rotateRows(9, "left"); });
    document.getElementById("9right").addEventListener("click", function() { rotateRows(9, "right"); });

    document.getElementById("10left").addEventListener("click", function() { rotateRows(10, "left"); });
    document.getElementById("10right").addEventListener("click", function() { rotateRows(10, "right"); });

    document.getElementById("11left").addEventListener("click", function() { rotateRows(11, "left"); });
    document.getElementById("11right").addEventListener("click", function() { rotateRows(11, "right"); });

    document.getElementById("12left").addEventListener("click", function() { rotateRows(12, "left"); });
    document.getElementById("12right").addEventListener("click", function() { rotateRows(12, "right"); });

    document.getElementById("13left").addEventListener("click", function() { rotateRows(13, "left"); });
    document.getElementById("13right").addEventListener("click", function() { rotateRows(13, "right"); });

    document.getElementById("14left").addEventListener("click", function() { rotateRows(14, "left"); });
    document.getElementById("14right").addEventListener("click", function() { rotateRows(14, "right"); });

    document.getElementById("15left").addEventListener("click", function() { rotateRows(15, "left"); });
    document.getElementById("15right").addEventListener("click", function() { rotateRows(15, "right"); });

    document.getElementById("16left").addEventListener("click", function() { rotateRows(16, "left"); });
    document.getElementById("16right").addEventListener("click", function() { rotateRows(16, "right"); });

    document.getElementById("17left").addEventListener("click", function() { rotateRows(17, "left"); });
    document.getElementById("17right").addEventListener("click", function() { rotateRows(17, "right"); });

    document.getElementById("18left").addEventListener("click", function() { rotateRows(18, "left"); });
    document.getElementById("18right").addEventListener("click", function() { rotateRows(18, "right"); });

    document.getElementById("19left").addEventListener("click", function() { rotateRows(19, "left"); });
    document.getElementById("19right").addEventListener("click", function() { rotateRows(19, "right"); });

    document.getElementById("20left").addEventListener("click", function() { rotateRows(20, "left"); });
    document.getElementById("20right").addEventListener("click", function() { rotateRows(20, "right"); });

    document.getElementById("21left").addEventListener("click", function() { rotateRows(21, "left"); });
    document.getElementById("21right").addEventListener("click", function() { rotateRows(21, "right"); });
}