// JavaScript Document
var tiles = new Array();
var correct = new Array();
var white = "rgb(255, 255, 255)";
var red = "rgb(255, 0, 0)";
var blue = "rgb(0, 255, 255)";
var green = "rgb(0, 255, 0)";
var lives = 3;
var level;
var colorsList = [white, red, blue, green];
var time;
var canChange = new Boolean();
var numColors;
var difficulty = 1;

var LEVEL_TIME_DECREASE = .98;
var START_TIME = 5000;
var START_LEVEL = 1;
var START_LIVES = 3;
var START_NUM_COLORS = 2; // includes white
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
		var color = random(0,numColors);
		correct[i] = color;	
		changeColor(tiles[i], color);
	}
}
function random(low, high) {
	return Math.floor(Math.random()*(high-low)+low);
}
function setLevel(level) {
	this.level = level;
	numColors = Math.floor(.2*difficulty*level)+2;
	$(document.getElementById("level")).text("Level - "+level);
}
function clickedTile(button) {
	if(canChange) {
		var color = colorToNumber(button)+1;
		if(color>=numColors)
			color = 0;
		changeColor(button, color);
	}
}
function restart() {
	setLevel(START_LEVEL);
	setLives(START_LIVES);
	numColors = START_NUM_COLORS;
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
	for(var i = 0; i < colorsList.length; i++)
		if(     $(button).css("background-color")===colorsList[i])
	                return i;
	return -1;

}
function checkLevel() {
	if(!check()) {
		setLives(lives-1);
		doLevel();
	}
	else {
		setLevel(level+1);
       		time*=LEVEL_TIME_DECREASE/difficulty;
		doLevel();
	}
}
function doLevel() {
	canChange = false;
	generate();
	setTimeout(function() {reset(); canChange = true}, time);

}
function changeColor(button, color) {
        $(button).css("background-color",colorsList[color]);
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

