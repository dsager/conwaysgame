var Fitness = function() {};

Fitness.prototype.get = function(cell) {
    var sum = 0;
    var neighbors = cell.getNeighbors();
    for (var i = 0; i < neighbors.length; i++) {
        sum = sum + neighbors[i].state;
    }
    return sum;
};
