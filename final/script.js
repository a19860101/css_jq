new WOW().init();

$(function(){
    $('#gotop').click(function(){
        $('html,body').animate({
            scrollTop:0
        })
    })
    $(window).scroll(function(e){
        let h = $(window).scrollTop();
        if(h > 600){
            $('nav').addClass('active');
        }else{
            $('nav').removeClass('active');
        }
        e.preventDefault();
    })
    $('nav').find('a').click(function(e){
        let t = $(this).data('target');
        let o = $(t).offset().top;
        console.log(t)
        $('html,body').animate({
            scrollTop: o
        })
        e.preventDefault();
    })
})