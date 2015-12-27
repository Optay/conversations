import Ember from 'ember';

export default Ember.Component.extend({
  /*
  foo: Ember.computed('player', function() {
    return this.get('player').get('namefirst');
  })*/
  
  /*
  playerGames: Ember.computed.filter( 'games', function(game, index, array) {
    console.log( game.white.id, this.get('player').id );
    return game.white.id === this.get('player').id;
  }),*/

  actions: {
    save() {
      // save changes to the model
      this.player.save().then( function(response) {
        console.log('update success', response);
      }, function(error) {
        console.log('update error', error);
      });
      
    },
    deletePlayer() {
      var controller = this; // really?
      this.player.destroyRecord().then(
        function( success ) {
          console.log('success', success );
          controller.get('onDelete')();
        },
        function( error ) {
          console.log('error', error);
        }
      );
      
    }
  }
  
});
