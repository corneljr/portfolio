//= require jquery
//= require_tree .

$(document).ready( function(){
	$('.nav-link').on('click', function(e){
		e.preventDefault();
		$('.content > div').addClass('hidden')

		var id = $(this).attr('id')
		var section = $('div').find('div.' + id)
		section.removeClass('hidden')

	});
});

