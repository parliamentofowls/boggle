var BoggleGame = function(){
  this.board = [];
  this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  this.turns = 0;
  this.wordsMade = [];
}

// BoggleGame.prototype.createDice = function() {
//   var self = this;
//   for (var i=0; i< 16; i++) {
//     var die = [];
//     for (var j=0; j < 6; j++) {
//       die.push(self.letters[Math.floor(Math.random()*26)])
//     }
//     self.board.push(die);
//   }
// };

BoggleGame.prototype.createDice = function() {
  var self = this;
  for (var i=0; i< 16; i++) {
    self.board.push(new Die(););
  }
};

BoggleGame.prototype.wireDice = function() {
  for (var j = 0; j < this.board.length; j++) {
    var die = this.board[j];
    die.indEx = j;

    die.neighbors.push

  }
}




BoggleGame.prototype.shake = function() {
    shuffle(this.board);

    this.updateDisplay();
}

BoggleGame.prototype.spinDice = function() {
  var self = this;
  for (var i = 0; i < self.board.length; i++) {
    var die = self.board[i];
    var cell = document.getElementById("index-" + i)
    setInterval(function() {
      var cell = document.getElementById("index-" + i);
    }, 50);
  }
}



BoggleGame.prototype.toString = function() {
  var facingUp = [];
  for (var i =0; i < this.board.length; i++) {
    if (this.board[i][0] == "Q") {
      facingUp.push("Qu");
    } else {
      facingUp.push(this.board[i][0]);
    }
  }
  return facingUp;
}

BoggleGame.prototype.updateDisplay = function() {
  var landedSides = this.toString();
  for (var i=0; i < landedSides.length; i++) {
    var cell = document.getElementById("index-" + i);
    cell.innerHTML = landedSides[i];
  }
}





