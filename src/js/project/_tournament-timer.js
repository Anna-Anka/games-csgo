export const tournamentTimer = () => {
    if (document.querySelector('.tournament-card__timer')) {

        const cards = document.querySelectorAll('.tournament-card')
        cards.forEach(card => {
            const date = card.querySelector('.tournament-card__timer')
            const dateValue = date.getAttribute('data-timer')
            const event = new Date(dateValue);

            console.log(event)

            const hoursVal = card.querySelector('.tournament-card__hours');
            const minutesVal = card.querySelector('.tournament-card__minutes');

            const timeCount = () => {
                let now = new Date();
                let leftUntil = event - now;

                let hours = Math.floor(leftUntil / 1000 / 60 / 60);
                let minutes = Math.floor(leftUntil / 1000 / 60) % 60;

                hoursVal.textContent = hours;
                minutesVal.textContent = minutes;
            };

            timeCount();
            setInterval(timeCount, 1000);
        })
    }
}