(function (root) {
  var S = root.S= (root.S || {});

  var Snake = S.Snake = function(){
    this.dir = "S";
    this.headPos = [0,2];
    this.segments = [[0,0], [0,1], [0,2]];
  }

  Snake.prototype.move = function(){
    var newSegPos = S.Coord.plus(this.headPos, this.dir);
    this.headPos = newSegPos;
    // S.Board.checkLoss(this.headPos);
    this.segments.push(newSegPos);
    this.segments.shift();
  };

  Snake.prototype.turn = function(dir){
    this.dir = dir;
  };


})(this);