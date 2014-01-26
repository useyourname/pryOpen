$('#btn-circle').click(function(){
  alert('div'); 
  $('input').click();
});

$('input').click(function(event){
    event.stopPropagation();
});

