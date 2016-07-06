$( ".question" ).click(function( event ) {
	
	// mobile
	$( this ).toggleClass('question-active');




	// desktop
	var question = $( this ).find('.question-title p').text();
	var reponse = $( this ).find('.answer p').text();
	console.log('question : '+question);
	console.log('réponse : '+reponse);

	// $('.faq-answers .question-title p').html('')
	$('.faq-answers .question-title p').html(question);
	$('.faq-answers .answer p').html(reponse);
	event.preventDefault();
 


});