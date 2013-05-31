// JavaScript Document
var buttonArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	function clickedTile(button) {
	buttonArray[button.id-1] += 1
	var ID = button.id
	$(button).text(5)
	alert(buttonArray[button.id-1])
}
