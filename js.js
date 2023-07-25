document.querySelector('.header__burger').addEventListener('click', () =>{
    document.querySelector('.header__burger').classList.toggle('active')
    document.querySelector('.header__menu').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
})


$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        // dots: true,
        // // slidesToShow: 3,
        // slidesToScroll: 3,
        speed: 500,
        // easing: 'ease',
        infinite: false,
        draggable: false,
        touchTreshold: 10,
        waitForAnimate: false,
        centerMode: true,
        // initialSlide: 2,
        variableWidth: true,
        // rows: 2,
        // responsive: 
        prevArrow: '<img src="img/svg/left.svg" alt="" class="slick-prev">',
        nextArrow: '<img src="img/svg/left.svg" alt=""  class="slick-next">',
    });
    //добавляет бедый фон при клике
    $('#all').addClass('sss')
    if ('.list:clicked') {
        $('.list').click(function(){

            $('.list').removeClass('sss')
            $(this).addClass('sss')

        })


        }
    //Не дает отфильтровать слайдер
    var filtered = false;
    //Фильтрует слайдер
    function returning(className) {
        $('.slider').slick('slickUnfilter', + className);
    }
    //Сбрасывает весь слайдер или возвращает к началу
    function beginning(){
        $('.slick-track').css({
            'transform': 'translate3d(-15px, 0, 0)'
        })
        $('.slider').slick('slickGoTo')

    }
    $("#all").click(function(){
        $('.slider').slick('slickUnfilter')
        filtered = false;
        beginning()
    })
    $('#fast-food').click(function(){
        returning('.fast-food')
        $('.slider').slick('slickFilter', '.fast-food')
        filtered = true;
        beginning()
    })
    $('#meat').click(function(){
        returning('.meat')
        $('.slider').slick('slickFilter', '.meat')
        filtered = true;
        beginning()
    })
    $('#salad').click(function(){
        returning('.meat')
        $('.slider').slick('slickFilter', '.salad')
        filtered = true;
        beginning()
    })
    $('#soup').click(function(){
        returning('.soup')
        $('.slider').slick('slickFilter', '.soup')
        filtered = true;
        beginning()
    })
    $('#drinks').click(function(){
        returning('.drinks')
        $('.slider').slick('slickFilter', '.drinks')
        filtered = true;
        beginning()
    })


    let item = document.querySelectorAll(".box__item")
    for (const elem of item) {
        elem.addEventListener("click", function() {
        this.classList.toggle("actived")
    });
    }
    

    

})
