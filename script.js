function timeSection (hour) {
    var section = document.getElementById("session");

    if (hour >= 12) {
        section.innerHTML = "PM";
    } else {
        section.innerHTML = "AM";
    }
    return section;
}

function hourFormat (hour) {
    if (hour > 12) {
        hour -= 12;
    }
    return hour;
}

function displayTime () {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var hour = hourFormat(hours);

    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    timeSection(hours);
}

setInterval(displayTime, 10);