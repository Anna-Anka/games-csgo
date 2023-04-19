export const dropMenu = () => {
    if (document.querySelector('[data-drop-menu]')) {
        const buttons = document.querySelectorAll('[data-drop-menu]');
        buttons.forEach(button => {
            const value = button.getAttribute('data-drop-menu');
            const menu = document.getElementById(value);

            button.addEventListener('click', () => {
                menu.classList.toggle('drop-menu--active');

                if (menu.classList.contains('drop-menu--active')) {
                    button.setAttribute('aria-label', 'Закрыть меню');
                    button.setAttribute('aria-expanded', 'false');
                } else {
                    button.setAttribute('aria-label', 'Открыть меню');
                    button.setAttribute('aria-expanded', 'true');
                }
            })
        })
    }
}