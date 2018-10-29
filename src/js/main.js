(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu')
          .toggleClass('menu_state_open');
      });
      
      $('.menu__links-item').on('click', function() {
        $(this).closest('.menu')
          .removeClass('menu_state_open');
      });
    });




    $(".menu__links-search").on("click",function(){
        $(".menu__links-input").toggleClass("open");
    });


    $('.tab__content_item').hide();
    $('.tab__content_item:first').show();
    $('.tabs li:first').addClass('active');
    $('.tabs li').click(function(event) {
      $('.tabs li').removeClass('active');
      $(this).addClass('active');
      $('.tab__content_item').hide();
      let selectTab = $(this).find('a').attr("href");
      $(selectTab).fadeIn();

      $('.grid').masonry({
        itemSelector: '.grid__item',
        columnWidth: 390,
        isResizable: true,
        isAnimated: true,
        isFitWidth: true,
        animationOptions: { 
          queue: false, 
          duration: 500 
        },
      });
    })



    $('.grid').masonry({
      itemSelector: '.grid__item',
      columnWidth: 390,
      isResizable: true,
      isAnimated: true,
      isFitWidth: true,
      animationOptions: { 
	      queue: false, 
	      duration: 500 
	    },
    });
})(jQuery);