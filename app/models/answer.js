import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr('string'),
  author: DS.attr('string'),
  content: DS.attr('string')
});
