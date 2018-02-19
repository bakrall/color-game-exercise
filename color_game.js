var numSquares = 6,
	colors = [],
	winningColor,
	squares = document.querySelectorAll(".square")
	colorDisplay = document.getElementById("color-display"),
	messageDisplay = document.querySelector("#message"),
	h1 = document.querySelector("h1"),
	resetButton = document.querySelector("#reset"),
	modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click", function() {
	reset();
});

function init() {
	setupModeButtons();
	setupSquareEvents();
	reset();
}

function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquareEvents() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === winningColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	winningColor = pickColor();
	colorDisplay.textContent = winningColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";

	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

	h1.style.backgroundColor = "steelblue";	
}

function changeColors(color) {
	for(var i=0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];

	for(var i=0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
};