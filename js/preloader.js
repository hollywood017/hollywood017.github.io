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
    projectFlap.game.load.image('tap',"assets/tap_tap_direct.png");
    projectFlap.game.load.image('opening', "assets/background_opening.png");
    projectFlap.game.load.image('background', "assets/background.png");
    projectFlap.game.load.image('flappyBird', "assets/flappy_bird.png");
    projectFlap.game.load.image('bird', "assets/yellow_bird_up.png");
    projectFlap.game.load.image('playbtn', "assets/play_button.png");
    projectFlap.game.load.image('leaderboard', "assets/leader_board.png");
    projectFlap.game.load.image("pippen", "assets/pipe.png");
    projectFlap.game.load.image("bird", "assets/yellow_bird_up.png");
    projectFlap.game.load.image("game_over", "assets/game_over.png");
    // projectFlap.game.load.image("tryagain", "http://i221.photobucket.com/albums/dd22/djmid71/tryagain_zpszyvxhs8m.png");
    // projectFlap.game.load.image("yes","http://i221.photobucket.com/albums/dd22/djmid71/yes_zpsfppqya7h.png");
    // projectFlap.game.load.image("no","http://i221.photobucket.com/albums/dd22/djmid71/no_zpsnjisaare.png");
  },
  create:function () {
    this.state.start('main_menu');
  },
};
