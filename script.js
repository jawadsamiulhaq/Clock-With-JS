let hours = document.getElementById("hours");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let date="";
setInterval((date)=>{
    date = new Date();
    let htime = date.getHours();
    let mtime = date.getMinutes();
    let stime = date.getSeconds();
    let hours_rotation = 30*htime + mtime/2;
    let minutes_rotation = 6*mtime;
    let seconds_rotation = 6*stime;
    hours.style.transform = `rotate(${hours_rotation}deg)`;
    minute.style.transform = `rotate(${minutes_rotation}deg)`;
    second.style.transform =  `rotate(${seconds_rotation}deg)`;
    },1000);
