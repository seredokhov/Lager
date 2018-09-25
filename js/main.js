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
		bgBlock = $('.section_5 .bg_block'),
		mobileText = $('.section_5 .mobile_text');

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
		if(document.body.clientWidth < 992) {
			// alert('asasd');
			var txt = $(this).find('.card_text').text();

			mobileText.text(txt);

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
		customRadio = $('.section_14 .custom_check'),
		panel = $('.section_14 .change_panel'),
		time = 0;

	customRadio.on('mousedown', function(){
		var x = event.pageX;
		var line = $(this).parent().siblings('.line');
		var width = parseInt($(line[0]).width());		
		var thisLabel = $(this).parent();
		var nextLabel = $(this).parent().next().next();
		var prevLabel = $(this).parent().prev().prev();
		var pageX = 0;

		thisLabel.find('input').prop('checked', true);
		thisLabel.find('input').trigger('change');
		$('.section_14').addClass('move');


		$(document).on('mousemove', function() {
			if (event.pageX > pageX) {				
				if(event.pageX > (x + width)) {
					x = event.pageX;					
					nextLabel.find('input').prop('checked', true);
					nextLabel.find('input').trigger('change');
					thisLabel = nextLabel;
					prevLabel = thisLabel.prev().prev();
					nextLabel = thisLabel.next().next();
					if(!nextLabel[0]) {
						nextLabel = thisLabel;
					}
				}
			} else if (event.pageX < pageX) {
				if(event.pageX < (x - width)) {
					x = event.pageX;
					prevLabel.find('input').prop('checked', true);
					prevLabel.find('input').trigger('change');
					thisLabel = prevLabel;
					prevLabel = thisLabel.prev().prev();
					nextLabel = thisLabel.next().next();
					if(!prevLabel[0]) {
						prevLabel = thisLabel;
					}
				}
			} else {
				return false;
			}
			pageX = event.pageX;
		});
	});

	$(document).on('mouseup', function(){
		$('.section_14').removeClass('move');
		$(document).off('mousemove');
	});

	radio.on('change input', function(){
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
		front = descr.find('.front'),
		back = descr.find('.back');


	panel.on('click', function(){
		if (document.body.clientWidth > 992) {
			var txt = $(this).parent().find('.hidden_text').html();

			if( $(this).parent().hasClass('this') ) {
				descr.fadeOut(100);
				panel.parent().removeClass('this');
			} else {
				panel.parent().removeClass('this');
				$(this).parent().addClass('this');

				if (descr.css('display') == 'none') {
					descr.removeClass('rotated');
					front.html(txt);
					back.html('');
					descr.fadeIn(100);
				} else {

					if( descr.hasClass('rotated') ) {
						front.html(txt);
						descr.removeClass('rotated');
					} else {
						back.html(txt);
						descr.addClass('rotated');
					}
				}
			}
		} else {
			$(this).parent().find('.hidden_text').toggle();
		}
	});	
}());

// Секция 7 слайдер
(function(){
	if(document.body.clientWidth < 992) {
		$('.section_7 .owl-carousel').owlCarousel({
			center: true,
			items:1,
			loop:true,
			margin:0,	   
			dots: true,
			nav: true
		});
	}
}());
// Секция 19 переворачивание карточек
(function(){
	var article = $('.section_19 .article');

	article.on('click', function(){
		article.not($(this)).removeClass('active');
		$(this).toggleClass('active');
	});

}());
// Секция 17 слайдер
(function(){
	if(document.body.clientWidth < 992) {
		$('.section_17 .owl-carousel').owlCarousel({
			center: true,
			items:1,
			loop:true,
			margin:0,	   
			dots: true,
			nav: true
		});
	}
}());
// Секция 19 слайдер
(function(){
	if(document.body.clientWidth < 992) {
		$('.section_19 .owl-carousel').owlCarousel({
			center: true,
			items:1,
			loop:true,
			margin:0,	   
			dots: true,
			nav: true
		});
	}
}());

// Секция 20 слайдер
(function(){
	if(document.body.clientWidth < 992) {
		$('.section_20 .owl-carousel').owlCarousel({
			center: true,
			items:1,
			loop:true,
			margin:0,	   
			dots: true,
			nav: true
		});
	}
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
	    	1000:{
	    	    items:2
	    	},
	        600:{
	            items:2
	        },
	        0:{
	        	items:1
	        }
	    }
	});
}());
// Секция 22 слайдер
(function(){
	if(document.body.clientWidth < 992) {
		$('.section_22 .owl-carousel').owlCarousel({
			center: true,
			items:1,
			loop:true,
			margin:0,	   
			dots: true,
			nav: true
		});
	}
}());

