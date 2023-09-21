var numbers = [];
for (var i = 1; i <= 90; i++) {
	numbers.push(i);
}

function getRandomNumber() {
	var randomIndex = Math.floor(Math.random() * numbers.length);
	var randomNumber = numbers[randomIndex];
	numbers.splice(randomIndex, 1);
	return randomNumber;
}

function PickRandomCoin() {
	var drawnNumber = getRandomNumber();
	var cell = document.getElementById("cell" + Math.floor(drawnNumber / 10) + (drawnNumber % 10));
	cell.innerHTML = drawnNumber;
	cell.style.backgroundColor = "green";
}


