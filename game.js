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

//Old Code

/*
var tiles = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var tilesCheck = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

	function clickedTile(button) {
	
	if (tiles[button.id] == 1){
		tiles[button.id] = 0
	}
	else{
		tiles[button.id] += 1
	}
	var ID = button.id
	alert(tiles[button.id])
	}

	function checkTile() {
		
	}
	
	function createPattern() {
		for (var i=0;i<tilesCheck.length;i++){
			var randomnumber=Math.floor(Math.random()*2)
			tilesCheck[i] = randomnumber
			tiles[i] = randomnumber
		}
		
	}
	*\