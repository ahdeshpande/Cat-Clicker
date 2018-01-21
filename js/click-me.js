$(document).ready(function(){

	var cat_names = ['Ashes', 'Smoky']

	$('.cat-name-1').text(cat_names[0])
	$('.cat-name-2').text(cat_names[1])

	$('.cat-image').on('click', function(){
		if($(this).hasClass('cat-1')){
			$('.pet-count-1').text(parseInt($('.pet-count-1').text()) + 1)
		}
		else {
			$('.pet-count-2').text(parseInt($('.pet-count-2').text()) + 1)
		}
	})

})