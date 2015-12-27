import Ember from 'ember';

export function upperCase(params/*, hash*/) {
  if ( typeof( params[0] ) === 'string' ) {
    return params[0].toUpperCase();
  } else {
    return '';
  }
}

export default Ember.Helper.helper(upperCase);
