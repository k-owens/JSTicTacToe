var application = (function () {
	return {
		handleClick: function(squareNumber) {
			board.makeMove(squareNumber);
			userInterface.updateSquare(squareNumber);
			if(board.isGameOver()) {
				if(board.hasComputerPlayerWon())
					userInterface.wonGamePrompt();
				else
					userInterface.tieGamePrompt();
			}
		}
	}
})();