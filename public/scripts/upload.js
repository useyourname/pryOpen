var button = document.getElementById('btn-circle');
var inputs = document.getElementsByTagName('input');
var input = inputs[0];
button.onclick = function(){
  input.click(function(event){event.stopPropagation();});
};