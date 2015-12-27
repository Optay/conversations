import Ember from 'ember';

export function dateIso(params/*, hash*/) {
  
  return `${params[0].getFullYear()}-${zeroPad(params[0].getMonth()+1)}-${zeroPad(params[0].getDate())}`;

  // Pad day and month
  function zeroPad(value) {
    value = value.toString();
    if ( value.length === 1 ) {
      value = '0' + value;
    }
    return value;
  }
  
}

export default Ember.Helper.helper(dateIso);
