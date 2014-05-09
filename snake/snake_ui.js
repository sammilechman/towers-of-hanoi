(function (root) {
  var S = root.S= (root.S || {});
  var View = S.View = function(rootEl){
    this.$el = rootEl;
    this.board = new S.Board();
    this.intervalID = null;
  }

  View.prototype.start = function() {
    var that = this;
    $('body').keydown(function(e) {
      if (e.which == 37) {
        console.log("left");
        that.board.snake.turn("W");
      } else if (e.which == 38) {
        that.board.snake.turn("N");
      } else if (e.which == 39) {
        that.board.snake.turn("E");
      } else if (e.which == 40) {
        that.board.snake.turn("S");
      }
    });

    this.run();
  }

  View.prototype.run = function(){
    var that = this;
    this.intervalID = setInterval(function(){
      console.log("STEP");
      that.step();
    }, 500);
  }

  View.prototype.step = function(){

    this.board.snake.move();
    if (this.board.checkLoss()) {
      alert("YOU LOSE!");
      clearInterval(this.intervalID);
    }
    var boardString = this.board.render();
    this.$el.html("<pre>" + boardString + "</pre>");
  }


})(this);

// up arrow = 38
// down = 40
// right= 39
// left = 37