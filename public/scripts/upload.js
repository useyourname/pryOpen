$("document").ready(function(){	
	$('#btn-circle').click(function(){
	  alert('div'); 
	  $('input').click();
	});

	$('input').click(function(event){
	  event.stopPropagation();
	});

	$('input').change(function() {
  	alert('changed!');
		var fileName = this.value.toUpperCase();
	  suffix = ".APK";
	  if( (fileName.length < 3) || (fileName.substr(fileName.length - 4) !== suffix) ){
	  	alert('File type not allowed, please upload an APK file');
			this.value = '';
	  }
	});//end of input onChange
});//end of document ready
