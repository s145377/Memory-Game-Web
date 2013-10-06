// JavaScript Document

/*

levels              - number of levels in this game,                    -1 for unlimited levels
startLives          - number of lives the user is given at start,
                        rounded down if not a whole number              -1 for unlimited lives
liveIncrease        - percent number of lives is increased per
                        successful level completion
startLevelTime      - amount of time board is shown before first level,
                        in milliseconds                                 -1 for unlimited time
levelTimeDecrease   - percent decrease in levelTime per level,
                        decreased at level start
colors              - array of tile colors
startTileColors     - number of tile colors on first level, rounded
                        down if not a whole number 
tileColorIncrease   - percent increase in number of tile colors per
                        level
startLevel          - level that the user starts on

*/
var Game = function (startLives, levels, startLevelTime, levelTimeDecrease, colors, startTileColors, tileColorIncrease) {
   
    var lives;
	var tiles;
   
   
    function start() {
        var level = 0;
        reset();
        setLives(startLives);

        while(levels === -1 || level < levels) {
            doLevel(level) ? (level++, setLives(lives+lives*liveIncrease) : setLives(lives-1);
        }
    }
    function doLevel(level) {
        var levelTime = Math.floor(startLevelTime * Math.pow((1-levelTimeDecrease), level));
        tileColors = Math.floor(tc);
        var pattern = new Array();
        
        for(var i = 0; i < 16; i++) {
			var color = random(0, numColors);
			pattern[i] = color;	
			changeColor(tiles[i], color);
		}
    }
    function reset() {
		tiles = new Array();
		for(var i = 0; i < 16; i++) {
			tiles.push(document.getElementById(i));
			changeColor(tiles[i],0);		
			$(tiles[i]).css("visibility","visible");
		}
	}
    
    function random(low, high) {
		return Math.floor(Math.random()*(high-low)+low);
	}
    function setLives(l) {
        (l===-1) ? lives = -1 : lives = Math.floor(l);
    }
    
};
