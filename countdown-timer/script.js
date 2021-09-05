const daysel= document.getElementById('days');
const hoursel= document.getElementById('hours');
const minutesel= document.getElementById('minutes');
const secondsel= document.getElementById('seconds');

const birthday = '26 Aug 2022';

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const seconds= (birthdayDate - currentDate)/1000;

    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600 ) % 24;
    const minutes= Math.floor(seconds/60) %60;
    const second= Math.floor(seconds) % 60;

    daysel.innerHTML=formatTime(days);
    hoursel.innerHTML=formatTime(hours);
    minutesel.innerHTML=formatTime(minutes);
    secondsel.innerHTML=formatTime(second);

}

function formatTime(time){
    return time < 10 ? `0${time}`: time;
}
countdown();
setInterval(countdown, 1000)

