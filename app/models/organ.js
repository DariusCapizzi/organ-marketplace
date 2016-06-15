import DS from 'ember-data';

export default DS.Model.extend({
  organName: DS.attr('string'),
  cost: DS.attr()
});
