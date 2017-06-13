import Ember from 'ember';

export default Ember.Component.extend({
  isAnswerDialogShowing:false,
  action:{
    showDialogBox:function(){
      this.set("isAnswerDialogShowing",true);
    }
  }
  answerDialogBox:function(){
    this.set("isAnswerDialogShowing",false);
  }
});
