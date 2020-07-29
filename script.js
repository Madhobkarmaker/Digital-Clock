function clock(){
    var hours = document.getElementById("hour");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var amPm = document.getElementById("amPm");

    var hour = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    var am ='AM';

    if(hour > 12){
        hour = hour - 12 ;
        var am = "PM"
    }

    hour = ( hour < 10) ? "0" + hour : hour ;
    min = ( min < 10) ? "0" + min : min ;
    sec = ( sec < 10) ? "0" + sec : sec ;

    hours.innerHTML = hour ;
    minutes.innerHTML = min;
    seconds.innerHTML = sec ;
}

var interval = setInterval(clock,1000);