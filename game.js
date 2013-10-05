// JavaScript Document

/*

levels              - number of levels in this game,                    -1 for no limit
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
                        level                                           -1 for no increase
startLevel          - level that the user starts on

*/
var Game = function (startLives, levels, startLevelTime, levelTimeDecrease, colors, startTileColors, tileColorIncrease) {
   
    var lives;
    var tileColors;

   
   
    function start() {
        var level = 0;
        setLives(startLives);
        setTileColors(startTileColors);
       
        while(level < levels) {
            doLevel(level) ? (level++, setLives(lives+lives*liveIncrease) : setLives(lives-1);
        }
    }
    function doLevel(level) {
        var levelTime = Math.floor(startLevelTime * Math.pow((1-levelTimeDecrease), level));
    }
    
    function setLives(l) {
        if(l===-1)
            lives = -1;
        else
            lives = Math.floor(l);
    }
    function setTileColors(tc) {
        tileColors = Math.floor(tc);
    }
    
};
