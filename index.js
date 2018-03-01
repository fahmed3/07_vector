var s = document.getElementById("svg_id");
var clearButton = document.getElementById("clr");
var x1 = -1;
var y1 = -1;

var draw = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 15);
    circle.setAttribute("fill", "red");
    circle.setAttribute("stroke", "black");
    s.appendChild(circle);
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    if (x1 != -1 && y1 != -1){
	line.setAttribute("x1",x1);
	line.setAttribute("y1",y1);
	line.setAttribute("x2",x);
	line.setAttribute("y2",y);
	line.setAttribute("stroke","black");
	s.appendChild(line);
    }
    x1 = x;
    y1 = y;
}

var clear = function() {
    for(i = s.children.length-1; i >= 0; i--){
	s.removeChild(s.children[i]);
    }
    x1 = -1;
    y1 = -1;
}

s.addEventListener("click", draw);
clearButton.addEventListener("click", clear);

