export const claimInput = () => {
    if (document.querySelector('.management-form__subtitle')) {
        const button = document.querySelector('.management-form__subtitle')
        const input = document.querySelector('.claim-page__file')

        button.addEventListener('click', () => {
            input.classList.add('claim-page__file--active')
        })
    }
}