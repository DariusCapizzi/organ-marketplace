import Ember from 'ember';

export default Ember.Component.extend({



    firstName : 'Betty',
    lastName :Ember.computed('firstName', 'lastName', function() {
      return `${this.get('firstName')} ${this.get('fullName')}`;
    }),


  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),



  isShowForm: false,

  _toggleForm: function(){
    this.set("isShowForm", !this.isShowForm)
  },
  _submitOrgan(){
   var params = {
      organName: this.get('organ-name'),
      cost: this.get('cost'),
    };
    this._toggleForm();
    this.set('organ-name', '');
    this.set('cost', '');
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
