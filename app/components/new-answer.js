import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer:false,
  action:{
  answerFormShow(){
    this.set('addNewAnswer',true);
  }
 },
 saveAnswer1(){
   var params ={
     author:this.get('author'),
     answer:this.get('answer'),
     content:this.get('content'),
   };
   this.set('addNewAnswer',false);
   this.sendAction('saveAnswer2',params);
 }
});
