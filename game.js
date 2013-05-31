// JavaScript Document
var tiles = [new tile(1),new tile(1),new tile(1),new tile(1),new tile(1),new tile(1),new tile(1),new tile(1),new tile(1),new tile(1),new tile(1),new tile(1),new tile(1),new tile(1),new tile(1),new tile(1)]
function clickedTile(button) {
	tiles[button.id] = new tile($(button).text())
	tiles[button.id].number(5)
	alert(tiles[button.id].number())
}
function tile(number) { //TODO: add color
	function number() {
		return number
	}
	function number(n) {
		number = n
	}
}
