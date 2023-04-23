export const openSquare = () => {
    if (document.querySelector('.watch-bet__square')) {
        const squares = document.querySelectorAll('.watch-bet__square')
        const parrentSquares = document.querySelector('.watch-bet__squares')

        squares.forEach(square => {
            // const clickWindow = (event) => {
            //     if (!document.querySelector('.watch-bet__square--active').contains(event.target)) {
            //         square.classList.remove('watch-bet__square--active');
            //         parrentSquares.classList.remove('watch-bet__squares--active');
            //         window.removeEventListener('click', clickWindow);
            //     };
            // };
            
            square.addEventListener('click', () => {
                square.classList.toggle('watch-bet__square--active');
                parrentSquares.classList.toggle('watch-bet__squares--active');
                // window.addEventListener('click', clickWindow);

                // if (square.classList.contains('watch-bet__square--active')) {
                //     square.setAttribute('aria-expanded', 'true');
                //     square.setAttribute('aria-label', 'Скрыть детали');
                // } else {
                //     square.setAttribute('aria-expanded', 'false');
                //     square.setAttribute('aria-label', 'Открыть детали');
                // };
            });
        });
    };
};