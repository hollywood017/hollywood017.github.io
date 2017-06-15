
var projectFlap = projectFlap || {};

 projectFlap.game = new Phaser.Game(320, 480, Phaser.CANVAS, '');
console.log(projectFlap.boot);
console.log(projectFlap.preloader);
console.log(projectFlap.mainmenu);
console.log(projectFlap.gameplay);
  projectFlap.game.state.add('boot', projectFlap.boot);
  projectFlap.game.state.add('preloader', projectFlap.preloader);
  projectFlap.game.state.add('main_menu', projectFlap.main_menu);
  projectFlap.game.state.add('game_play', projectFlap.game_play);

  projectFlap.game.state.start('boot');
