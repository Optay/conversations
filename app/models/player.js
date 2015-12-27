import DS from 'ember-data';

export default DS.Model.extend({
  namefirst: DS.attr('string'),
  namelast: DS.attr('string'),
  
});
