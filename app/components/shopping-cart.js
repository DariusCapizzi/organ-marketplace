import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  total: Ember.computed(function(){
    // console.log(this.get('shoppingCart').organs[0]._internalModel._data.cost);
    return this.get('shoppingCart').getTotal();
  })
});
