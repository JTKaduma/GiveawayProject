const $ = (id) => {
    return document.getElementById(id);
    //jQuery-like function that selects the elements its id and returns to avoid repeition
}

const $days = $('tDays');
const $hours = $('tHours');
const $minutes = $('tMinutes');
const $seconds = $('tSeconds');
const dueDate = new Date();

dueDate.setDate(dueDate.getDate() + 10);
dueDate.setHours(11, 30, 0);
const dateformat = { weekday: 'long',   month: 'long', day: 'numeric', year: 'numeric' };
document.querySelector(".presentDate").textContent = dueDate.toLocaleDateString('en-US', dateformat);

const updateTimer = () => {
    let totalInSec = Math.floor(
        (dueDate.valueOf() - new Date().valueOf()) / 1000
    );

    if (totalInSec < 0) {
        totalInSec = 0;
        //doesn't let the value to be negative
    }

    const seconds = Math.floor(
        totalInSec % 60
    );
    const minutes = Math.floor(
        (totalInSec / 60) % 60
    );
    const hours = Math.floor(
        (totalInSec / 60 / 60) % 24
    );
    const days = Math.floor(
        totalInSec / 60 / 60 / 24
    );
    const format = (num) => {
        return `${num}`.padStart(2, '0'); //used to ensure that there's a consistent two-digit display for each unit of time
    };

    $seconds.textContent = format(seconds);
    $minutes.textContent = format(minutes);
    $hours.textContent = format(hours);
    $days.textContent = format(days);
    //updates the text content of the variables with the format function to give the formatted values
};

setInterval(updateTimer, 1000);//updates the timer every 1000ms or 1s so that it displays the remaining time in real-time