import Ember from 'ember';

export default Ember.Component.extend({
  updateAnsweForm: false,
  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },
    update(answer) {
      var params = {
        answer: this.get('answer'),
        content: this.get('content'),

      };
      this.set('updateAnswerForm', false);
      this.sendAction('update' ,answer, params);
    }
  }
});
