import Ember from 'ember';

export default Ember.Route.extend({
  
  model() {
    return Ember.RSVP.hash({
      //players: this.store.filter('player', {}, function(player) { return true; } ),
      players: this.store.findAll('player')
    });
  },
  
  actions: {
    addNewPlayer( nameLast, nameFirst ) {

      console.log("add new player", nameLast, nameFirst);
      var newPlayer = this.store.createRecord('player', {
        namelast: nameLast,
        namefirst: nameFirst
      });
      
      var route = this;
      // Persist the changes.
      // Server will reply with the same object with id field populated.
      newPlayer.save().then( function(response) {
        console.log('save success');
        newPlayer.set('id', response.get('id')); // Set the server-assigned id on the data store object.
        route.controller.set('newNameLast', '');
        route.controller.set('newNameFirst', '');
      }, function(error) {
        console.log('save error', error.errors);
        route.set('errors', error.errors);
        newPlayer.rollbackAttributes();
      });
      
      
      
    }
  }  
});
