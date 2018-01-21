$(document).ready(function(){

	$('.cat-image').on('click', function(){
		$('.pet-count').text(parseInt($('.pet-count').text()) + 1)
	})

})