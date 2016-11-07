var setup = (function() {
	function createSquare(row, column, rowHolder) {
		var square = document.createElement("div");
		square.setAttribute("data-id", row*3+column);
		square.setAttribute("data-role", "square");
		square.addEventListener('click', function() {
			board.makeMove(row*3+column);
		}, false);
		square.innerHTML = "_";
		rowHolder.appendChild(square);
	}
	
	function createRowHolder(board) {
		var rowHolder = document.createElement("div");
		rowHolder.setAttribute("data-role", "row");
		board.appendChild(rowHolder);
		return rowHolder;
	}
	
	return {
		loadInitialBoard : function() {
			var board = document.createElement("div");
			board.setAttribute("data-id", "board");
			document.body.appendChild(board);

			for(i = 0; i < 3; i++)
			{
				var rowHolder = createRowHolder(board);
				for(j = 0; j < 3; j++)
				{
					createSquare(i,j, rowHolder);
				}
			}
		}
	};
})();