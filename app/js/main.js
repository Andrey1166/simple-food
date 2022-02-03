$(function(){

    $('.hero__slider').slick({
        dots: true,
        arrows: true,
        

        prevArrow: '<button type="button" class="slick-prev"><svg class="prev-arrow"><use xlink:href="images/sprite.svg#prev-arrow-icon"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="next-arrow"><use xlink:href="images/sprite.svg#next-arrow-icon"></use></svg></button>'
    })

    $('.testimonials__slider').slick({
        dots: true
    })


    function funonload() {
        $('.slick-prev').toggleClass('slick-prev--active');
    } 
    window.onload = funonload;


    $(document).ready(function () {
        $(".slick-prev--active").focus();
    });


    var mixer = mixitup('.popular__content');
});


