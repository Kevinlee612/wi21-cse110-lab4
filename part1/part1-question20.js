let d, time;

var delay = setInterval(() => {
    d = new Date();
    time = d.toLocaleTimeString();
    console.log(time);
}, 1000);