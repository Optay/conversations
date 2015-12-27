import DS from 'ember-data';

export default DS.Model.extend({
  white: DS.belongsTo('player'),
  black: DS.belongsTo('player'),
  winner: DS.attr(),
  date: DS.attr('date'),
  resign: DS.attr('boolean'),
  score: DS.attr(),
  handicap: DS.attr(),
  komi: DS.attr(),
  
  resultString: Ember.computed('winner', 'resign', 'score', function() {
    var result = '';
    
    result += this.get('winner');
    result += '+';
    if ( this.get('resign') ) {
      result += 'r';
    } else {
      result += this.get('score').toFixed(1);
    }
    
    return result;
  })
  
});
