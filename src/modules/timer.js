const timer = (deadline) => {
    const timerDays = document.querySelectorAll(".count.count_1 > span");
    const timerHours = document.querySelectorAll(".count.count_2 > span");
    const timerMinutes = document.querySelectorAll(".count.count_3 > span");
    const timerSeconds = document.querySelectorAll(".count.count_4 > span");

    let idTimeInterval;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 3600 / 24);
        let hours = Math.floor((timeRemaining / 3600) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const formateDate = (date) => {
        return date < 10 ? `0${date}` : date;
    };

    const updateClock = () => {
        let { timeRemaining, days, hours, minutes, seconds } =
            getTimeRemaining();

        timerDays.forEach((item) => (item.textContent = formateDate(days)));
        timerHours.forEach((item) => (item.textContent = formateDate(hours)));
        timerMinutes.forEach(
            (item) => (item.textContent = formateDate(minutes)),
        );
        timerSeconds.forEach(
            (item) => (item.textContent = formateDate(seconds)),
        );

        if (timeRemaining <= 0) {
            timerDays.forEach((item) => (item.textContent = "00"));
            timerHours.forEach((item) => (item.textContent = "00"));
            timerMinutes.forEach((item) => (item.textContent = "00"));
            timerSeconds.forEach((item) => (item.textContent = "00"));

            clearInterval(idTimeInterval);
        }
    };

    idTimeInterval = setInterval(updateClock, 1000);
};

export default timer;
