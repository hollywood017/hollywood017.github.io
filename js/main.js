
var projectFlap = projectFlap || {};

 projectFlap.game = new Phaser.Game(450, 610, Phaser.CANVAS, 'flappyGame');

  projectFlap.game.state.add('boot', projectFlap.boot);
  projectFlap.game.state.add('preloader', projectFlap.preloader);
  projectFlap.game.state.add('main_menu', projectFlap.main_menu);
  projectFlap.game.state.add('game_play', projectFlap.game_play);
  projectFlap.game.state.add('game_over', projectFlap.die);

projectFlap.game.state.start('boot');
