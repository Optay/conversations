import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    playerDeleted() {
      console.log('player deleted, going back to index');
      this.transitionToRoute('index');
    }
  },

  
  handicapStonesGiven: Ember.computed('model', function() {
    var total = 0;
    var model = this.get('model');
    model.games.forEach( function(game) {
      if ( ( game.get('white').get('id') === model.player.get('id'))) { total += game.get('handicap'); }
    });
    return total;
  }),
  handicapStonesReceived: Ember.computed('model', function() {
    var total = 0;
    var model = this.get('model');
    model.games.forEach( function(game) {
      if ( ( game.get('black').get('id') === model.player.get('id'))) { total += game.get('handicap'); }
    });
    return total;
  }),
  
  whiteRecord: Ember.computed('model', function() {
    var winTotal = 0;
    var lossTotal = 0;
    var model = this.get('model');
    model.games.forEach( function(game) {
      if (( game.get('winner') === 'w' ) && ( game.get('white').get('id') === model.player.get('id'))) { winTotal++; }
      else { lossTotal++; }
    });
    
    return winTotal + '-' + lossTotal;
  }),
  blackRecord: Ember.computed('model', function() {
    var winTotal = 0;
    var lossTotal = 0;
    var model = this.get('model');
    model.games.forEach( function(game) {
      if (( game.get('winner') === 'b' ) && ( game.get('black').get('id') === model.player.get('id'))) { winTotal++; }
      else { lossTotal++; }
    });
    return winTotal + '-' + lossTotal;
  }),
  record: Ember.computed('blackRecord', 'whiteRecord', function() {
    var wins = 0;
    var losses = 0;
    var white = this.get('whiteRecord').split('-');
    wins += parseInt(white[0]);
    losses += parseInt(white[1]);
    var black = this.get('blackRecord').split('-');
    wins += parseInt(black[0]);
    losses += parseInt(black[1]);
    
    return wins + '-' + losses;
  })
  
  
});
