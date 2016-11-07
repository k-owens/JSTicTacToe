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
	
	function updateBoard(squareNumber) {
			var squareToChange = document.querySelector("[data-id='" + squareNumber + "']");
			if(boardState[squareNumber] === 0)
				squareToChange.innerHTML = '_';
			if(boardState[squareNumber] === 1)
				squareToChange.innerHTML = 'O';
			if(boardState[squareNumber] === 2)
				squareToChange.innerHTML = 'X';
	}
	
	return {
		setBoardState: function(newBoardState) {
			boardState = newBoardState;
		},
		
		makeMove: function(squareNumber) {
			if(boardState[squareNumber] === 0) {
				if(calculateTurnNumber() % 2 === 1)
					boardState[squareNumber] = 1;
				else
					boardState[squareNumber] = 2;
				updateBoard(squareNumber);
			}
		}
	};
})();