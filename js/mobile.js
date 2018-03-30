// (function($){var methods={buttons:0,init:function(options){var mpTemplate='<div class="mp__panel"><div class="mp__wr"><button class="mp__button mp__button-main"><span class="mp__line"></span></button></div></div><div class="mp__overlay"></div>';$('body').append(mpTemplate);if(options.navbar){$('.mp__button-main').on('click',function(){$(this).toggleClass('mp--on');$(options.navbar).toggleClass('mp--on');$(".mp__overlay").toggleClass('mp--on');return!1})}
// $(".mp__overlay").click(function(){$(this).removeClass('mp--on');$('.mp__button').removeClass('mp--on');$(options.navbar).removeClass('mp--on');return!1})},show:function(){$('.mp__panel').show()},hide:function(){$('.mp__panel').hide()},button:function(options){methods.buttons++;$('.mp__wr').append('<button class="mp__button mp__button-text '+'mp__button-'+methods.buttons+(options.center?' mp__button-text--center':'')+'">'+options.text+'</button>');if(options.navbar){$('.mp__button-'+methods.buttons).on('click',function(){$(this).toggleClass('.mp--on');$(options.navbar).toggleClass('mp--on');$(".mp__overlay").toggleClass('mp--on');return!1})}
// $(".mp__overlay").click(function(){$(options.navbar).removeClass('mp--on');return!1})}};$.mobilePanel=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments)}else{$.error('Метод с именем '+method+' не существует для $.chats')}}})(jQuery)

!function(n){var o={buttons:0,init:function(o){n("body").append('<div class="mp__panel"><div class="mp__wr"><button class="mp__button mp__button-main"><span class="mp__line"></span></button></div></div><div class="mp__overlay"></div>'),o.navbar&&n(".mp__button-main").on("click",function(){n(this).toggleClass("mp--on"),n(o.navbar).toggleClass("mp--on");var t=n(".mp--on");return n(this).hasClass("mp--on")?(console.log(n(this).hasClass("mp--on")),n(t).not(n(this)).not(n(o.navbar)).removeClass("mp--on")):(console.log(n(this).hasClass("mp--on")),n(".mp__overlay").addClass("mp--on")),n(".mp__overlay").toggleClass("mp--on"),!1}),n(".mp__overlay").click(function(){return n(this).removeClass("mp--on"),n(".mp__button").removeClass("mp--on"),n(o.navbar).removeClass("mp--on"),!1})},show:function(){n(".mp__panel").show()},hide:function(){n(".mp__panel").hide()},button:function(t){o.buttons++,n(".mp__wr").append('<button class="mp__button mp__button-text mp__button-'+o.buttons+(t.center?" mp__button-text--center":"")+'">'+t.text+"</button>"),t.navbar&&n(".mp__button-"+o.buttons).on("click",function(){n(this).toggleClass("mp--on"),n(t.navbar).toggleClass("mp--on");var o=n(".mp--on");return n(this).hasClass("mp--on")?(console.log(n(this).hasClass("mp--on")),n(o).not(n(this)).not(n(t.navbar)).removeClass("mp--on")):console.log(n(this).hasClass("mp--on")),n(".mp__overlay").toggleClass("mp--on"),!1}),n(".mp__overlay").click(function(){return n(t.navbar).removeClass("mp--on"),!1})}};n.mobilePanel=function(t){return o[t]?o[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void n.error("Метод с именем "+t+" не существует для $.chats"):o.init.apply(this,arguments)}}(jQuery);



$(document).ready(function() {

    $.mobilePanel({'navbar':'.tmenu'});

	if(/magazin/.test(document.location.pathname)){
		$.mobilePanel('button', {'text':'Каталог', 'navbar':'#menus' });
	}
	// $.mobilePanel('button', {'text':'Поиск', 'navbar':'.shop2-block.search-form .block-body' });
	//$.mobilePanel('button', {'text':'<a href="/magazin/cart">Корзина</span></a>', 'center': true });
	// $.mobilePanel('button', {'text':'Вход', 'center': true, 'navbar':'.shop2-block.login-form .block-body' });


});