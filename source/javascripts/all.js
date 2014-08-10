//= require jquery
//= require_tree .

$(document).ready( function(){
	$('.nav-link').on('click', function(e){
		e.preventDefault();
		$('.main-info p').hide();
		$('.main-info').css({'bottom': '92%', 'text-align':'left'})
		$('.name').css({'font-size': '2.5rem'})
		$('.name-link').css({'color': 'rgba(255,255,255,0.5'})
		$('.content').hide();

		var id = $(this).attr('id')
		$('.' + id).fadeIn();
	});

	$('.name-link').on('click', function(e){
		e.preventDefault();

		$('.content').hide()
		$('.name').css({'font-size': '4rem'})
		$('.main-info').css({'bottom': '50%', 'left': '37%'})
		$('.main-info p').show();
		$('.name-link').css({'color': 'rgba(255,255,255,1'})		
	});

});

