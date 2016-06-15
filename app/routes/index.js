import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('organ')
  },
  _saveOrgan(params){

    var newOrgan = this.store.createRecord('organ', params);
    newOrgan.save();

  // this.transitionTo('question', newQuestion.id);
  },
  actions: {
    saveOrgan(params){
      this._saveOrgan(params)
    }
  }
});
