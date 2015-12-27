import Ember from 'ember';

export default Ember.Controller.extend({
  
  
  actions: {
    deleteGame() {
      var controller = this;
      this.model.game.destroyRecord().then(
        function( success ) {
          console.log('delete game: success', success );
          controller.transitionToRoute('games');
        },
        function( error ) {
          console.log('delete game: error', error);
        }
      );
    }
  },
  
});
