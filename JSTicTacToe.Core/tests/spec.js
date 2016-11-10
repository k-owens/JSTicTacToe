afterEach(function() {
	for(i = 0; i < 9; i++) {
		document.querySelector("[data-id='" + i + "']").innerHTML = '_';
	}
	board.setBoardState([0,0,0,0,0,0,0,0,0]);

});

describe("loadInitialBoard", function() {
	it("adds a blank board to the screen on startup", function() {
		setup.loadInitialBoard();
		var boardRepresentation = document.querySelector("[data-id='board']")
		expect(boardRepresentation).not.toEqual(null);
		expect(boardRepresentation.tagName).toEqual("DIV");
	});

	it("gives the board squares have the correct attributes", function() {
		var individualSquare = document.querySelector("[data-id='0']");
		expect(individualSquare).not.toEqual(null);
		expect(individualSquare.dataset.role).toEqual("square");
		expect(individualSquare.tagName).toEqual("DIV");
	});

	it("gives the rows the correct attributes", function() {
		var row = document.querySelector("[data-role='row']");
		expect(row).not.toEqual(null);
	});
});

describe("makeMove", function() {
	it("changes the square character", function() {
		board.makeMove(0);
		expect(board.getBoardState()[0]).toEqual(1);
	});
	
	it("changes the square character on turn 2", function() {
		board.makeMove(0);
		board.makeMove(1);
		expect(board.getBoardState()[1]).toEqual(2);
	});
		
	it("will not overwrite a chosen square", function() {
		board.makeMove(0);
		expect(board.getBoardState()[0]).toEqual(1);

		board.makeMove(0);
		expect(board.getBoardState()[0]).toEqual(1);
	});
});

describe("handleClick", function() {
	it("changes the square character", function() {
		application.handleClick(0);
		expect(document.querySelector("[data-id='0']").innerHTML).toEqual('O');
	});
	
	it("changes the square character on turn 2", function() {
		application.handleClick(0);
		application.handleClick(1);
		expect(document.querySelector("[data-id='1']").innerHTML).toEqual('X');
	});
		
	it("will not overwrite a chosen square", function() {
		application.handleClick(0);
		expect(document.querySelector("[data-id='0']").innerHTML).toEqual('O');

		application.handleClick(0);
		expect(document.querySelector("[data-id='0']").innerHTML).toEqual('O');
	});
});

describe("isGameOver", function() {
	it("will end the game when the board is full", function() {
		var tieBoard = [1,2,1,1,2,2,2,1,1];
		board.setBoardState(tieBoard);
		expect(board.isGameOver()).toEqual(true);
	});
	
	it("will not end the game when a tie or win has not happened", function() {
		var ongoingBoard = [1,2,1,1,0,2,2,1,0];
		board.setBoardState(ongoingBoard);
		expect(board.isGameOver()).toEqual(false);
	});
	
	it("will end the game when player 1 has won", function() {
		var winningBoard = [1,1,1,2,2,0,0,0,0];
		board.setBoardState(winningBoard);
		expect(board.isGameOver()).toEqual(true);
	});
	
	it("will end the game when player 2 has won", function() {
		var winningBoard = [2,2,2,1,1,0,0,0,0];
		board.setBoardState(winningBoard);
		expect(board.isGameOver()).toEqual(true);
	});
	
	it("will end the game with a vertical win", function() {
		var winningBoard = [1,2,0,1,2,0,1,0,0];
		board.setBoardState(winningBoard);
		expect(board.isGameOver()).toEqual(true);
	});
	
	it("will end the game with a diagonal win", function() {
		var winningBoard = [1,2,2,0,1,0,0,0,1];
		board.setBoardState(winningBoard);
		expect(board.isGameOver()).toEqual(true);
	});
	
	it("will not be able to make a move when a player has won", function() {
		var winningBoard = [1,1,1,2,2,0,0,0,0];
		board.setBoardState(winningBoard);
		board.makeMove(8);
		expect(document.querySelector("[data-id='8']").innerHTML).toEqual('_');
	});
});

describe("endPrompts", function() {
	it("will prompt the user of a tie when the board is full", function() {
		var tieBoard = [1,2,1,1,2,2,2,1,0];
		board.setBoardState(tieBoard);
		application.handleClick(8);
		var gamePrompt = document.querySelector("[data-id='endPrompt']");
		expect(gamePrompt.tagName).toEqual("DIV");
		expect(gamePrompt.innerHTML).toEqual('The game has ended in a tie.');
	});
	
	it("will prompt the user of a win", function() {
		var winningBoard = [2,2,0,1,1,0,0,0,1];
		board.setBoardState(winningBoard);
		application.handleClick(2);
		var gamePrompt = document.querySelector("[data-id='endPrompt']");
		expect(gamePrompt.tagName).toEqual("DIV");
		expect(gamePrompt.innerHTML).toEqual('The game has ended in a win for the computer.');
	});
});