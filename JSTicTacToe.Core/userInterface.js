var userInterface = (function() {
	return {
		updateSquare: function(squareNumber) {
			var squareToChange = document.querySelector("[data-id='" + squareNumber + "']");
			if(board.getBoardState()[squareNumber] === 0)
				squareToChange.innerHTML = '_';
			if(board.getBoardState()[squareNumber] === 1)
				squareToChange.innerHTML = 'O';
			if(board.getBoardState()[squareNumber] === 2)
				squareToChange.innerHTML = 'X';
		},
		
		tieGamePrompt: function() {
			var prompt = document.createElement("div");
			prompt.setAttribute("data-id", "endPrompt");
			prompt.innerHTML = "The game has ended in a tie.";
			document.body.insertBefore(prompt, document.body.firstChild);
		},
		
		wonGamePrompt: function() {
			var prompt = document.createElement("div");
			prompt.setAttribute("data-id", "endPrompt");
			prompt.innerHTML = "The game has ended in a win for the computer.";
			document.body.insertBefore(prompt, document.body.firstChild);
		}
	};
})();