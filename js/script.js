const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    
    // get the actual time for the seconds
    const seconds = now.getSeconds();
    // set the seconds to the coresponding degrees
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // change the rotation to the curent degrees or time
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((min / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
