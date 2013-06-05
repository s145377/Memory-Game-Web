// JavaScript Document
var tiles = new Array();
var correct = new Array();
var white = "rgb(255, 255, 255)";
var red = "rgb(255, 0, 0)";
var blue = "rgb(0, 255, 255)";
var green = "rgb(0, 255, 0)";
var lives = 3;
var level;
var colors;
var time;
var canChange = new Boolean();

var LEVEL_TIME_DECREASE = .98;
var START_TIME = 5000;
var START_LEVEL = 1;
var START_LIVES = 3;
var START_COLORS = 2; // includes white
var COLOR_ORDER = new Array();

function reset() {
	tiles = new Array();
	for(var i = 0; i < 16; i++) {
		tiles.push(document.getElementById(i));
		$(tiles[i]).text("1");
		$(tiles[i]).css("background-color",white);
		fixTextColor(tiles[i]);		
		$(tiles[i]).css("visibility","visible");
	}
	
}
function generate() {
	reset();
	correct = new Array();
	for(var i = 0; i < 16; i++) {
		var color = Math.floor(Math.random() * 4);
		correct[i] = color;	
		changeColor(tiles[i], color);
	}
}
function setLevel(level) {
	this.level = level;
	$(document.getElementById("level")).text("Level - "+level);
}
function clickedTile(button) {
	if(canChange) {
		var color = colorToNumber(button)+1; //0=white,1=red, 2=blue, 3=limegreen
		if(color>3)
			color = 0;
		changeColor(button, color);
	}
}
function restart() {
	setLevel(START_LEVEL);
	setLives(START_LIVES);
	colors = START_COLORS;
	time = START_TIME;

	doLevel();
}
function setLives(lives) {
	this.lives = lives;
	$(document.getElementById("lives")).text("Lives - "+lives);
	if(lives<0)
		restart();
}
function colorToNumber(button) {
	if(     $(button).css("background-color")===white)
                return 0;
        else if($(button).css("background-color")===red)
                return 1;
        else if($(button).css("background-color")===blue)
                return 2;
        else if($(button).css("background-color")===green)
                return 3;
	return -1;

}
function checkLevel() {
	if(!check()) {
		lives--;
		restart();
	}
	else {
		setLevel(level+1);
       		time*=LEVEL_TIME_DECREASE;
		doLevel();
	}
}
function doLevel() {
       canChange = false;
       generate();
       setTimeout(function() {reset(); canChange = true}, time);

}
function changeColor(button, color) {
        $(button).css("background-color",white);
        if(color==1)
                $(button).css("background-color",red);
        else if(color==2)
                $(button).css("background-color",blue);
        else if(color==3)
                $(button).css("background-color",green);
}
function fixTextColor(button) {
        var backcolor = $(button).css("background-color");
	var parts = backcolor.split("(")[1].split(")")[0].split(",");
	var r = 255-parts[0];	
        var g = 255-parts[1];
       	var b = 255-parts[2];
	$(button).css("color","rgb("+r+","+g+","+b+")");
}
function check() {
	for (var i = 0; i < 16; i++) {
		if (correct[i] != colorToNumber(tiles[i])) {
			return false;
		}
	}
	return true;
}

