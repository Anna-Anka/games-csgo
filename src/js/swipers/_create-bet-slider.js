import '../_libs'

export const createBetSwiper = () => {
    if (document.querySelector('.create-bet__swiper')) {

        const allSwipers = document.querySelectorAll('.create-bet__swiper');
        allSwipers.forEach(swiper => {
            const slider = new Swiper(swiper, {
                loop: true,
                speed: 800,
                slidesPerGroup: 1,
                spaceBetween: 10,

                pagination: {
                    el: swiper.querySelector('.create-bet__pagination'),
                    clickable: true,
                },

                navigation: {
                    nextEl: swiper.querySelector('.create-bet__button--next'),
                    prevEl: swiper.querySelector('.create-bet__button--prev'),
                },
            })
        })
    }
};
