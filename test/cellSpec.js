describe("Conway Game", function() {
    describe("Cell", function(){
       it("has a default state", function(){
           var cell = new Cell({});
           expect(cell.state).toBe(0);
       });
       it("has empty default coordinates", function(){
           var cell = new Cell({});
           expect(cell.coordinates).toEqual([]);
       });
        it("can be created with a state", function(){
            var cell = new Cell({ state: 1 });
            expect(cell.state).toBe(1);
        });
        it("can be created with coordinates", function(){
            var cell = new Cell({ coordinates: [1, 2, 3] });
            expect(cell.coordinates).toEqual([1, 2, 3]);
        });

        describe("getNeighbors", function() {
            it("returns a list of cells", function() {
            });
        });

    });

//    describe("Rules", function() {
//        it("a living cell can die because of underpopulation", function() {
//            rules = new Rules();
//            cell = new Cell();
//
//            newCell = rules.apply(cell);
//
//            expect(cell.alive).toBeTruthy();
//            expect(newCell.alive).toBeFalsy();
//        });
//    });
});
