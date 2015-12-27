import Ember from 'ember';

export default Ember.Controller.extend({
  
  sortCriteria: ['date:desc'],
  sortedGames: Ember.computed.sort('model.games', 'sortCriteria'),
  
  actions: {
    addNewGame( newGameObject ) {
      console.log("Add new game", newGameObject );
      var store = this.store;
      
      // set up properties
      var white = store.peekRecord('player', newGameObject.whiteId );
      var black = store.peekRecord('player', newGameObject.blackId );
      var winner;
      var resign;
      var score;
      
      //console.log( white, this.get('whiteId') );
      
      // Parse result to identify winner and score
      var resultStr = newGameObject.get('result');
      var resultParts = resultStr.split('+');
      winner = resultParts[0].toLowerCase();
      if ( resultParts[1].toLowerCase() === 'r' ) {
        score = 0;
        resign = true;
      } else {
        score = parseFloat( resultParts[1] );
        resign = false;
      }
      
      var handicap = newGameObject.handicap;
      var komi = newGameObject.komi;
      var date = new Date( newGameObject.date );
      
      // Create a new game record
      var game;
      game = store.createRecord('game', {
        white: white,
        black: black,
        winner: winner,
        date: date,
        resign: resign,
        score: score,
        handicap: handicap,
        komi: komi
      });
      
      var self = this;
      game.save().then( function(response) {
        console.log("New game successfully added", response);
        game.set('id', response.get('id')); // Set the server-assigned id on the data store object.
        // clear form
        self.set('whiteId','');
        self.set('blackId','');
        self.set('result','');
        self.set('komi','');
        self.set('handicap','');
        self.set('date', '');
        
      }, function(error) {
        console.log("error", error);
        game.rollbackAttributes();
      });
      
    },
    
  }
  
  
});
