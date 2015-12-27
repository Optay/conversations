import Ember from 'ember';

export default Ember.Route.extend({
  
  model(params) {
    //return this.store.findRecord('game', params.game_id);
    return Ember.RSVP.hash({
      game: this.store.findRecord('game', params.game_id)
    });
  },
  
  
});
