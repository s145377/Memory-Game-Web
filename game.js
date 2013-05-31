// JavaScript Document
var tiles = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	function clickedTile(button) {
	
	if (tiles[button.id] == 1){
		tiles[button.id] = 0
	}
	else{
		tiles[button.id] += 1
	}
	var ID = button.id
	$(button).text(5)
	alert(tiles[button.id-1])
}
