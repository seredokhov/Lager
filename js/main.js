// Прелоадер

var images = document.images;
var images_total_count = images.length;
var images_loaded_count = 0;
var progress = document.getElementById('progress');

for (var i = 0; i < images_total_count; i++) {
	image_clone = new Image();
	image_clone.onload = loaded;
	image_clone.onerror = loaded;
	image_clone.src = images[i].src;

}
function loaded() {
	images_loaded_count++;		
	progress.innerHTML = ((( 100 / images_total_count ) * images_loaded_count ) << 0 ) + '%';

	if ( images_loaded_count >= images_total_count) {
		setTimeout(function () {
			$(".preloader .inner").fadeOut();
			$(".preloader").fadeOut("slow");
		}, 500)
	}

} 

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
		el.style.height = percent + '%';
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

// Секция 26 слайдер
(function(){
	$('.section_26 .owl-carousel').owlCarousel({
	    center: true,
	    items:1,
	    loop:false,
	    margin:0,
	    nav: true,
	    dots: true
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

// Секция 26 всплывающие окна
(function(){
	var a = $('.section_26 .links a'),
		overlay = $('.section_26 .fade'),
		popupImg = $('.section_26 .slide_modal');

	a.on('click', function(){
		var id = $(this).data().id;
		popupImg.find('img').attr('src', 'images/block_26/popup_images/' + id + '.jpg');
		overlay.add(popupImg).fadeIn(200);
		return false;
	});
	overlay.on('click', function(){
		$(this).add(popupImg).fadeOut(200);
	})
}());

// Удаление  br

(function(){
	var br = $('br');
	if (document.body.clientWidth < 992) {
		br.remove();
	}
}());


// Секция 6 видео
$(function(){
	var media = $('.video_about')[0];
	var videoBlock = $('.video_background');
	media.play();
	$(media).on('ended abort error pause', function(){
		media.play();
	});
});


// Секция 1 видео
$(function(){
	var media = $('.video_main')[0];
	var videoBlock = $('.video_background');

	media.play();

	$(media).on('abort error pause', function(){
		media.play();
	});
	$(media).on('ended', function(){
		videoBlock.fadeOut(200, function(){
			videoBlock.remove();
		});
	});
});
