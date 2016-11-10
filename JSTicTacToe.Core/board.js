var board =(function() {
	var boardState = [0,0,0,0,0,0,0,0,0]
	
	function calculateTurnNumber() {
		var turn = 1;
		for(i = 0; i < 9; i++)
		{
			if(boardState[i] !== 0)
				turn++;
		}
		return turn;
	}
	
	function isBoardFull() {
		return boardState.indexOf(0) === -1;
	}
	
	function didWin(comparedSpaces, playerNumber) {
		for(i = 0; i < 3; i++) {
			if(comparedSpaces[i] === 0 || comparedSpaces[i] !== playerNumber)
				return false;
		}
		return true;
	}
	
	function didPlayerWin(playerNumber) {
		return didPlayerWinHorizontal(playerNumber) || didPlayerWinVertical(playerNumber)
		|| didPlayerWinDiagonal(playerNumber);
	}
	
	function didPlayerWinHorizontal(playerNumber) {
		for(j = 0; j < 3; j++) {
			var row = [boardState[3*j], boardState[3*j+1], boardState[3*j+2]];
			if(didWin(row, playerNumber)) {
				return true;
			}
		}
		return false;
	}
	
	function didPlayerWinVertical(playerNumber) {
		for(k = 0; k < 3; k++) {
			var column = [boardState[k], boardState[k+3], boardState[k+6]];
			if(didWin(column, playerNumber)) {
				return true;
			}
		}
		return false;
	}
	
	function didPlayerWinDiagonal(playerNumber) {
		var diagonal1 = [boardState[0], boardState[4], boardState[8]];
		var diagonal2 = [boardState[2], boardState[4], boardState[6]];
		return didWin(diagonal1, playerNumber) || didWin(diagonal2, playerNumber);
	}
	
	function isMoveLegal(squareNumber) {
		return boardState[squareNumber] === 0 && !board.isGameOver();
	}
	
	return {
		getBoardState: function() {
			return boardState;
		},
		
		setBoardState: function(newBoardState) {
			boardState = newBoardState;
		},
		
		makeMove: function(squareNumber) {
			if(isMoveLegal(squareNumber)) {
				if(calculateTurnNumber() % 2 === 1)
					boardState[squareNumber] = 1;
				else
					boardState[squareNumber] = 2;
			}
		},
		
		hasComputerPlayerWon: function() {
			return didPlayerWin(2);
		},
		
		isGameOver: function() {
			return didPlayerWin(1) || didPlayerWin(2) || isBoardFull();
		}
	};
})();