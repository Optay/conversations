import Ember from 'ember';

export default Ember.Controller.extend({
  newNameLast: '',
  newNameFirst: '',
  
  playerSortCriteria: ['namelast'],
  sortedPlayers: Ember.computed.sort('model.players', 'playerSortCriteria' ),

  
});


