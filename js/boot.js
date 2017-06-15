var projectFlap = projectFlap || {};
projectFlap.boot = function () {};

projectFlap.boot.prototype = {
  preload:function () {
    this.load.image('logo', 'assets/flappy_bird.png');
    this.load.image('preloaderbar', 'assets/preloader-bar.png');
  },
  create:function () {
    this.game.stage.backgroundColor = '#fff';

    this.scale.pageAlignHorizontally = true;
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.state.start('preloader');
  }
};
