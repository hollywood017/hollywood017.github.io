
var projectFlap = projectFlap || {};

 projectFlap.game = new Phaser.Game(320, 480, Phaser.CANVAS, '');
console.log(projectFlap.boot);
console.log(projectFlap.preloader);
console.log(projectFlap.mainmenu);
console.log(projectFlap.gameplay);
  projectFlap.game.state.add('boot', projectFlap.boot);
  projectFlap.game.state.add('preloader', projectFlap.preloader);
  projectFlap.game.state.add('mainmenu', projectFlap.mainmenu);
  projectFlap.game.state.add('Game', projectFlap.gameplay);

  projectFlap.game.state.start('boot');
