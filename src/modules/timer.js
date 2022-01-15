const timer = (deadline) => {
  const timerDays = document.querySelector('.count_1 span');
  const timerHours = document.querySelector('.count_2 span');
  const timerMinutes = document.querySelector('.count_3 span');
  const timerSeconds = document.querySelector('.count_4 span');

  

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, days, hours, minutes, seconds };
  };

  const zero = function (item) {
    return (item = ('0' + item).slice(-2));
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerDays.textContent = `${zero(getTime.days)}`;
    timerHours.textContent = `${zero(getTime.hours)}`;
    timerMinutes.textContent = `${zero(getTime.minutes)}`;
    timerSeconds.textContent = `${zero(getTime.seconds)}`;

    if (getTime.timeRemaining < 0) {
      timerDays.textContent = '00';
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
  };
  setInterval(updateClock, 1000);
};

export default timer;
