$(function(){

    $('.hero__slider').slick({
        dots: true,
        arrows: true,

        

        

        prevArrow: '<button type="button" class="slick-prev"><svg class="prev-arrow"><use xlink:href="images/sprite.svg#prev-arrow-icon"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="next-arrow"><use xlink:href="images/sprite.svg#next-arrow-icon"></use></svg></button>',

        responsive: [
          // {
          //   breakpoint: 560,
          //   settings: 'unslick'
          // }
        ]
    });

    $('.testimonials__slider').slick({
        dots: true,
        arrows: true,

        prevArrow: '<button type="button" class="slick-prev"><svg class="prev-arrow"><use xlink:href="images/sprite.svg#prev-arrow-icon"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="next-arrow"><use xlink:href="images/sprite.svg#next-arrow-icon"></use></svg></button>',

        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: true
            }
          }
        ]
    });



    $('.restaurant__content').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 5000,
          settings: 'unslick'
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false
          }
        }
      ]
    });




    function funonload() {
        $('.slick-prev').toggleClass('slick-prev--active');
    } 
    window.onload = funonload;


    $(document).ready(function () {
        $(".slick-prev--active").focus();
    });


    var mixer = mixitup('.popular__content');
});



document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileMenu = document.querySelector('.menu__list'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu__list--active'); //когда меню открыто
    if (mobileMenu.classList.contains('menu__list--active'))  { //Проверяем, есть ли у меню активный класс
      burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    }
    else { //Когда нету активного класса у меню
      burger.classList.remove('burger--active'); //Возвращает в исходное состояние
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
  });
});

// document.addEventListener('click', function (e) {
//   if (e.target !== burger && e.target !== mobileMenu) {
//     burger.classList.remove('burger--active');
//     mobileMenu.classList.remove('menu__list--active');
//     bodyLock.classList.remove('lock');
//   }
// });




