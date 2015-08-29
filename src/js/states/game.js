var Player = require('../entities/player');

var Game = function () {
};

module.exports = Game;

Game.prototype = {

  preload: function () {
    this.game.load.spritesheet('characters',
      'assets/darkforce.png', 32, 48);
  },

  create: function () {
    sprite = this.game.add.sprite(40, 100, 'characters');
    sprite.scale.set(4, 4);
    sprite.animations.add('walk_right', [24, 25, 26]);
    sprite.animations.play('walk_right', 5, true);

    this.game.add.tween(sprite).to({ x: this.game.width }, 10000, Phaser.Easing.Linear.None, true);

    this.input.onDown.add(this.onInputDown, this);
  },

  update: function () {
  },

  onInputDown: function () {
    this.game.state.start('Menu');
  }
};
