import Ember from 'ember';

export default Ember.Service.extend({
  organs: [],
  add(monster){
    this.get('organs').pushObject(organ)
  },
  remove(organ) {
    this.get('organs').removeObject(organ);
  },
  includes(organ){
    return this.get('organs').includes(organ)
  }
});
