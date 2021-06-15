var player = Math.random();
player = Math.floor(player * 2) + 1;


$("#playerTurn").html("Player " + player + "'s Turn");


var player1Score = [];
var player2Score = [];

var winningCombos = [combo1 = ["One", "Two", "Three"], combo2 = ["Four", "Five", "Six"], combo3 = ["Seven", "Eight", "Nine"],
  combo4 = ["One", "Four", "Seven"], combo5 = ["Two", "Five", "Eight"], combo6 = ["Three", "Six", "Nine"], combo7 = ["Seven", "Five", "Three"],
  combo8 = ["One", "Five", "Nine"]
];

Boolean(game = false)
$(".smaller-square").on("click", function() {
  if (player === 1) {
    $("#" + this.id + " h1").html("X");
    $("#" + this.id + " h1").addClass("addChar");
    player1Score.push(this.id);
    checkGameState(player1Score, player)
    if (game === false) {
      player = 2;
      $("#playerTurn").html("Player " + player + "'s Turn");
      $("#" + this.id).off('click');
    } else {
      $(".smaller-square").unbind("click");
    }

  } else if (player === 2) {
    $("#" + this.id + " h1").html("O");
    $("#" + this.id + " h1").addClass("addChar");
    player2Score.push(this.id);
    checkGameState(player2Score, player)
    if (game === false) {
      player = 1;
      $("#playerTurn").html("Player " + player + "'s Turn");
      $("#" + this.id).off('click');
    } else {
      $(".smaller-square").unbind("click");
    }
  }
});


function checkGameState(playerScore, player) {

  for (var i = 0; i < winningCombos.length; i++) {
    if (winningCombos[i].every(elem => playerScore.includes(elem)) === true) {
      return game = true, $("#playerTurn").html("🚩 Player " + player + " Wins!!! 🚩");
    }
  }
  if(playerScore.length === 5){
    return game = true, $("#playerTurn").html("⚔️ Draw! ⚔️");
}
};
