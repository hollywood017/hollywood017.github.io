var projectFlap = projectFlap || {};

projectFlap.mainmenu = function () {};


projectFlap.mainmenu.prototype = {
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
    // var button = projectFlap.game.add.button(this.game.world.centerX, this.game.world.centerY, 'tap',
    //                     function openWindow() {
    //                         alert('Hello Phaser!');
    //                     }
    //                   );
    //     button.anchor.set(0.5);
    //     button.input.useHandCursor = true;

    // var playButton = "tap";
    // var i = this.game.add.image(this.game.width/2, this.game.height/2, playButton);
    // i.anchor.set(0.5);
    //Highest Score


  //   this.createButton(game, "playbtn", game.world.centerx, game.world.centery + 0, 300, 100,
  //   function () {
  //     this.state.start('play');
  //     }
  //   );
  //   this.createButton(game, "leaderBoard", game.world.centerx, game.world.centery + 32, 300, 100,
  //     function () {
  //       console.log("leader");
  //     }
  //   );
  //   background = game.add.sprite(game.world.centerx, game.world.centery, -32, 'background');
  //   background.anchor.setTo(0.5, 0.5);
  //
  },
  update: function () {
    if(this.game.input.activePointer.justPressed() ) {
      this.game.state.start('gameplay');
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
