describe("Conway Game", function() {
    describe("Fitness", function() {
        it("is equal to the number of alive neighbor cells", function() {
            var fitness = new Fitness();
            var cell = new Cell({});
            cell.getNeighbors = function() {
                return [
                    new Cell({ state: 1 }),
                    new Cell({ state: 0 })
                ]
            };
            expect(fitness.get(cell)).toBe(1);
        });
    });
});
