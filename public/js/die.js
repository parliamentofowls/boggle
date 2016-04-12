var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var Die = function() {
  this.sides = shuffle(letters).splice(0, 6);
  this.indEx;
  this.neighbors = [];
  this.upFacing = this.sides[0];
}

Die.prototype.shake = function() {
  this.sides = shuffle(this.sides);
};



