var date = {

    // Setting when show PM or AM
    setSection: function(hours) {
        if (hours >= 12) {
            return "PM";
        } else {
            return "AM";
        }
    },

    // Setting to display the hours in 12 format
    hourFormat: function(hours) {
        if (hours > 12) {
            hours -= 12;
        }
        return hours;
    },

    // new Date().getMonth() returns a number
    // This methods convert the number to its month
    monthFormat: function(month) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[month];
    },

    // new Date().getDay() returns a number
    // This function convert the number to its day of the week
    weekDayFormat: function(weekDay) {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[weekDay];
    },

    extraString: function(day) {
        day = String(day);

        if (day[day.length - 1] == "1") {
            return "st";
        } else if (day[day.length - 1] == "2") {
            return "nd";
        } else if (day[day.length - 1] == "3") {
            return "rd";
        } else {
            return "th";
        }
    }
}


function displayTime () {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var month = dateTime.getMonth();
    var day = dateTime.getDate();
    var year = dateTime.getFullYear();
    var weekDay= dateTime.getDay();

    document.getElementById("hours").innerHTML = date.hourFormat(hours);
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("session").innerHTML = date.setSection(hours);
    document.getElementById("month").innerHTML = date.monthFormat(month);
    document.getElementById("day").innerHTML = day;
    document.getElementById("extra").innerHTML = date.extraString(day);
    document.getElementById("year").innerHTML = year;
    document.getElementById("weekDay").innerHTML = date.weekDayFormat(weekDay);    
}

setInterval(displayTime, 10);