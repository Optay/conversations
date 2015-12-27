import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  namefirst: faker.name.firstName,
  namelast: faker.name.lastName
});
