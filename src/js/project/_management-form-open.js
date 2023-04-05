import { disableScroll } from "../templates/disable-scroll";
import { enableScroll } from "../templates/enable-scroll";

export const openManagementform = () => {
    if (document.querySelector('.management-form__form') && document.querySelector('.management-form__open')) {
        const button = document.querySelector('.management-form__open');
        const management = document.querySelector('.management-form');

        const checkClass = () => {
            if (management.classList.contains('management-form--active')) {
                button.setAttribute('aria-expanded', 'true');
                button.setAttribute('aria-label', 'Закрыть фильтр');
                disableScroll();

            } else {
                button.setAttribute('aria-expanded', 'false');
                button.setAttribute('aria-label', 'Открыть фильтр');
                enableScroll();
            }
        }

        button.addEventListener('click', () => {
            management.classList.toggle('management-form--active');
            overlay.classList.toggle('overlay--active');
            checkClass();
        })
    }
}