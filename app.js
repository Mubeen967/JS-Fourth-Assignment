var hour = 0;
var min = 0;
var sec = 0;
var milisec = 0;
var play = "stop"
var storeMili;
var storeSec;
var storeMin;
var storeHour;

var hourHeading = document.getElementById('hour');
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var milisecHeading = document.getElementById('milisec');

var hourHeading1 = document.getElementById('hour1');
var minHeading1 = document.getElementById('min1');
var secHeading1 = document.getElementById('sec1');
var milisecHeading1 = document.getElementById('milisec1');

var interval;
function timer() {
    milisec++;
    if(milisec < 10){
        milisecHeading.innerHTML = " 0" +milisec;
        milisecHeading1.innerHTML =" 0" + milisec;
    
    }
    else{
        milisecHeading.innerHTML = milisec;
        milisecHeading1.innerHTML = milisec;

    }
 
    if (milisec >= 100) {
        sec++;
        if (sec < 10) {
            secHeading.innerHTML = "0" + sec;
            secHeading1.innerHTML =  "0" +sec;
        }
        else {
            secHeading.innerHTML = +sec;
            secHeading1.innerHTML = sec;
        }
        milisec = 0;
    }
    else if (sec >= 60) {
        min++;
        sec = 0;
        if (min < 10) {
            minHeading.innerHTML = "0" + min;
            minHeading1.innerHTML = "0"+ min;
        }
        else {
            minHeading.innerHTML = min;
            minHeading1.innerHTML = min;
        }



    }
    else if (min >= 60) {
        min = 0;
        hour++;
        if(hour ===24){
            reset();
        }
        else if (hour < 10) {
            hourHeading.innerHTML = "0" + hour;
            hourHeading1.innerHTML =  "0" + hour;
        }
        else{
            hourHeading.innerHTML =  hour;
            hourHeading1.innerHTML = hour;
        }

    }


}
function start() {
    if (play === 'stop') {
        interval = setInterval(timer, 10);
        document.getElementById("runstatus").innerHTML = "Timing"
        document.getElementById("play").className = " btn fa fa-pause";
        play = 'start'
    }
    else {
        stop();
        document.getElementById("runstatus").innerHTML = "Paused"
        document.getElementById("play").className = "btn fa fa-play";
        play = 'stop'
    }
}
function stop() {
    clearInterval(interval)

}

function reset() {

    milisec = 00;
    sec = 00;
    min = 00;
    hour = 00;
    milisecHeading.innerHTML = "00";
    secHeading.innerHTML = "00";
    minHeading.innerHTML =  "00";
    hourHeading.innerHTML =  "00";

    milisecHeading1.innerHTML = "00";
    secHeading1.innerHTML = "00";
    minHeading1.innerHTML =  "00";
    hourHeading1.innerHTML =  "00";

    document.getElementById("play").className = " btn fa fa-play";
    document.getElementById("runstatus").innerHTML = "Ready"
    document.getElementById("showInterval").innerHTML = ""
    play = 'stop'
    stop();
}
function lap(){
    storeHour = `<div class="showIntervalTime  text-center "><span class="lap">Lap:    </span><h2>${hour}</h2>`;
    storeMin=`<h2>${min}</h2>`;
    storeSec=`<h2>${sec}</h2>`;
    storeMili=`<h2>${milisec}</h2>`;
    var previousVal = document.getElementById("showInterval").innerHTML;
    document.getElementById("showInterval").innerHTML=storeHour+storeMin+storeSec+storeMili+previousVal;
}
