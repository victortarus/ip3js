import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  date: DS.attr('date'),
  question: DS.attr('string'),
  answer:DS.BelongsTo('answer',{async:true})
});
