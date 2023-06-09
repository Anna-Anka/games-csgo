import { disableScroll } from '../templates/disable-scroll';
import { enableScroll } from '../templates/enable-scroll';

export const burger = () => {
    const burger = document?.querySelector('[data-burger]');
    const menu = document?.querySelector('[data-menu]');
    const menuLinks = document?.querySelectorAll('[data-menu-link]');
    const overlay = document?.querySelector('[data-menu-overlay]');

    const checkClass = () => {
        if (burger?.classList.contains('burger--active')) {
            burger?.setAttribute('aria-expanded', 'true');
            burger?.setAttribute('aria-label', 'закрыть меню');
            disableScroll();
        } else {
            burger?.setAttribute('aria-expanded', 'false');
            burger?.setAttribute('aria-label', 'открыть меню');
            enableScroll();
        }
    }

    burger?.addEventListener('click', (e) => {
        burger?.classList.toggle('burger--active');
        menu?.classList.toggle('header__wrapper--active');
        overlay?.classList.toggle('overlay--active');
        checkClass();
    });

    overlay?.addEventListener('click', () => {
        burger.classList.remove('burger--active');
        menu.classList.remove('header__wrapper--active');
        overlay.classList.remove('overlay--active');
        checkClass();
    });

    menuLinks?.forEach(el => {
        el.addEventListener('click', () => {
            burger?.classList.remove('burger--active');
            menu.classList.remove('header__wrapper--active');
            overlay.classList.remove('overlay--active');
            enableScroll();
        });
    });
}

