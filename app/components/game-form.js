import Ember from 'ember';

export default Ember.Component.extend({
  
  // empty model object for create game form
  model: Ember.Object.create(),
  
  actions: {
    
    selectChange(propName, event) {
      console.log( "select change", propName, event.target.value );
      this.get('model').set(propName, event.target.value);
    },
    
    submit() {
      console.log(this.get('model'));
      this.get('onSubmit')( this.get('model') );
    }  
  },
});
