
var projectFlap = projectFlap || {};

projectFlap.die = function () {};

projectFlap.die.prototype = {
	init: function(score){
		alert("Score: "+ score + "\nBest: " + topScore);
	},
  	create: function(){
      this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'opening');
      this.background.autoScroll(-20, 0);

  	var gameOverTitle = this.game.add.sprite(this.game.width/2, this.game.height/2,"game_over");
		gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(230,360,"playbtn",this.MainMenu,this);
		playButton.anchor.setTo(0.5,0.5);
    $("#replay").click(function(){
      projectFlap.game.state.start("main_menu");
    });
	},
};
