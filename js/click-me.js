$(document).ready(function(){

	var cat_data = [{
		'id': 0,
		'name': 'Ashes',
		'img': 'cat-1.jpg',
		'meow_count': 0
	},{
		'id': 1,
		'name': 'Smoky',
		'img': 'cat-2.jpg',
		'meow_count': 0
	},{
		'id': 2,
		'name': 'Kitty',
		'img': 'cat-3.jpg',
		'meow_count': 0
	},{
		'id': 3,
		'name': 'Oscar',
		'img': 'cat-4.jpg',
		'meow_count': 0
	},{
		'id': 4,
		'name': 'Misty',
		'img': 'cat-5.jpg',
		'meow_count': 0
	}]

	var model = {
		init: function(){
			if (!localStorage.cats) {
				localStorage.cats = JSON.stringify(cat_data);
			}
		},
		getAllCats: function() {
			return JSON.parse(localStorage.cats);
		},
		getCat: function(id){
			cat = JSON.parse(localStorage.cats)[id]
			return cat
		},
		increaseMeowCount(id){
			cats = JSON.parse(localStorage.cats)
			cats[id]['meow_count'] += 1
			localStorage.cats = JSON.stringify(cats)
			return cats[id]['meow_count']
		}
	}

	var octopus = {
		getAllCats: function() {
			return model.getAllCats();
		},
		getCat: function(id) {
			return model.getCat(id);
		},
		increaseMeowCount(id){
			return model.increaseMeowCount(id)
		},
		init: function() {
			model.init();
			view.init();
		}
	}

	var view = {
		init: function() {
			this.catList = $('.cat-list');
			cats = octopus.getAllCats()
			htmlStr = ''
			for(var i=0; i<cats.length; i++){
				htmlStr += '<div class="col-xs-2 text-center">' +
				'<button class="btn btn-default" data-id=' + cats[i]['id'] + '>' + 
				cats[i]['name'] +
				'</button>' + 
				'</div>'
			}
			this.catList.html(htmlStr)
			view.render();
		},
		showCat:function(id){
			cat = octopus.getCat(id)
			this.catDetails = $('.cat-details');
			htmlStr = ''

			htmlStr += '<div class="col-xs-7 text-center cat-image">' +
			'<figure><h3><figcaption class="cat-name-"' +
			cat['id'] +
			'>' +
			cat['name'] +
			'</figcaption></h3>' +
			'<img src="img/' + 
			cat['img'] + 
			'" alt="Cat Photo" data-id="' +
			cat['id'] +
			'" class="cat-image cat-' +
			cat['id'] +
			'">' +
			'</figure>' +
			'</div>' +
			'<div class="col-xs-7 text-center">' +
			'<h4>Meow Count <span class="text-primary pet-count-cat-' +
			cat['id'] +
			'">' +
			cat['meow_count'] +
			'</span></h4>' +
			'</div>'

			this.catDetails.html(htmlStr)
			view.render()
		},
		render: function(){
			$('.cat-list button').on('click', function(elem){
				elem.preventDefault();
				view.showCat($(this).attr('data-id'))
			})

			$('.cat-image').on('click', function(elem){
				elem.preventDefault();
				meow_count = octopus.increaseMeowCount($(this).attr('data-id'))
				$('.pet-count-cat-' + $(this).attr('data-id')).text(meow_count)
			})
		}
	}
	octopus.init()
})