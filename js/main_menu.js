var projectFlap = projectFlap || {};

projectFlap.main_menu = function () {};


projectFlap.main_menu.prototype = {
  init: function (score) {
    this.highestScore = this.highestScore || 0;
    this.highestScore = Math.max(score, this.highestScore);
  },
  create: function () {
    //show the background tiled
    this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'opening');
    //give it speed in x
    this.background.autoScroll(-20, 0);

    //start game text
    var text = "Click to begin";
    var style = {font: "30px Arial", fill: '#fff', align:'center'};
    var t = this.game.add.text(this.game.width/2, this.game.height/2, text, style);
    t.anchor.set(0.5);
  },
  update: function () {
    if(this.game.input.activePointer.justPressed() ) {
      this.game.state.start('game_play');
    }
  }
  // createButton: function (game, image, x, y, w, h, callback) {
  //   var button1 = game.add.sprite(x, y, "playbtn", callback, this, 2, 1, 0 );
  //
  //   button1.anchor.set(0.5);
  //   button1.width = w;
  //   button1.height = h;
  //   button1.inputEnabled = true;
  // }

};
