
'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');
  },
  create: function() {
    this.game.input.maxPointers = 1;

    // Allow users to scroll past game
    //this.game.input.touch.preventDefault = false;
    Phaser.Canvas.setTouchAction(this.game.canvas, 'auto');

    this.game.state.start('preload');
  }
};

module.exports = Boot;
