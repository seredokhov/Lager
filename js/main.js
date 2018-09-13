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
		overlay = $('.overlay'),
		innerLink = menu.find('a');

	link.on('click', function() {
		menu.toggleClass('open');
		overlay.fadeIn(300);
	});
	overlay.add(close).add(innerLink).on('click', function() {
		overlay.fadeOut(300);
		menu.removeClass('open');
	});
	innerLink.on('click', function(){
		
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

// Секция 12 акордион
(function(){
	var link = $('.section_12 .ul_list span'),
		ul = $('.section_12 .acord_ul');

	link.on('click', function(){
		ul.not($(this).siblings()).slideUp(200);
		$(this).siblings('ul').slideToggle(200);
	});
}());

// Радиокнопки секция 14
(function(){
	var radio = $('.section_14 .check'),
		panel = $('.section_14 .change_panel'),
		time = 0;

	radio.on('change', function(){
		var arr = [];

		radio.each(function(i, el){
			if($(el).prop('checked')) {
				arr.push(parseInt($(el).val()));				
			}			
		});

		switch(arr[0] + '-' + arr[1] ) {
			case '5-50': time = '8 смен'; break;
			case '5-75': time = '6 смен'; break;
			case '5-100': time = '4 смены'; break;
			case '7-50': time = '11 смен'; break;
			case '7-75': time = '8 смен'; break;
			case '7-100': time = '6 смен'; break;
			case '10-50': time = '15 смен'; break;
			case '10-75': time = '11 смен'; break;
			case '10-100': time = '8 смен'; break;
			case '12-50': time = '18 смен'; break;
			case '12-75': time = '13 смен'; break;
			case '12-100': time = '9 смен'; break;
			case '15-50': time = '22 смены'; break;
			case '15-75': time = '16 смен'; break;
			case '15-100': time = '11 смен'; break;
		}
		
		$(this).parent().prevAll().addClass('active');
		$(this).parent().nextAll().removeClass('active');
		panel.text(time);
	})
}());

// Секция 16 всплывающие подсказки
(function(){
	var panel = $('.section_16 .panel .content'),
		descr = $('.img_block .description'),
		textBlock = descr.find('.block');


	panel.on('mouseenter', function(){
		if (document.body.clientWidth > 992) {
			var txt = $(this).parent().find('.hidden_text').html();
			textBlock.html(txt);
			descr.fadeIn(100);
		} else {
			$(this).find('.hidden_text').toggle();
		}
	});
	panel.on('mouseleave', function(){
		descr.fadeOut(100);
	});
	
}());

// Секция 19 переворачивание карточек
(function(){
	var article = $('.section_19 .article');

	article.on('click', function(){
		article.not($(this)).removeClass('active');
		$(this).addClass('active');
	});

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
	    mouseDrag: true,
	    margin:0,
	    nav: false,
	    dots: true
	});
}());


// Секция 26 всплывающие окна
(function(){
	var a = $('.section_26 .links a'),
		overlay = $('.section_26 .fade'),
		popupImg = $('.section_26 .slide_modal'),
		prev = popupImg.find('.prev'),
		next = popupImg.find('.next');

	a.on('click', function(){
		var id = $(this).data().id;
		var count = $('.slide_modal div[data-id="' + id + '"]').data().images;
		var counter = 1;
		//console.log(count);
		var img = document.createElement("img");

		popupImg.find('.img_block')[0].innerHTML = '';		

		$(img).attr('src', 'images/block_26/popup_images/' + id + '/1.jpg');
		
		popupImg.find('.img_block').append(img);

		$(img).on('load', function(){
			overlay.add(popupImg).fadeIn(200);
		})
		
		

		prev.on('click', function(){			
			counter--;
			if(counter < 1) counter = count;
			popupImg.find('img').fadeOut(300, function() {
				popupImg.find('img').attr('src', 'images/block_26/popup_images/' + id + '/' + counter +'.jpg').delay(100).fadeIn(300);
			});
		});
		next.on('click', function(){
			counter++;
			if(counter > count) counter = 1;
			popupImg.find('img').fadeOut(300, function() {
				popupImg.find('img').attr('src', 'images/block_26/popup_images/' + id + '/' + counter +'.jpg').delay(100).fadeIn(300);
			});
		});

		return false;

	});

	overlay.on('click', function(){
		$(this).add(popupImg).fadeOut(200);
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

	if (document.body.clientWidth > 768) {	
		$(media).on('canplay', function(){
			videoBlock.fadeIn(200);
			media.play();
		});
		

		$(media).on('abort error pause', function(){
			media.play();
		});
		$(media).on('ended', function(){
			videoBlock.fadeOut(200, function(){
				videoBlock.remove();
			});
		});
	}
});

// Модальная форма
(function(){
	var link = $('.modal_link'),
		modal = $('.modal_form'),
		overlay = $('.modal_overlay'),
		close = $('.modal_form .close'),
		title = [
			'Станьте партнером "Лагеря настоящих героев"',
			'Узнайте подробнее о партнерской программе'
		],
		btnText = [
			'Стать партнером',
			'Узнать'
		],
		bg = [
			'images/modal_bg_1.jpg',
			'images/modal_bg_2.jpg'
		];

	link.on('click', function(){
		var type = parseInt($(this).data().type) - 1;

		modal.find('.modal_title').text(title[type]);
		modal.find('.img_block').css({
			'background': 'url("' + bg[type] + '") no-repeat center',
			'background-size': 'cover'
		});
		console.log(modal.find('.img_block'));

		modal.find('.button').text(btnText[type]);



		modal.fadeIn(200);
		overlay.fadeIn(200);
		return false;
	});
	overlay.add(close).on('click', function(){
		$('.modal').fadeOut(200);
		overlay.fadeOut(200);
	})
}());


//AJAX отправка форм
(function(){
	 var form = $('form');

	 form.on('submit', function() {

		 var thisForm = $(this)[0],
		     formdata = $(this).serializeArray(),
		     jsonData = {},
		     overlay = $('.overlay');
		 $(formdata ).each(function(index, obj){
		     jsonData[obj.name] = obj.value;                
		 });      

	     $.ajax({
	         type: 'POST',
	         url: '../send.php',
	         data: JSON.stringify(jsonData)
	     }).done(function(data) {
	     	var succsessModal = $('.modal_success'),
	     		overlay = $('.modal_overlay');

	     	$('.modal_form').fadeOut(200, function(){
	     		succsessModal.add(overlay).fadeIn(200);
	     		overlay.add(succsessModal.find('.close')).on('click', function() {
	     			overlay.add(succsessModal).fadeOut(200);
	     		});
	     	});
	     	console.log(data);
	         thisForm.reset();

	     });
	     return false;
	 });


}());