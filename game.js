// JavaScript Document
var tiles = new Array();
var correct = new Array();
var colors = 3;
function reset() {
	tiles = new Array();
	for(var i = 0; i < 16; i++) {
		tiles.push(document.getElementById(i));
		$(tiles[i]).text("1");
		$(tiles[i]).css("background-color","red");
		fixTextColor(tiles[i]);		
		$(tiles[i]).css("visibility","visible");
	}
	
}
function clickedTile(button) {
	
}
function fixTextColor(button) {
        var backcolor = $(button).css("background-color");
	var parts = backcolor.split("(")[1].split(")")[0].split(",");
	var r = 255-parts[0];	
        var g = 255-parts[1];
       	var b = 255-parts[2];
	$(button).css("color","rgb("+r+","+g+","+b+")");
}
