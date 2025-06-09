
// gnb 메뉴

function lnbMenu(){
	$('.lnb-menu li').each(function(){
		if($(this).find('ul').length > 0){
			$(this).addClass('has-menu');
			if($(this).hasClass('on')){
				$(this).addClass('menu-on')
				$(this).children('ul').show();
			}
		}
	});
	
	$(document).on('click', '.lnb-menu  li > a', function(){

		let $parent = $(this).parent();
		let $menu = $(this).next('ul');
		let $siblings = $(this).parent().siblings();

		if($parent.hasClass('on')){
			$parent.removeClass('on');
		}else{
			$siblings.removeClass('on');
			$parent.addClass('on');
		}

		// if($parent.hasClass('has-menu')){
		// 	$(this).next('ul').find('li:first-child').addClass('on');
		// }

		$siblings.removeClass('on');
		$siblings.find('ul').slideUp(220);
		$siblings.find('li').removeClass('on');
		$siblings.find('li').removeClass('on');
		
		if($parent.hasClass('has-menu')){
			if($menu.is(':hidden')){
				$parent.addClass('on');
				$menu.slideDown(220);
			}else{
				$parent.removeClass('on');
				$menu.slideUp(220);
			}
		}
	})
}

function tabEvt(){
  let tabs = [];
  $('[data-tab-id]').on('click', function(){
    let tabid = $(this).data('tab-id');
    tabs = [];
    tabs.push(tabid);

    $(this).parents('li').addClass('on');
    $(this).parents('li').siblings().find('[data-tab-id]').each(function(){
      $(this).parents('li').removeClass('on');
      tabs.push($(this).data('tab-id'));
    });

    tabs.forEach(function(v){
      $('#'+v).hide();
    });
    $('#'+tabid).show();
  })
}


//loading
function loading(){
  const loadingHtml = `<div class="loading-bar">
		<div class="three-bounce">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </div>`

  const $loading = $(loadingHtml);  
  $('.wrap').append($loading);  
  $('body, html').css('overflow', 'hidden');
}


$(function(){
  lnbMenu();
	tabEvt();
});