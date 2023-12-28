function updatetime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes =dateTime.getMinutes();
    var seconds =dateTime.getSeconds();
    var Am_or_pm= document.getElementById("Am-or-pm");  

    if ( hours>=12){
        Am_or_pm.innerHTML ='PM';

    }else {
        Am_or_pm.innerHTML = 'AM'
    }
    if (hours > 12){
        hours= hours-12;
    }

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('Minutes').innerHTML = minutes;
    document.getElementById('Seconds').innerHTML = seconds;
}

setInterval(updatetime,1000);