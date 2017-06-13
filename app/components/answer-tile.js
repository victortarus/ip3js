import Ember from 'ember';

export default Ember.Component.extend({
  isAnswerDialogShowing:false,
  action:{
    showDialogBox:function(){
      this.set("isAnswerDialogShowing",true);
    }
  }
});
