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

	var canvas1 = document.getElementById('line1');
	var context1 = canvas1.getContext('2d');

	context1.beginPath();
	context1.moveTo(14, 191);
	context1.bezierCurveTo(-1, 189, 140, 173, 181, 212);
	context1.bezierCurveTo(233, 261, 343, 191, 357, 186);
	context1.bezierCurveTo(451, 149, 506, 203, 518, 212);
	context1.bezierCurveTo(549, 234, 593, 206, 594, 206);
	context1.lineWidth = 5;
	context1.strokeStyle = '#2ecc71';
	context1.stroke(); 


	var canvas2 = document.getElementById('line2');
	var context2 = canvas2.getContext('2d');

	context2.beginPath();
	context2.moveTo(14, 191);
	context2.bezierCurveTo(8, 216, 104, 259, 154, 219);
	context2.bezierCurveTo(184, 195, 299, 173, 322, 217);
	context2.bezierCurveTo(348, 267, 449, 219, 461, 210);
	context2.bezierCurveTo(506, 174, 591, 222, 576, 221);
	context2.lineWidth = 5;
	context2.strokeStyle = '#3498db';
	context2.stroke();
});

