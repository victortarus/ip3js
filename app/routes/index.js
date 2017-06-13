import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return Ember.RSVP.hash({
        questions: this.store.findAll('question'),
        answers: this.store.findAll('answer')
      });
    },
    actions:{
      saveAnswer3(params){
        var newAnswer=this.store.createRecord('answer',params);
        newAnswer.save();
        this.transitionTo('index');
      },
      destroyAnswer(answer){
        answer.destroyRecord();
        this.transitionTo('index');
      }
    }
  });
