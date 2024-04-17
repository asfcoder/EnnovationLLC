$(document).ready(function(){

    // wow initiation
    new WOW().init();

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    // Close menu when a link is clicked
    $('.nav-link').click(function(){
        $('.navbar-collapse').slideUp(400);
    });

    // navbar bg change on scroll
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
        } else {
            $('.navbar').removeClass('cng-navbar');
        }
    });

    // Learn More Button
    $('#learn-more-btn').click(function(){
        var pdfFilePath = 'Ennovation Company Profile.pdf';
        window.open(pdfFilePath, '_blank');
    });
});