import Ember from 'ember';

export function organCost(params) {
  console.log(params)
  var organPrice = params[0].get('cost');

  if (organPrice >= 550) {
    return "Expensive";
  } else if (organPrice < 550){
    return "Inexpensive";
  } else {
    return "whatver"
  }
}

export default Ember.Helper.helper(organCost);
