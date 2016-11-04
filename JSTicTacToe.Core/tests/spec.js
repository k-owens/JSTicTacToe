describe("loadInitialBoard", function() {
	it("adds a blank board to the screen", function() {
		setup.loadInitialBoard();
		var boardRepresentation = document.querySelector("[data-id='board']")
		expect(boardRepresentation).not.toEqual(null);
		expect(boardRepresentation.tagName).toEqual("DIV");
	});

	it("gives the board squares have the correct attributes", function() {
		setup.loadInitialBoard();
		var individualSquare = document.querySelector("[data-id='0']");
		expect(individualSquare).not.toEqual(null);
		expect(individualSquare.dataset.role).toEqual("square");
		expect(individualSquare.tagName).toEqual("DIV");
	});

	it("gives the rows are the correct attributes", function() {
		setup.loadInitialBoard();
		var row = document.querySelector("[data-role='row']");
		expect(row).not.toEqual(null);
	});
});