var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");


for (var i = 0; i < reindeer.length; i++) {
	var currentReindeer = reindeer[i];
	var currentColor = colors[i];
	
	hohohoElement.innerHTML += `
		<div>
			${i}: The current reindeer is 
			<span style="color:${currentColor}">
			${currentColor} ${currentReindeer}
			</span>
		</div>
	`;
}