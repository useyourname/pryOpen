$("document").ready(function(){	
	
	$('#btn-circle').click(function(){
	  $('form').click();
	});

	$('form').click(function(event){
	  event.stopPropagation();
	  $('input').click();
	});

	$('input').click(function(event){
	  event.stopPropagation();
	});

	$('input').change(function() {
		var fileName = this.value.toUpperCase();
	  var SUFFIX = ".APK";
	  var MAXSIZE = 52428800;
	  if( (fileName.length < 4) || (fileName.substr(fileName.length - 4) !== SUFFIX)){
	  	alert('File type not allowed, please upload an APK file');
			this.value = '';
	  }
	  if(this.files[0].size > MAXSIZE){
	  	alert('Please upload an APK file smaller than 50MB');
			this.value = '';
	  } 
	  $('form').submit();
	});//end of input onChange
});//end of document ready
