var projectFlap = projectFlap || {};

projectFlap.Game = function () {};
var bird;
// bird gravity, will make bird fall if you don't flap
var birdGravity = 800;
// horizontal bird speed
var birdSpeed = 125;
// flap thrust
var birdFlapPower = 300;
// milliseconds between the creation of two pipes
var pipeInterval = 2000;
// hole between pipes, in puxels
var pipeHole = 120;
var pipeGroup;
var score=0;
var scoreText;
var topScore;

projectFlap.Game.prototype = {
  create:function(){
    //set world dimensions

    //background
    this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background');

    //sounds


  			pipeGroup = this.game.add.group();
  			score = 0;
  			topScore = localStorage.getItem("topFlappyScore") === null?0:localStorage.getItem("topFlappyScore");
  			scoreText = this.game.add.text(10,10,"-",{
  				font:"bold 16px Arial"
  			});

  			updateScore();
  			this.game.stage.disableVisibilityChange = true;
  			this.game.physics.startSystem(Phaser.Physics.ARCADE);
  			bird = this.game.add.sprite(80,240,"bird");
  			bird.anchor.set(0.5);
  			this.game.physics.arcade.enable(bird);
  			bird.body.gravity.y = birdGravity;
  			this.game.input.onDown.add(flap, this);
  			this.game.time.events.loop(pipeInterval, addPipe);
  			addPipe();
  		},
  		update:function(){

  			this.game.physics.arcade.collide(bird, pipeGroup, die);
  			if(bird.y>this.game.height){
  				die();
  			}
  		}
};

    function updateScore(){
		scoreText.text = "Score: "+score+"\nBest: "+topScore;
	}

	function flap(){
		bird.body.velocity.y = -birdFlapPower;
	}

	function addPipe(){
		var pipeHolePosition = projectFlap.game.rnd.between(50,430-pipeHole);
		var upperPipe = new Pipe(projectFlap.game, 320, pipeHolePosition-480, -birdSpeed, 'highpipe');
		projectFlap.game.add.existing(upperPipe);
		pipeGroup.add(upperPipe);
		var lowerPipe = new Pipe(projectFlap.game, 320, pipeHolePosition+pipeHole, -birdSpeed, 'lowpipe');
		projectFlap.game.add.existing(lowerPipe);
		pipeGroup.add(lowerPipe);
	}

	function die(){
		localStorage.setItem("topFlappyScore",Math.max(score,topScore));
		projectFlap.game.state.start("mainmenu");
	}

	Pipe = function (game, x, y, speed, type) {
		Phaser.Sprite.call(this, game, x, y, 'pippen');
		projectFlap.game.physics.enable(this, Phaser.Physics.ARCADE);
		this.body.velocity.x = speed;
		this.giveScore = true;
	};

	Pipe.prototype = Object.create(Phaser.Sprite.prototype);
	Pipe.prototype.constructor = Pipe;

	Pipe.prototype.update = function() {
		if(this.x+this.width<bird.x && this.giveScore){
			score+=0.5;
			updateScore();
			this.giveScore = false;
		}
		if(this.x<-this.width){
			this.destroy();
		}
};
