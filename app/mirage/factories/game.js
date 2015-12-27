import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  white: null,
  black: null,
  date: faker.date.past(),
  result: function(i){
    var assemble = '';
    assemble += faker.random.arrayElement(['w', 'b']);
    assemble += '+';
    if ( Math.random() > 0.5 ) {
      assemble+='r';
    } else {
      assemble += faker.random.number({min: 0, max: 24} );
      assemble += '.5';
    }
    return assemble;
  },
  handicap: function(i) {
    var value;
    do {
      value = faker.random.number({min:0, max:9});
    } while (value==1);
    return value;
  },
  komi: function(i) {
    if ( this.handicap == 0 ) {
      return 6.5;
    } else {
      return 0.5;
    }
  }
  
});
