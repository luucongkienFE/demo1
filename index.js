$ (document).ready(function(){
    $(window).scroll (function(){
        if($(this).scrollTop()){
            $('nav').addClass('sticky');
            $('nav').removeClass('navlink');
        }
        else{
            $('nav').removeClass('sticky');
        }
    });
});
