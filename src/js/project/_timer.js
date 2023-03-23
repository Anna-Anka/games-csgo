export const timer = () => {

    if (document.querySelector('.contest__timer')) {
        const date = document.querySelector('.contest__timer')
        const dateValue = date.getAttribute('data-timer')
        const newYear = new Date(dateValue);

        const daysVal = document.querySelector('.contest__item--day .contest__number');
        const hoursVal = document.querySelector('.contest__item--hours .contest__number');
        const minutesVal = document.querySelector('.contest__item--minutes .contest__number');

        const daysText = document.querySelector('.contest__item--day .contest__name');
        const hoursText = document.querySelector('.contest__item--hours .contest__name');
        const minutesText = document.querySelector('.contest__item--minutes .contest__name');

        function declOfNum(number, titles) {
            let cases = [2, 0, 1, 1, 1, 2];
            return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
        }

        const timeCount = () => {
            let now = new Date();
            let leftUntil = newYear - now;

            let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
            let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
            let minutes = Math.floor(leftUntil / 1000 / 60) % 60;

            daysVal.textContent = days;
            hoursVal.textContent = hours;
            minutesVal.textContent = minutes;

            daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
            hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
            minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        };

        timeCount();
        setInterval(timeCount, 1000);
    }
}