// Выпадающее меню
(function(){
	var link = $('.hamb'),
		menu = $('.slide_menu'),
		close = menu.find('.close'),
		overlay = $('.overlay');

	link.on('click', function() {
		menu.toggleClass('open');
		overlay.fadeIn(300);
	});
	overlay.add(close).on('click', function() {
		overlay.fadeOut(300);
		menu.removeClass('open');
	})


}());

// Галерея в 5 блоке
(function(){
	var card = $('.section_5 .card'),
		tab = $('.section_5 .tab'),
		img = $('.section_5 .tab_img'),
		bgBlock = $('.section_5 .bg_block');

	card.on('click', function() {

		var idx = $(this).index();

		if(!$(this).hasClass('active')) {
			card.removeClass('active');
			$(this).addClass('active');

			tab.not(tab.eq(idx)).hide();
			tab.eq(idx).show();

			img.fadeTo(200, 0, function() {
				$(this).attr('src', 'images/block_5/gallery/photo/' + (idx+1) + '.jpg').fadeTo(200, 1);
				bgBlock.fadeOut(200, function(){
					bgBlock.attr('class', 'bg_block img-' + (idx+1) ).fadeIn(200);
				})
			});
		}
	})
}());

/* Табы в 9 блоке */
(function(){
	var year = $('.section_9 .year'),
		map = $('.section_9 .map');

	year.on('click', function(){
		var idx = $(this).index();
		if(map.eq(idx).hasClass('active')) return;

		map.removeClass('active');
		year.removeClass('active');
		map.eq(idx).addClass('active');
		$(this).addClass('active');

	})
}());

// Табы блок 12
(function(){

	var link = $('.section_12 .tab_controls .link'),
		tab = $('.section_12 .tab');

	link.on('click', function(){
		var idx = $(this).index();

		link.removeClass('active');
		$(this).addClass('active');

		tab.removeClass('active');
		tab.eq(idx).addClass('active');
	});
}());


// Процeнты
(function(){
	var col = $('.chart_block .column');
	col.each(function(i, el){
		var percent = $(el).data().percent;
		if (document.body.clientWidth > 992) {
			el.style.height = percent + '%';
		} else {
			el.style.width = percent + '%';
		}
		el.innerHTML = percent + '%';
	})

}());

// Радиокнопки секция 14
(function(){
	var radio = $('.section_14 .check');

	radio.on('change', function(){
		$(this).parent().prevAll().addClass('active');
		$(this).parent().nextAll().removeClass('active');
	})
}());


// Секция 21 слайдер
(function(){
	$('.section_21 .owl-carousel').owlCarousel({
	    center: true,
	    items:2,
	    loop:true,
	    margin:0,
	    dots: true,
	    responsive:{
	        600:{
	            items:4
	        }
	    }
	});
}());

// Секция 28 акордион
(function(){
	var link = $('.section_28 .link'),
		ul = link.siblings('ul');

	link.on('click', function(){
		ul.not($(this).siblings()).slideUp(200);
		$(this).siblings('ul').slideToggle(200);
	});
}());