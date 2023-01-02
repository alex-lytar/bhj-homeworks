const defaultTime = document.getElementById('timer').textContent;
let initTime = parseInt(defaultTime, 10);
const timeHours = prompt('Set hours', 0);
const timeMinutes = prompt('Set minutes', 0);
const timeSeconds = prompt('Set seconds', initTime);

addZero = (digit) => (digit < 10) ? '0' + digit : digit;

clockFormat = (hh, mm, ss) => addZero(hh) + ':' + addZero(mm) + ':' + addZero(ss);

counter = () => {
    let textArr = timeSet.split(':');
    let digitArr = [parseInt(textArr[0], 10), parseInt(textArr[1], 10), parseInt(textArr[2], 10)];
    if (digitArr[2] <= 0) {
        digitArr[1] -= 1;
        digitArr[2] = 59;
        if (digitArr[1] < 0) {
            digitArr[0] -= 1;
            digitArr[1] = 59;
            digitArr[2] = 59
        }
        if (digitArr[0] < 0) {
            clearInterval;
            location = 'https://drive.google.com/file/d/1oV3cGF4trqtjL8r6c6F7IyWdWRx0j-2v/view?usp=sharing';
            return alert('Вы победили в конкурсе!');
        }
    }
    digitArr[2] -=1;
    timeSet = clockFormat(digitArr[0], digitArr[1], digitArr[2]);
    document.getElementById('timer').textContent = timeSet;
    return timeSet;
}

let timeSet = clockFormat(timeHours, timeMinutes, timeSeconds);
document.getElementById('timer').textContent = timeSet;
setInterval(counter, 1000, timeSet);