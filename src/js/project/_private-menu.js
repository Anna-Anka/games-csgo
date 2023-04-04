export const privateMenu = () => {
    if (document.querySelector('.private-menu__control')) {
        const button = document.querySelector('.private-menu__control');
        const menu = document.querySelector('.private-menu');
        const swiper = document.querySelector('.private-menu__wrapper');

        button.addEventListener('click', () => {
            menu.classList.toggle('private-menu--open');
            button.classList.toggle('private-menu__control--open');

            if (button.classList.contains('private-menu__control--open')) {
                button.setAttribute('aria-expanded', 'true');
                button.setAttribute('aria-label', 'Закрыть меню');
                swiper.setAttribute('aria-hidden', 'true');
            } else {
                button.setAttribute('aria-expanded', 'false');
                button.setAttribute('aria-label', 'Открыть меню');
                swiper.setAttribute('aria-hidden', 'false')
            }
        })
    }
}