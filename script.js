function displayTime () {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var section = document.getElementById("session");

    if (hours >= 12) {
        section.innerHTML = "PM";
    } else {
        sessionStorage.innerHTML = "AM";
    }

    if (hours > 12) {
        hours -= 12;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(displayTime, 10);