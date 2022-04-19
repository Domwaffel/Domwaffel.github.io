let cols;
let rows;
let resX = 10;
let resY = 10;
let shifts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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

function setup() {
    var canvas = createCanvas(27 * 42, 21 * 42);
    canvas.parent("canvas");
    cols = 27;
    rows = 21;
    resX = width / cols;
    resY = height / rows;
}

function draw() {
    background(255);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let y = i * resY;
            let x = j * resX;
            if (grid[i][j] == 1) {
                fill(0);
                stroke(0);
                rect(x, y, resX - 1, resY - 1);
            }
        }
    }
}

function rotateRows(rows, direction) {
    if (direction == "right") {
        grid[rows - 1].unshift(grid[rows - 1].pop());
    } else {
        grid[rows - 1].push(grid[rows - 1].shift());
    }
    if (direction == "right") shifts[rows - 1]++;
    else shifts[rows - 1]--;

    console.log(rows + "display");
    document.getElementById(rows + "display").innerHTML = shifts[rows - 1];
}


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