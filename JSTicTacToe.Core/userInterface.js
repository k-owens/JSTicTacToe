var userInterface = (function() {
	return {
		updateSquare: function(squareNumber, board) {
			for(q = 0; q < 9; q++) {
				var squareToChange = document.querySelector("[data-id='" + q + "']");
				if(board.getBoardState()[q] === 0)
					squareToChange.innerHTML = '_';
				if(board.getBoardState()[q] === 1)
					squareToChange.innerHTML = 'O';
				if(board.getBoardState()[q] === 2)
					squareToChange.innerHTML = 'X';
			}

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