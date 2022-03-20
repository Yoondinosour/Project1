/* header */
const box1=document.querySelector('li.quick1');
box1.addEventListener('click',()=>{
    box1.classList.toggle('on')
})

const box2=document.querySelector('li.quick2');
box2.addEventListener('click',()=>{
    box2.classList.toggle('on')
})

/* top button */
const btt=$('#back_to_top');
$(window).scroll(function(){
    if($(window).scrollTop()>300){
        btt.addClass('visible');
    }else{
        btt.removeClass('visible');
    }
})

btt.click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:0},500);
})

/* slide */
$(document).ready(function(){
    /* news */
    $('.main_content3_board').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 2000,
    });
    /* sns */
    $('.sns_contents_wrap').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
    });
    /* board(alim) */
    $('.content3_board').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        speed: 1500,
        fade: true,
        cssEase: 'linear'
    });
});
