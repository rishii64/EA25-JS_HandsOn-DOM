var a = document.getElementById('text');
var b = document.getElementsByTagName('h1');
var c = document.getElementsByClassName('box');

b[0].innerText = 'Hello World';

document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('.msg').innerText = 'Welcome to Elevation Academy';
})

document.querySelector('.msg').style.color='red';
document.querySelector('.msg').setAttribute('id', 'heading');

document.querySelector('.btn2').addEventListener('click', function(){
    document.querySelector('.cards').style.flexDirection = 'column';
})

function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = 'AM'
    
    if(hours>=12)
    {
        hours-=12;
        ampm = 'PM';
    }
    if(hours===0)
        hours = 12
    if(minutes<10)
        minutes='0'+minutes;
    if(seconds<10)
        seconds='0'+seconds;
    
    let hrss = document.getElementById('hrs');
    hrss.innerText = hours;
    let mins = document.getElementById('min');
    mins.innerText = minutes;
    let secs = document.getElementById('sec');
    secs.innerText = seconds;
    let ampms = document.getElementById('ampm');
    ampms.innerText = ampm;
}
setInterval(()=>{
    clock()
}, 1000)

