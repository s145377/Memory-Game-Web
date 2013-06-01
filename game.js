// JavaScript Document
var tiles = new Array();
var correct = new Array();
var colors = 3;
function setup() {
	tiles = new Array();
	for(var i = 0; i < 16; i++) {
		alert(document.getElementById("0").text());
		tiles.push(document.getElementById(i));
	}
	reset();
}
function reset() {
        for(var b in tiles) {
	        $(b).show();
		$(b).text("1");
		$(b).css("background-color","red");
		fixTextColor(b);
	}
	
}
function clickedTile(button) {
	
}
function fixTextColor(button) {
        var backcolor = $(button).css("background-color");
        if(backColor!="undefined") {
		var parts = backcolor.split("(")[1].split(")")[0].split(",");
		var r = 255-parts[0];
	        var g = 255-parts[1];
        	var b = 255-parts[2];
		$(button).css("color","rgb("+r+","+g+","+b+")");
	}
}
