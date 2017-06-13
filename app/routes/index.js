import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return Ember.RSVP.hash({
        questions: this.store.findAll('question'),
        answers: this.store.findAll('answer')
      });
    },
    actions:{
      destroyAnswer(answer){
        answer.destroyRecord();
        this.transitionTo('index');
      }
    }
  });
