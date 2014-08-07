//= require jquery
//= require_tree .

$(document).ready( function(){
	$('.nav-link').on('click', function(e){
		e.preventDefault();
		$('.main-info').addClass('hidden')
		$('.content').addClass('hidden')

		var id = $(this).attr('id')
		$('.' + id).removeClass('hidden')
	});
});

