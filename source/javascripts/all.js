//= require jquery
//= require_tree .

$(document).ready( function(){
	$('.nav-link').on('click', function(e){
		e.preventDefault();
		$('.main-info').fadeOut();
		$('.content').fadeOut();

		var id = $(this).attr('id')
		$('.' + id).slideDown();
	});
});

