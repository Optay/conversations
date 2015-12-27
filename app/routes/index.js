import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      //players: this.store.filter('player', {}, function(player) { return true; } ),
      players: this.store.findAll('player'),
      games: this.store.findAll('game')
    });
  },
  
  
});
