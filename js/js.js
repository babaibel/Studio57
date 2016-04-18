$(document).ready(function() {

	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: true,
	  centerMode: true,
	  focusOnSelect: true
	});

	$('.problems-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: false,
	  prevArrow: '<button type="button" class="slick-prev"></button>',
	  nextArrow: '<button type="button" class="slick-next"></button>'
	});

    $('.header-phone__btn').click(function () {
    	$(this).closest('.header-phone').toggleClass('active');
    	$(this).parent('.header-phone__topline').next('.header-phone__droplist').slideToggle(200);
	    return false;
	});

	$('.js-portfolio-slider').each(function (idx, item) {
	    var carouselId = "carousel" + idx;
	    this.id = carouselId;
	    $(this).slick({
	        slide: "#" + carouselId +" .portfolio-slider__option",
	        appendArrows: "#" + carouselId + " .portfolio-slider__arrows-wrap",
	        slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			variableWidth: true,
			centerMode: true,
			prevArrow: '<button type="button" class="slick-prev"></button>',
			nextArrow: '<button type="button" class="slick-next"></button>'
	    });
	});

    $('.js-popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		showCloseBtn: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	var countChecked = function() {
	  var 	n = $( "input[type='radio']:checked" ).length,
	  		thisID = $("input[type='radio']:checked"),
	  		v = $("input[type='radio']:checked").val();

	  thisID.closest("section").next("section").slideDown();
	};
	
	$( ".choice-design-panel__item, .choice-area-panel__item" ).on( "click", countChecked );

	$(".js-only-digits").mask("+999 99 999 99 99");

});

$(function() {

	$('.js-form').each(function(){
		// Объявляем переменные (форма и кнопка отправки)
		var form = $(this),
		    btn = form.find('.blue-btn');

		// Добавляем каждому проверяемому полю, указание что поле пустое
		form.find('.rfield').addClass('empty_field');

		// Функция проверки полей формы
		function checkInput(){
			form.find('.rfield').each(function(){
				if($(this).val() != ''){
					  // Если поле не пустое удаляем класс-указание
					$(this).removeClass('empty_field');
				} else {
					  // Если поле пустое добавляем класс-указание
					$(this).addClass('empty_field');
				}
			});
		}

		// Функция подсветки незаполненных полей
		function lightEmpty(){
			form.find('.empty_field').addClass('error');
			// Через полсекунды удаляем подсветку
			setTimeout(function(){
			form.find('.empty_field').removeClass('error');
			},500);
		}

		// Проверка в режиме реального времени
		setInterval(function(){
			// Запускаем функцию проверки полей на заполненность
			checkInput();
			// Считаем к-во незаполненных полей
			var sizeEmpty = form.find('.empty_field').size();
			// Вешаем условие-тригер на кнопку отправки формы
			if(sizeEmpty > 0){
			if(btn.hasClass('disabled')){
			  return false
			} else {
				btn.addClass('disabled')
			}
			} else {
				btn.removeClass('disabled')
			}
		},500);

		// Событие клика по кнопке отправить
		btn.click(function(){
		  if($(this).hasClass('disabled')){
		    // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
			lightEmpty();
			return false
		  } else {
				form.submit(function (){

					var data = form.serialize();

					$.ajax({ 
						// инициaлизируeм ajax зaпрoс
						type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
						url: 'mail.php', // путь дo oбрaбoтчикa, у нaс oн лeжит в тoй жe пaпкe
						data: data, // дaнныe для oтпрaвки
						dataType: "json",
						error: function(xhr, status, error) {
							alert(xhr.responseText + '|\n' + status + '|\n' +error);
						},
						success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
							$.magnificPopup.open({
								items: {
									src: '#callback-success'
								},
								type: 'inline',
								preloader: false,
								focus: '#username',
								showCloseBtn: false
							}, 0);
							setTimeout(function(){
								$.magnificPopup.close();
								form[0].reset();
							}, 5000);
							form[0].reset();
						}
					});
					return false;
				});
			}
		});
	});
});

$(function() {

	$('.js-design-form').each(function(){
		// Объявляем переменные (форма и кнопка отправки)
		var form2 = $(this),
		    btn2 = form2.find('.blue-btn');

		// Добавляем каждому проверяемому полю, указание что поле пустое
		form2.find('.rfield').addClass('empty_field');

		// Функция проверки полей формы
		function checkInput(){
			form2.find('.rfield').each(function(){
				if($(this).val() != ''){
					  // Если поле не пустое удаляем класс-указание
					$(this).removeClass('empty_field');
				} else {
					  // Если поле пустое добавляем класс-указание
					$(this).addClass('empty_field');
				}
			});
		}

		// Функция подсветки незаполненных полей
		function lightEmpty(){
			form2.find('.empty_field').addClass('error');
			// Через полсекунды удаляем подсветку
			setTimeout(function(){
			form2.find('.empty_field').removeClass('error');
			},500);
		}

		// Проверка в режиме реального времени
		setInterval(function(){
			// Запускаем функцию проверки полей на заполненность
			checkInput();
			// Считаем к-во незаполненных полей
			var sizeEmpty = form2.find('.empty_field').size();
			// Вешаем условие-тригер на кнопку отправки формы
			if(sizeEmpty > 0){
			if(btn2.hasClass('disabled')){
			  return false
			} else {
				btn2.addClass('disabled')
			}
			} else {
				btn2.removeClass('disabled')
			}
		},500);

		// Событие клика по кнопке отправить
		btn2.click(function(){
		  if($(this).hasClass('disabled')){
		    // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
			lightEmpty();
		    return false
		  } else {
		    	form2.submit(function (){

			        var data = form2.serialize();

			        $.ajax({ 
			        	// инициaлизируeм ajax зaпрoс
					   type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
					   url: 'mail2.php', // путь дo oбрaбoтчикa, у нaс oн лeжит в тoй жe пaпкe
					   data: data, // дaнныe для oтпрaвки
					   dataType: "json",
					   error: function(xhr, status, error) {
						    alert(xhr.responseText + '|\n' + status + '|\n' +error);
						},
				       success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
				       		$.magnificPopup.open({
								items: {
									src: '#callback-success'
								},
								type: 'inline',
								preloader: false,
								focus: '#username',
								showCloseBtn: false
							}, 0);
							setTimeout(function(){
								$.magnificPopup.close();
								form2[0].reset();
							}, 5000);
				       		form2[0].reset();
				       		$(".choice-design__layout.step--2, .choice-design__layout.step--3").slideUp();
				        }
					});
			        return false;
			    });
		  	}
		});
	});
});