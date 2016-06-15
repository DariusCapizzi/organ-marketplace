import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('organ', params.organ_id);
  },
  actions: {
    goHome(){
      this.transitionTo('index');
    }
  }
});
