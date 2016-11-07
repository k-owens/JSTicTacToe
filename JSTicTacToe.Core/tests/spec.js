afterEach(function() {
	for(i = 0; i < 9; i++) {
		document.querySelector("[data-id='" + i + "']").innerHTML = '_';
	}
	board.setBoardState([0,0,0,0,0,0,0,0,0]);

});

describe("loadInitialBoard", function() {
	it("adds a blank board to the screen", function() {
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

describe("updateSquare", function() {
	it("changes the square character", function() {
		board.makeMove(0);
		expect(document.querySelector("[data-id='0']").innerHTML).toEqual('O');
	});
	
	it("changes the square character on turn 2", function() {
		board.makeMove(0);
		board.makeMove(1);
		expect(document.querySelector("[data-id='1']").innerHTML).toEqual('X');
	});
		
	it("will not overwrite a chosen square", function() {
		board.makeMove(0);
		expect(document.querySelector("[data-id='0']").innerHTML).toEqual('O');

		board.makeMove(0);
		expect(document.querySelector("[data-id='0']").innerHTML).toEqual('O');
	});
});