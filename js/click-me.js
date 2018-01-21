$(document).ready(function(){

	var cat_names = ['Ashes', 'Smoky', 'Kitty', 'Oscar', 'Misty']

	// Add names
	for(var i=0; i<cat_names.length; i++){
		$('.cat-name-' + (i+1)).text(cat_names[i])	
	}
	
	$('.cat-image').on('click', function(){
		$('.pet-count-' + $(this).attr('name')).text(parseInt($('.pet-count-' + $(this).attr('name')).text()) + 1)
	})

})