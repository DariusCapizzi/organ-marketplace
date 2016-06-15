import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    addToCart(){
      this.get("shoppingCart").add(this.get("organ"))
    },
    remove(){
      this.get("shoppingCart").remove(this.get("organ"))
    },
    deleteOrgan(){
      console.log("hey")
      // this.get("shoppingCart").remove(this.get("organ"));
      this.organ.destroyRecord();
      this.sendAction('goHome');
    }
  }
});
