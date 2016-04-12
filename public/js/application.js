$(document).ready(function(){
  game = new BoggleGame;
  game.createDice();
  game.updateDisplay();
  $('button.shake').click(function(event){
    event.preventDefault();
    game.shake();
  });
});