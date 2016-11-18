var minimax = (function() {
	function minimaxAlgorithm(currentBoard, maximizingPlayer) {
		if(currentBoard.hasComputerPlayerWon()) {
			return 1;
		}
		else if(currentBoard.hasHumanPlayerWon()) {
			return -1;
		}
		else if(currentBoard.isGameOver()) {
			return 0;
		}
		else if(maximizingPlayer){
			var bestValue = -2;
			var boardMove = 0;
			for(boardMove = 0; boardMove < 9; boardMove++) {
				if(currentBoard.getBoardState()[boardMove] === 0) {
					var newBoard = new Board();
					var newBoardState = new Array(9);
					for(arrayPoint = 0; arrayPoint < 9; arrayPoint++) {
						newBoardState[arrayPoint] = currentBoard.getBoardState()[arrayPoint];
					}
					newBoard.setBoardState(newBoardState);
					newBoard.makeMove(boardMove);
					var moveWeight = minimaxAlgorithm(newBoard, false);
					if(moveWeight > bestValue)
						bestValue = moveWeight;
				}
			}
			return bestValue;
		}
		else {
			var worstValue = 2;
			var y = 0;
			for(y = 0; y < 9; y++) {
				if(currentBoard.getBoardState()[y] === 0) {
					var newBoardMin = new Board();
					var newBoardStateMin = new Array(9);
					for(arrayPointMin = 0; arrayPointMin < 9; arrayPointMin++) {
						newBoardStateMin[arrayPointMin] = currentBoard.getBoardState()[arrayPointMin];
					}
					newBoardMin.setBoardState(newBoardStateMin);
					newBoardMin.makeMove(y);
					var moveWeightMin = minimaxAlgorithm(newBoardMin, true);
					if(moveWeightMin < worstValue)
						worstValue = moveWeightMin;
				}
			}
			return worstValue;
		}
	}
	
	return {
		minimaxComputation: function(boardState) {
			var boardOptions = new Array(9);
			var currentBoardState = new Array(9);
			for(nextMove = 0; nextMove < 9; nextMove++) {
				for(arrayPoint = 0; arrayPoint < 9; arrayPoint++) {
					currentBoardState[arrayPoint] = boardState[arrayPoint];
				}
				var tempBoard = new Board();
				tempBoard.setBoardState(currentBoardState);
				if(tempBoard.getBoardState()[nextMove] === 0) {
					tempBoard.makeMove(nextMove);
					boardOptions[nextMove] = minimaxAlgorithm(tempBoard, false);
				}
				else
					boardOptions[nextMove] = -2;
			}
			
			if(boardOptions.indexOf(1) !== -1)
				return boardOptions.indexOf(1);
			else if(boardOptions.indexOf(0) !== -1) 
				return boardOptions.indexOf(0);
			return boardOptions.indexOf(-1);
		}
	};
})();