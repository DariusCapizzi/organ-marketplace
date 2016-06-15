import Ember from 'ember';

export default Ember.Service.extend({
  organs: [],
  add(organ){
    // console.log(this.get('organs'));
    this.get('organs').pushObject(organ);
  },
  remove(organ) {
    this.get('organs').removeObject(organ);
  },
  includes(organ){
    return this.get('organs').includes(organ)
  },
  getTotal(){
    var total = 0;
    this.get('organs').forEach(function(organ){
      // console.log(parseInt(organ._internalModel._data.cost));
      total += parseInt(organ.get('cost'));
    });
    return total;
  }
});
