(function (root) {
  var S = root.S= (root.S || {});

  var DIRS = {
    "N": [-1, 0],
    "E": [0, 1],
    "S": [1,0],
    "W": [0,-1]
  }

  var Coord = S.Coord = function(){
  }

  Coord.plus = function(coords, dir) {
    var mod = DIRS[dir];
    var newCoords = []
    newCoords[0] = coords[0] + mod[0];
    newCoords[1] = coords[1] + mod[1];
    return newCoords;
  }

  Coord.outOfBounds = function(pos) {
    return (pos[0] < 0 || pos[0] > 14 ||
            pos[1] < 0 || pos[1] > 14 );
  }

})(this);