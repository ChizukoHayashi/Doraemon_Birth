const doraemon = document.createElement('p');
body = document.querySelector('body');

let timer;
body.appendChild(doraemon);

const diff = moment('2112-09-03 00:00').diff(moment());
const duration = moment.duration(diff);

const countDown = () => {
    const years = Math.floor(duration.years());
    const months = Math.floor(duration.months());
    const days =Math.floor(duration.days());
    const hours = Math.floor(duration.hours());
    const minutes = Math.floor(duration.minutes());
    const seconds = Math.floor(duration.seconds());
    doraemon.textContent = `ドラえもんが生まれるまで後${years}年${months}月${days}日${hours}時${minutes}分${seconds}秒`;
};
countDown(),timer = setInterval('countDown()',1000);