
posicionarMenu();

$(window).scroll(function() {    
    posicionarMenu();
});

function posicionarMenu() {
    var altura_del_header = $('.home').outerHeight(true);
    var altura_del_menu = $('.menu').outerHeight(true);

    if ($(window).scrollTop() >= 200){
        $('.menu').addClass('fixed');
        
        $('.logoM').removeClass('desaparecer');
        $('nav ul').addClass(' fuenteMenu');
       
    } else {
        $('.menu').removeClass('fixed');
        $('.wrapper').css('margin-top', '0');
        $('.logoM').addClass('desaparecer');
        $('nav ul').removeClass('fuenteMenu');
        
    }
}