(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu')
          .toggleClass('menu_state_open');
      });
    });


    $(".menu__links-search").on("click",function(){
        $(".menu__links-input").toggleClass("open");
    });


    $('.grid').masonry({
      itemSelector: '.grid__item',
      columnWidth: 390,
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

    $('.menu__links-item').click(function() {
      $(this).siblings().removeClass('active');
      $(this).toggleClass('active');
    })

    $('.submenu__item').click(function() {
      $(this).siblings().removeClass('active');
      $(this).toggleClass('active');
    })

    const scrollBtn = $('[data-scroll]');  
    function onClick(e) {
      e.preventDefault(); 
      const target = $(this).attr('data-scroll');  
      const dist = $(target).offset().top; 
      $('html, body').animate({ scrollTop: dist }, 1000, 'swing'); 
    }
    scrollBtn.on('click', onClick); 

    var btn_top = $('.btn-top');

    function scrollUp () {
      var top = $(this).scrollTop();
      var windowHeight = $(window).height();
      if (top > windowHeight) {
        btn_top.fadeIn(500);
      }
      else {
        btn_top.fadeOut(500);
      }
    }

    scrollUp();

    $(document).on('scroll', scrollUp);

})(jQuery);


 