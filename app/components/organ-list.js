import Ember from 'ember';

export default Ember.Component.extend({

  isShowForm: false,

  _toggleForm: function(){
    this.set("isShowForm", !this.isShowForm)
  },
  _submitOrgan(){
   var params = {
      organName: this.get('organ-name'),
      cost: parseInt(this.get('cost')),
      description: this.get('description'),
    };
    this._toggleForm();
    this.set('organ-name', '');
    this.set('cost', '');
    this.set('description', '')
    this.sendAction('sendOrgan', params);
  },
  actions: {
    showForm(){
      this._toggleForm()
    },
    submitOrgan(){
      this._submitOrgan()
    }
  }

});
