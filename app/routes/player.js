import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    //return this.store.findRecord('player', params.player_id);
  
    return Ember.RSVP.hash({
      player: this.store.findRecord('player', params.player_id),
      //allGames: this.store.findAll('game'),
      games: this.store.filter('game', {}, function(game) {
        //console.log( game.get('white').get('id'), params.player_id );
        return (( game.get('white').get('id') === params.player_id ) || ( game.get('black').get('id') === params.player_id ) );
      })
      
    });
  },



  
  
  /*
  playerGames: Ember.computed('model.games.[]', 'model.player', function() {
    var id = model.player.get('id');
    console.log( id );
    return model.games.filter( function( game ) {
      console.log( id, game.white.id );
      return (( game.white.id === id ) || ( game.black.id === id ) );
    } );
  })*/
  
  
});
