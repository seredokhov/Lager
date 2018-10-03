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

	if (document.body.clientWidth > 768) {	
		$(media).on('canplay', function(){
			videoBlock.fadeIn(200);
			media.play();
		});
		

		$(media).on('abort error', function(){			
			var img = document.createElement('img');
			$(img).attr('src', 'images/block_6/bg.jpg');
			$('.section_6').append($(img));
			media.remove();
		});
		$(media).on('ended', function(){
			media.play();
		});
	} else {
		var img = document.createElement('img');
		$(img).attr('src', 'images/block_6/bg.jpg');
		$('.section_6').append($(img));
		media.remove();
	}
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
		

		$(media).on('abort error', function(){			
			videoBlock.fadeOut(200, function(){
				videoBlock.remove();
			});
		});
		$(media).on('ended', function(){
			media.play();
		});
	} else {
		media.remove();
	}
});

// Модальная форма
(function(){
	var link = $('.modal_link'),
		modal = $('.modal_form'),
		overlay = $('.modal_overlay'),
		close = $('.modal_form .close'),
		agree = $('#agree'),
		btn = modal.find('.button'),
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

		btn.attr('disabled', 'disabled');

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
	});
	// agree.on('change', function() {		
	// 	if( $(this).prop('checked') ) {
	// 		btn.removeAttr('disabled');
	// 	} else {
	// 		btn.attr('disabled', 'disabled');
	// 	}
	// });
}());

// Активация форм
$(function() {
	var agree = $('.agree_checkbox'),
		btn = agree.parent().parent().parent().find('.button');

	agree.on('change', function() {		
		if( $(this).prop('checked') ) {
			btn.removeAttr('disabled');
		} else {
			btn.attr('disabled', 'disabled');
		}
	});
});

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


// ПОЛЗУНОК

$( function() {

	var money = 70;
	var fill = 50;
	var mBreakpoint = [50,70,90,110,130,150];
	var fBreakpoint = [50,75,100];
	var dot = $('.range_dots').find('span');

	// Инициализация

	$( "#range" ).slider({
		range: "min",
		value: 70,
		min: 50,
		max: 150,
		slide: function(event, ui){
			money = ui.value;
			$( "#amount" ).val( calc(ui.value, fill) );
			draw($(".money .range_dots"), mBreakpoint, money);

		},
		change: function(event, ui) {
			if(mBreakpoint.indexOf( money ) == -1) {
				money = getFloor(mBreakpoint, ui.value);
				$( "#range" ).slider( "value", money );
				$( "#amount" ).val( calc(money, fill) );
			}
		}
	});

	$( "#range-2" ).slider({
		range: "min",
		value: 50,
		min: 50,
		max: 100,
		slide: function(event, ui){
			fill = ui.value;
			$( "#amount" ).val( calc(money, ui.value) );
			draw($(".fill .range_dots"), fBreakpoint, fill);
		},
		change: function(event, ui) {
			if(fBreakpoint.indexOf( fill ) == -1) {
				fill = getFloor(fBreakpoint, ui.value);
				$( "#range-2" ).slider( "value", fill );
				$( "#amount" ).val( calc(money, fill) );
			}
		}
	});



	// События
	dot.on('click', function() {
		var step = $(this).index(),
			steps = $(this).parent().children().length;		

		if ( $(this).parent().parent().hasClass('money') ) {
			money = mBreakpoint[step];
			$( "#range" ).slider( "value", money );
			$( "#amount" ).val( calc(money, fill) );
			draw($(".money .range_dots"), mBreakpoint, money);

		} else if ( $(this).parent().parent().hasClass('fill') ) {
			fill = fBreakpoint[step];
			$( "#range-2" ).slider( "value", fill );
			$( "#amount" ).val( calc(money, fill) );
			draw($(".fill .range_dots"), fBreakpoint, fill);
		}
	});


	// Функции
	function calc(money, fill) {


		var count = Math.ceil( (money / 10) / (9.58 / 7 * fill * 0.01) );

		switch( count ) {
			case 4: count += ' смены'; break;
			case 22: count += ' смены'; break;
			default: count += ' смен'; break;
		}


		return count;
	}


	function getFloor(arr, val) {
		var changed;
		for( var i = 0; i < arr.length; i++ ) {
			if(arr[i] <= val) {
				changed = arr[i];
			}
		}
		if (changed) {
			return changed;
		}
	}

	function draw(elem, arr, val) {
		var dots = elem.children();
		for( var i = 0; i < arr.length; i++) {
			if( arr[i] <= val ) {
				console.log(arr[i]);

				dots.eq(i).addClass('passed');
			} else {
				dots.eq(i).removeClass('passed');
			}
		}
	}

	// По умолчанию
	$( "#amount" ).val( calc( money , fill) );
	draw($(".money .range_dots"), mBreakpoint, money);
	draw($(".fill .range_dots"), fBreakpoint, fill);


	

});