var s = document.getElementById("svg_id");
var clearButton = document.getElementById("clr");
var newLineButton = document.getElementById("new");

var draw = function(e) {
    var x1 = 0;
    var y1 = 0;
    var x = e.offsetX;
    var y = e.offsetY;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 15);
    circle.setAttribute("fill", "blue");
    s.appendChild(circle);
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1",x1);
    line.setAttribute("y1",y1);
    line.setAttribute("x2",x);
    line.setAttribute("y2",y);
    line.setAttribute("stroke","black");
    s.appendChild(line);
}

var clear = function(){
    ctx.beginPath();
    ctx.clearRect(0,0,c.width,c.height);
}

var newPath = function(){
    ctx.beginPath();
}

s.addEventListener("click", draw);
clearButton.addEventListener("click", clear);
newLineButton.addEventListener("click", newPath);

