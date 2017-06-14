
var projectFlap = projectFlap || {};

 projectFlap.game = new Phaser.Game(320, 480, Phaser.CANVAS, '');
console.log(projectFlap.boot);
console.log(projectFlap.preloader);
console.log(projectFlap.MainMenu);
console.log(projectFlap.Game);
  projectFlap.game.state.add('boot', projectFlap.boot);
  projectFlap.game.state.add('preloader', projectFlap.preloader);
  projectFlap.game.state.add('MainMenu', projectFlap.MainMenu);
  projectFlap.game.state.add('Game', projectFlap.Game);

  projectFlap.game.state.start('boot');
