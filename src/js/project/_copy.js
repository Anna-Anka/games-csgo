export const copy = () => {
    if (document.querySelector('.copy')) {
        const copyAll = document.querySelectorAll('.copy');

        copyAll.forEach(copy => {
            const button = copy.querySelector('.copy__button');
            const meaning = copy.querySelector('.copy__meaning');

            button.addEventListener('click', () => {
                meaning.select();
                document.execCommand('copy');
            })
        })
    }
}