$(document).ready(function(event){
  $('#submit').click(function(event){
   event.preventDefault();
   var newtask = $('#task').val();
   console.log(newtask);
   $('#checklist').append('<li>' + newtask + '</li>');
   })
})