// Секция 26 слайдер
(function(){
	$('.section_26 .owl-carousel').owlCarousel({
	    center: true,
	    items:1,
	    loop:false,
	    mouseDrag: true,
	    margin:0,
	    nav: true,
	    dots: true
	});
}());

// Секция 29 слайдер
(function(){
	if(document.body.clientWidth < 992) {
		$('.section_29 .owl-carousel').owlCarousel({
			center: true,
			items:1,
			loop:true,
			margin:0,	   
			dots: true,
			nav: true
		});
	}
}());
// Секция 26 всплывающие окна
(function(){
	var a = $('.section_26 .links a'),
		overlay = $('.section_26 .fade'),
		close = overlay.find('close_btn'),
		popupImg = $('.section_26 .slide_modal');

	a.on('click', function(){
		var id = $(this).data().id;

		//console.log(count);
		var img = document.createElement("img");

		popupImg.find('.img_block')[0].innerHTML = '';		

		$(img).attr('src', 'images/block_26/popup_images/' + id + '/1.jpg');
		
		popupImg.find('.img_block').append(img);

		$(img).on('load', function(){
			overlay.add(popupImg).fadeIn(200);
		})
		return false;

	});

	overlay.add(close).on('click', function(){
		overlay.add(popupImg).fadeOut(200);
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
			// videoBlock.fadeOut(200, function(){
			// 	videoBlock.remove();
			// });
		});
		$(media).on('ended', function(){
			media.play();
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
			'Станьте партнером<br> «Лагеря настоящих героев»',
			'Узнайте подробнее о партнерской программе'
		],
		btnText = [
			'Стать партнером',
			'Узнать'
		],
		bg = [
			'images/modal_bg_11.jpg',
			'images/modal_bg_2.jpg'
		];

	link.on('click', function(){
		var type = parseInt($(this).data().type) - 1;

		modal.find('.modal_title').html(title[type]);
		modal.find('.img_block').css({
			'background': 'url("' + bg[type] + '") no-repeat center',
			'background-size': 'cover'
		});

		modal.find('.button').html(btnText[type]);


		$('body').addClass('no_scroll');
		modal.fadeIn(200);
		overlay.fadeIn(200);
		return false;
	});
	overlay.add(close).on('click', function(){
		$('body').removeClass('no_scroll');
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


/* Увеличение BG */
$(function() {
	var bg = $(".animate_bg");

		bg.viewportChecker({
			classToAdd : 'active',
			callbackFunction: function(elem, action){
				// countAnimate(elem);
				console.log('TTTT')
			}
		})

});

/* Деактивация ссылок */
$(function(){
	if (document.body.clientWidth < 768) {
		var link = $('.section_32 a');
		link.on('click', function() {
			return false;
		});
	}
});

// Плавающий бургер

$(function(){
	if (document.body.clientWidth < 768) {
		var humb = $('.fixed_humb');
		var offset = $('header').height() + 20;

		$(window).scroll(function (){
		    var windowScroll = $(window).scrollTop();

		    if (windowScroll > offset) {
		        humb.addClass("show");
		    } else {
		        humb.removeClass("show");
		    }
		});

	}
});