const ChangeDate = new Date("2024-09-11 00:00:00");

function updateCountdown() {
  const date = new Date();
  const TimeDate = ChangeDate - date;

  const days = Math.floor(TimeDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (TimeDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((TimeDate % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((TimeDate % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);
