var projectFlap = projectFlap || {};
projectFlap.preloader = function () {};

projectFlap.preloader.prototype = {

  preload:function () {
    //show loading screen
    this.splash = this.add.sprite(this.game.world.centerx, this.game.world.centery, 'logo');
    this.splash.anchor.setTo(0.5);

    this.preloaderBar = this.add.sprite(this.game.world.centerx, this.game.world.centery + 128, 'preloaderbar');
    this.preloaderBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloaderBar);


    //load game assets
    projectFlap.game.load.image('tap',"assets/tapTapdirect.png");
    projectFlap.game.load.image('opening', "assets/backgroundOpening.png");
    projectFlap.game.load.image('background', "assets/background.png");
    projectFlap.game.load.image('flappyBird', "assets/flappyBird.png");
    projectFlap.game.load.image('bird', "assets/yellowBirdUp.png");
    projectFlap.game.load.image('playbtn', "assets/playButton.png");
    projectFlap.game.load.image('leaderboard', "assets/leaderBoard.png");
    projectFlap.game.load.image("pippen", "assets/pipe.png");
    projectFlap.game.load.image("bird", "assets/yellowBirdUp.png");
    projectFlap.game.load.image("gameOver", "assets/GameOver.png");
  },
  create:function () {
    this.state.start('start');
  },
};
