import Ember from 'ember';

export function organCost(params) {
  var organPrice = params[0].get('cost');

  if (organPrice >= 550) {
    return "over";
  } else if (organPrice < 550){
    return "under";
  }
}

export default Ember.Helper.helper(organCost);
