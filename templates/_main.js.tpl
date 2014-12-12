'use strict';


<% _.forEach(gameStates, function(gameState) { %>var <%= gameState.stateName %> = require('./states/<%= gameState.shortName %>');
<% }); %>
var width = document.querySelector('#clippy-bird').clientWidth;;
var game = new Phaser.Game(width, <%= gameHeight %>, Phaser.AUTO, '<%= _.slugify(projectName) %>');

// Game States
<% _.forEach(gameStates, function(gameState) {  %>game.state.add('<%= gameState.shortName %>', <%= gameState.stateName %>);
<% }); %>

game.state.start('boot');

  
