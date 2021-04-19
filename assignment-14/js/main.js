var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// first line
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

// second line
ctx.moveTo(200, 100);
ctx.lineTo(0, 200);
ctx.stroke();

// third line
ctx.moveTo(0, 200);
ctx.lineTo(200, 300);
ctx.stroke();

// fourth line
ctx.moveTo(200, 300);
ctx.lineTo(0, 400);
ctx.stroke();

// fifth line
ctx.moveTo(0, 400);
ctx.lineTo(200, 500);
ctx.stroke();

// sixth line
ctx.moveTo(200, 500);
ctx.lineTo(0, 600);
ctx.stroke();

// top circle

ctx.beginPath();
ctx.arc(200, 100, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#9658A5";
ctx.fill();
ctx.stroke();

// middle circle

ctx.beginPath();
ctx.arc(200, 300, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#45879F";
ctx.fill();
ctx.stroke();

// final circle

ctx.beginPath();
ctx.arc(200, 500, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#F7C709";
ctx.fill();
ctx.stroke();



// top circle
ctx.beginPath();
ctx.arc(600, 100, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#3CEE9C";
ctx.fill();
ctx.stroke();

// middle circle

ctx.beginPath();
ctx.arc(600, 300, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#9F4572";
ctx.fill();
ctx.stroke();

// final circle

ctx.beginPath();
ctx.arc(600, 500, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#F28017";
ctx.fill();
ctx.stroke();

ctx.font = "40px Courier";
ctx.fillStyle = "#9F4572";
ctx.fillText("Sydney Terry", 500, 595);
