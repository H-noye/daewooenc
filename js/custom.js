$(function () {
    const MNS = new Swiper('.main_news_slide', {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        pagination: {
            el: '.page',
            clickable: true,
        },
    })

    const MBS = new Swiper('.business_slide', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.page2',
            clickable: true,
        },

        speed: 1000,
        effect: 'coverflow',
    })
});