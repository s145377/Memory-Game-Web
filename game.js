// JavaScript Document
var tiles = new Array();
var correct = new Array();
var colors = 3;
var white = "rgb(255, 255, 255)";
var red = "rgb(255, 0, 0)";
var blue = "rgb(0, 255, 255)";
var green = "rgb(0, 255, 0)";


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
function clickedTile(button) {
	var color = 0; //0=white,1=red, 2=blue, 3=limegreen
	
	if(     $(button).css("background-color")===white)
		color = 1;
	else if($(button).css("background-color")===red)
		color = 2;
	else if($(button).css("background-color")===blue)
		color = 3;
	else if($(button).css("background-color")===green)
		color = 0;

	if(     color==0)
		$(button).css("background-color",white);
	else if(color==1)
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
*/
