/*
 Any live cell with fewer than two live neighbours dies, as if caused by under-population.
 Any live cell with two or three live neighbours lives on to the next generation.
 Any live cell with more than three live neighbours dies, as if by overcrowding.
 Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
 */

var Cell = function(opts) {
    this.state = opts.state || 0;
    this.coordinates = opts.coordinates || [];
};
