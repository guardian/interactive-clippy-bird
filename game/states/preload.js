
'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.image('background', 'assets/background.png');
    this.load.image('ground', 'assets/ground.png');
    this.load.image('title', 'assets/title.png');
    this.load.spritesheet('bird', 'assets/clipman.png', 23,24,3);
    this.load.spritesheet('pipe', 'assets/pipes.png', 54,320,2);
    this.load.image('startButton', 'assets/start-button.png');
    
    this.load.image('instructions', 'assets/instructions.png');
    this.load.image('getReady', 'assets/get-ready.png');
    
    this.load.image('scoreboard', 'assets/scoreboard.png');
    this.load.spritesheet('medals', 'assets/medals.png',44, 46, 2);
    this.load.image('gameover', 'assets/gameover.png');
    this.load.image('particle', 'assets/particle.png');

    this.load.audio('flap', ['assets/flap.mp3', 'assets/flap.ogg']);
    this.load.audio('pipeHit', ['assets/pipe-hit.mp3', 'assets/pipe-hit.ogg']);
    this.load.audio('groundHit', ['assets/ground-hit.mp3', 'assets/ground-hit.ogg']);
    this.load.audio('score', ['assets/score.mp3', 'assets/score.ogg']);
    this.load.audio('ouch', ['assets/ouch.mp3', 'assets/ouch.ogg']);

    this.load.bitmapFont('flappyfont', 'assets/fonts/flappyfont/flappyfont.png', 'assets/fonts/flappyfont/flappyfont.fnt');

  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;
