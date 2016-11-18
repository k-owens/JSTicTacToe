function Board() {
	this.boardState = [0,0,0,0,0,0,0,0,0];
	
	this.calculateTurnNumber = function() {
		var turn = 1;
		for(i = 0; i < 9; i++)
		{
			if(this.boardState[i] !== 0)
				turn++;
		}
		return turn;
	}
	
	this.isBoardFull = function() {
		return this.boardState.indexOf(0) === -1;
	}
	
	this.didWin = function(comparedSpaces, playerNumber) {
		for(i = 0; i < 3; i++) {
			if(comparedSpaces[i] === 0 || comparedSpaces[i] !== playerNumber)
				return false;
		}
		return true;
	}
	
	this.didPlayerWin = function(playerNumber) {
		return this.didPlayerWinHorizontal(playerNumber) || this.didPlayerWinVertical(playerNumber)
		|| this.didPlayerWinDiagonal(playerNumber);
	}
	
	this.didPlayerWinHorizontal = function(playerNumber) {
		for(j = 0; j < 3; j++) {
			var row = [this.boardState[3*j], this.boardState[3*j+1], this.boardState[3*j+2]];
			if(this.didWin(row, playerNumber)) {
				return true;
			}
		}
		return false;
	}
	
	this.didPlayerWinVertical = function(playerNumber) {
		for(k = 0; k < 3; k++) {
			var column = [this.boardState[k], this.boardState[k+3], this.boardState[k+6]];
			if(this.didWin(column, playerNumber)) {
				return true;
			}
		}
		return false;
	}
	
	this.didPlayerWinDiagonal = function(playerNumber) {
		var diagonal1 = [this.boardState[0], this.boardState[4], this.boardState[8]];
		var diagonal2 = [this.boardState[2], this.boardState[4], this.boardState[6]];
		return this.didWin(diagonal1, playerNumber) || this.didWin(diagonal2, playerNumber);
	}
	
	this.isMoveLegal = function(squareNumber) {
		return this.boardState[squareNumber] === 0 && !this.isGameOver();
	}
	
	this.getBoardState = function() {
		return this.boardState;
	}
	
	this.setBoardState = function(newBoardState) {
		this.boardState = newBoardState;
	}
	
	this.makeMove = function(squareNumber) {
		if(this.calculateTurnNumber() % 2 === 1)
			this.boardState[squareNumber] = 1;
		else
			this.boardState[squareNumber] = 2;
	}
	
	this.hasComputerPlayerWon = function() {
		return this.didPlayerWin(2);
	}
	
	this.hasHumanPlayerWon = function() {
		return this.didPlayerWin(1);
	}
	
	this.isGameOver = function() {
		return this.didPlayerWin(1) || this.didPlayerWin(2) || this.isBoardFull();
	}
	
	this.makeComputerMove = function() {
		var computerMoveNumber = minimax.minimaxComputation(this.boardState);
		this.makeMove(computerMoveNumber);
		return computerMoveNumber;
	}
}