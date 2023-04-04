import './../_libs'

export const privateMenuSwiper = () => {
    if (document.querySelector('.private-menu__swiper')) {
        return new Swiper('.private-menu__swiper', {
            loop: true, 
            speed: 800,
            slidesPerGroup: 1,
            spaceBetween: 10,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
};
