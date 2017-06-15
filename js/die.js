var projectFlap = projectFlap || {};

projectFlap.die = function () {};


projectFlap.die.prototype = {
  create: function () {
    reg.modal = new gameModal(game);
    createModals();
    var m3 = this.game.add.button(30, 50, "m3", showModal);
  },
  update: function () {

  },

};

function createModals() {
  reg.modal.createModal({
            includeBackground: true,
            modalCloseOnInput: true,
  itemsArr: [
                {
                    type: "image",
                    content: "game_over",
                    offsetY: -110,
                    contentScale: 0.6
            },
                {
                    type: "image",
                    content: "tryagain",
                    contentScale: 0.6
            },
                {
                    type: "image",
                    content: "yes",
                    offsetY: 100,
                    offsetX: -80,
                    contentScale: 0.6,
                    callback: function () {
                        alert("YES!");
                      window.console.log("yes");
                    }
            },
                {
                    type: "image",
                    content: "no",
                    offsetY: 100,
                    offsetX: 80,
                    contentScale: 0.6,
                    callback: function () {
                        alert("NO!");
                    }
            }
            ]
   });
}

function showModal3() {
  reg.modal.showModal("modal3");
}
