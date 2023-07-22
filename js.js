document.querySelector('.header__burger').addEventListener('click', () =>{
    document.querySelector('.header__burger').classList.toggle('active')
    document.querySelector('.header__menu').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
})



$(document).ready(function(){
    $('.js__btn').remove()

    
    const cards = $('.itembox')
    const fastFood = $('.fast-food')
    const salad = $('.salad')
    const meat = $('.meat')
    const soup = $('.soup')
    const drinks = $('.drinks')
    
    // function reset(classs) {
        $('.list:first').click(function(){

            $('.itembox').detach()
            $('.image-slider__wrapper').append(cards)
            $('.image-slider').fadeIn(10)
            
            $('.swiper-wrapper').hide().show().css({
            'transform': 'translate3d(0px, 0px, 0px) ',
                'transition-duration': '0ms',
            })
    })
    $('#fast-food').click(function(){
        $('.itembox').remove()
        $('.image-slider__wrapper').append(fastFood)
        $('.image-slider').hide(10).fadeIn(10)
    

    })
    $('#soup').click(function(){
        $('.itembox').remove()
        $('.image-slider__wrapper').append(soup)
        $('.image-slider').hide(10).fadeIn(10)
    

    })
    
    $('#salad').click(function(){
        $('.itembox').remove()
        $('.image-slider__wrapper').append(salad)
        $('.image-slider').hide(10).fadeIn(10)
    

    })
    
    $('#meat').click(function(){
        $('.itembox').remove()
        $('.image-slider__wrapper').append(meat)
        $('.image-slider').hide(10).fadeIn(10)

    })
    $('#drinks').click(function(){
        $('.itembox').remove()
        $('.image-slider__wrapper').append(drinks)
        $('.image-slider').hide(10).fadeIn(10)

    })
    // const swiperdd2 = new Swiper('.image-sliderr',{

        // })
        const swiper = new Swiper('.image-slider', {
            // lazy: {
        //     loadPrevNext: true,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,  
        },
        speed: 800,
        slidesPerView: 'auto',
        spaceBetween: 10,
    })
    
    const myswiper = new Swiper('.my-slider')
})