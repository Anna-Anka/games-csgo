export const closePopup = () => {
    if (document.querySelector('.popup')) {
        const popups = document.querySelectorAll('.popup')
        popups.forEach(popup => {
            const buttonsClose = popup.querySelectorAll('.popup__close')
            buttonsClose.forEach(buttonClose => {
                buttonClose.addEventListener('click', () => {
                    popup.classList.add('popup--hidden')
                })
            })
        })
    }
}