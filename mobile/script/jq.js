/* jq */
$(function (){
    /* header_menu */
    const topmenu = $('.container'),
    menu = topmenu.find('.menu>a'),
    search = topmenu.find('.search>a'),
    searchBar = topmenu.find('.search_bar'),
    lnb = topmenu.find('.lnb'),
    closeMenu = topmenu.find('.btn_close>a');

    menu.click(function(){
        lnb.addClass('on');
    });
    closeMenu.click(function(){
        lnb.removeClass('on');
    });
    search.click(function(){
        searchBar.addClass('on');
    });
    closeMenu.click(function(){
        searchBar.removeClass('on');
    });

    /* header_lnb */
    const depth1 = topmenu.find('.depth_1 li'),
    depth2 = topmenu.find('.depth_2'),
    depth2_li = topmenu.find('.depth_2>li'),
    depth3 = topmenu.find('.depth_2 li>.depth_3');

    depth1.click(function(){
        depth1.removeClass('active');
        $(this).addClass('active');
        depth2.removeClass('active');
        $(this).find(depth2).addClass('active');
    });
    depth2_li.click(function(){
        $(this).toggleClass('active2');
        $(this).find(depth3).toggleClass('active3');
    });

    /* slick(news) */
    $('.news_board').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
      });

})


