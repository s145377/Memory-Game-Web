// JavaScript Document


//TODO: Make this indentation pretty
/*

levels	    	    	      - number of levels in this game,	    	    	    	    	    -1 for unlimited levels
startLives	    	        - number of lives the user is given at start,
	    	    	    	    	    	    rounded down if not a whole number	    	    	      -1 for unlimited lives
liveIncrease	    	      - percent number of lives is increased per
	    	    	    	    	    	    successful level completion
startLevelTime	          - amount of time board is shown before first level,
	    	    	    	    	    	    in milliseconds	    	    	    	    	    	    	    	     -1 for unlimited time
levelTimeDecrease         - percent decrease in levelTime per level,
	    	    	    	    	    	    decreased at level start
colors	    	    	      - array of tile colors
startTileColors	          - number of tile colors on first level, rounded
	    	    	    	    	    	    down if not a whole number 
tileColorIncrease         - percent increase in number of tile colors per
	    	    	    	    	    	    level
startLevel	    	        - level that the user starts on

*/
var tiles = new Array();
var info;

var Game = function (startLives, levels, startLevelTime, levelTimeDecrease, colors, startTileColors, tileColorIncrease) {
	    var lives;
	    var level;
	    var timeDelay;
	    
		var tileClicked = function(button) {  

					var color = colorToNumber(button)+1;
			
					if(color>=numColors)
						color = 0;
						changeColor(button, color);					
		}
	    var pattern = new Array();

	    this.start = function () {
	    	    
	    	    $(info).text("Start");
	    	    info.onclick = function() {
	    	        $(info).text("Skip");
	    	        reset();
	    	        nextLevel();
	    	    }
	    	    
	    	    
	    	    
	    	    setLives(startLives);
	    }
	    this.clickedTile = function(button) {
			tileClicked(button);
		}
		
		function colorToNumber(button) {
		for(var i = 0; i < colorsList.length; i++)
			if($(button).css("background-color")===colorsList[i])
	                return i;
		return -1;

		}
	    function nextLevel() {
	    	    if(levels === -1 || level < levels) {
	    	    	    generateLevel(level);
	    	    	    $(info).text("Skip");
	    	    	    info.onclick = function() {
	    	    	    	    reset();
	    	    	    	    clearTimeout(timeDelay);
	    	    	    	    var info = document.getElementById("info");
	    	    	    	    $(info).text("Check");
	    	    	    	    info.onclick = function() {
	    	    	    	    	    check();
	    	    	    	    }
	    	    	    	    tileClicked = function() {} //can't change tile color now
	    	    	    }
	    	    	    timeDelay = setTimeout(function() {
	    	    	    	    	    reset();
	    	    	    	    	    var info = document.getElementById("info");
	    	    	    	    	    $(info).text("Check");
	    	    	    	    	    
	    	    	    	    	    tileClicked = function(button) {  
	    	    	    	    	    	//make it possible to change tile color
			
											var color = colorToNumber(button)+1;
			
											if(color>=numColors)
												color = 0;
											changeColor(button, color);
										}
	    	    	    	    	    
	    	    	    	    	    info.onclick = function() {
	    	    	    	    	    	    check();
	    	    	    	    	    }	    	    	    	    
	    	    	    }, time);
	    	    	    
	    	    }
	    }
	    function generateLevel(l) {
	    	    var levelTime = Math.floor(startLevelTime * Math.pow((1-levelTimeDecrease), l));
	    	    tileColors = Math.floor(tc);
	    	    
	    	    for(var i = 0; i < 16; i++) {
	    	    	    var color = random(0, numColors);
	    	    	    pattern[i] = color;	    
	    	    	    changeColor(tiles[i], color);
	    	    }
	    	    
	    }
	    function check() {
	    	    var redo = false;
	    	    
	    	    reset();
	    	    
	    	    for(var i = 0; i < 16; i++) {
	    	    	    if(!$(tiles[i]).css("background-color")==pattern[i])
	    	    	    	    redo = true;
	    	    }
	    	    (!redo) ? 
	    	    	     (level++, setLives(lives+lives*liveIncrease))
	    	    	     : setLives(lives-1);
	    }
	    function reset() {
	    	    for(var i = 0; i < 16; i++) {
	    	    	    tiles.push(document.getElementById(i));
	    	    	    changeColor(tiles[i],colors[0]);	   
	    	    	 //  	$(tiles[i]).text(0));
	    	    	    $(tiles[i]).css("visibility","visible");
	    	    }
	    }
	    function lose() {

	    }
	    
	    function random(low, high) {
	    return Math.floor(Math.random()*(high-low)+low);
	    }
	    function setLives(l) {
	    	    if(lives!=-1 && !lives>0)
	    	    	    lose();
	    	    (l===-1) ? lives = -1 : lives = Math.floor(l);
	    }
	    
};


function changeColor(button, color) {
	    $(button).css("background-color",color);

	    //fix text color
	    var backColor = color;
	    var parts = backColor.replace('(', '')
	    	    	    	 .replace(')', '')
	    	    	    	 .split(",");
	    var r = 255-parts[0];	    
	    var g = 255-parts[1];
	    var b = 255-parts[2];
	    $(button).css("color","rgb("+r+","+g+","+b+")");
}


var g = new Game(3, 100, 5000, 5, ["rgb(255, 255, 255)", "rgb(255, 0, 0)", "rgb(0, 51, 102)", "rgb(0, 255, 0)"], 2, 1);

window.onload = function() {
	info = document.getElementById("info");
	
	for(var i = 0; i < 16; i++) {
		tiles.push(document.getElementById(i));
		changeColor(tiles[i],"rgb(255, 255, 255)");	    	    
	    	$(tiles[i]).css("visibility","visible");
	}
	g.start();
};
//
