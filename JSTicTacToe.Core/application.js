var application = (function () {
	return {
		handleClick: function(boardRep, squareNumber) {
			if(boardRep.isMoveLegal(squareNumber)) {
				boardRep.makeMove(squareNumber);
				userInterface.updateSquare(squareNumber, boardRep);
				if(boardRep.isGameOver()) {
					if(boardRep.hasComputerPlayerWon())
						userInterface.wonGamePrompt();
					else
						userInterface.tieGamePrompt();
				}
				else {
					userInterface.updateSquare(boardRep.makeComputerMove(), boardRep);
					if(boardRep.isGameOver()) {
						if(boardRep.hasComputerPlayerWon())
							userInterface.wonGamePrompt();
						else
							userInterface.tieGamePrompt();
					}
				}
			}
		}
	}
})();