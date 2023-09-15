// Set the target date and time for the stopwatch start (replace with your desired date and time)
const startDate = new Date('2023-09-15T11:40:00').getTime();

function updateStopwatch() {
    const currentDate = new Date().getTime();
    const timeElapsed = currentDate - startDate;

    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update the stopwatch every second
setInterval(updateStopwatch, 1000);

// Initial update
updateStopwatch();
