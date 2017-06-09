import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
   actions: {
     questionFormShow() {
       this.set('addNewQuestion', true);
     },
     saveReview() {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        date: this.get('date')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
   }


});
