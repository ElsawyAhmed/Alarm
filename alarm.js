var alarm_time = 0;  // global time variable that the user sets to get a message afetr this time 
var hours = 0, minutes = 0, seconds = 0;  // the time period you want to set time for (input)

function clock() { 
    // this method gets and shows the current time on the window
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    document.getElementById("clock").innerHTML = h + " : " + m + " : " + s;
}
function setTime(h,m,s) {
    // this method gets the time value required and sets it to the alarm time 
    var setminutes,sethours,setseconds;
    sethours = h;
    setminutes = m;
    setseconds = s;
    if (sethours > 0) {
        alarm_time += sethours;
    }
    if (setminutes > 0) {
        alarm_time += setminutes;
    }
    if (setseconds > 0) {
        alarm_time += setseconds;
    }  
}

function getAndShow() {
    this.hours = Number(document.getElementById("h").value) * 60 * 60 * 1000;
    this.minutes = Number(document.getElementById("m").value) * 60 * 1000;
    this.seconds = Number(document.getElementById("s").value) * 1000;
    setTime(hours, minutes, seconds);
    setTimeout(showAlarm, alarm_time);
    console.log(alarm_time);
   // alarm_time = 0;
}
function showAlarm() {
    var confirmation = confirm("Hey it is time for the reamainder have you got ? y ,Remind me after 1/2 Minute ?");
    console.log(confirmation);
    if (confirmation) {
        alarm_time = 0;
    }
    else

        setTimeout(showAlarm, 30000);
}

setInterval(clock, 1000);