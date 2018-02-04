//global variables
let dateContainer
let clockContainer
let messageContainer
let showSeconds = false

//run clock initializer on page load
window.onload = function () {
    init()
}

//find HTML element with id's
function init () {
    dateContainer = document.querySelector('#date')
    clockContainer = document.querySelector('#clock')
    messageContainer = document.querySelector('#message')
    //console.log(clockContainer)
    startClock()
}

//clock main script
function startClock () {
    window.setInterval(function () {
        
        //get time and divide into parts
        today = new Date()
        
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December')
        var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
        
        var year = today.getFullYear()
        var month = today.getMonth()
        var d = today.getDate()
        var day = today.getDay()
        var h = today.getHours()
        var m = today.getMinutes()
        var s = today.getSeconds()
        
        //format the time
        h = formatTime(h)
        m = formatTime(m)
        s = formatTime(s)
        
        //edit 'date' element
        dateContainer.innerHTML = days[day] + ", " + d + ". of " + months[month] + " " + year
        
        //edit 'clock' element based on 'showSeconds' value
        if (showSeconds == true) {
            clockContainer.innerHTML = h + ":" + m + ":" + s
        } else {
            clockContainer.innerHTML = h + ":" + m
        }
    }, 1000) //timer
}


//add 0 in front of number if <10
function formatTime(i) {
    if (i < 10) {i = "0" + i}
    return i
}

//unhide image URL textbox
function imageTexboxAppear() {
    document.querySelector('.imagebuttonwrapper').style.display = "initial"
}

//change background and hide textbox
function imageTextboxHide() {
    document.querySelector('.imagebuttonwrapper').style.display = "none"
    //check for URL
    if(/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test($("#imageTextbox").val())){
        document.documentElement.style.background = "url(" + document.querySelector("#imageTextbox").value + ") no-repeat center fixed"
        document.documentElement.style.backgroundSize= "cover"
        document.documentElement.style.backgroundPosition = "relative"
    } else {
        //error
        alert("Invalid URL.")
    }
}

//unhide color selector textbox
function colorTextboxAppear() {
    document.querySelector('.colorbuttonwrapper').style.display = "initial"
}

//change clock color and hide textbox
function colorTextboxHide() {
    document.querySelector('.colorbuttonwrapper').style.display = "none"
    document.querySelector('.clockwrapper').style.color = document.querySelector("#colorTextbox").value
}

//unhide message textbox
function messageTextboxAppear() {
    document.querySelector('.messagebuttonwrapper').style.display = "initial"
}

//change message hide textbox
function messageTextboxHide() {
    document.querySelector('.messagebuttonwrapper').style.display = "none"
    document.querySelector('#message').innerHTML = document.querySelector("#messageTextbox").value
}

//unhide seconds checkbox
function secondsCheckboxAppear() {
    document.querySelector('.secondsbuttonwrapper').style.display = "initial"
}

//change 'showSeconds' value and hide checkbox
function secondsCheckboxHide() {
    document.querySelector('.secondsbuttonwrapper').style.display = "none"
    //check if checkbox is checked, and modify 'showSeconds' value accordingly
    if (document.querySelector('#secondsCheckbox').checked == true) {
        showSeconds = true
    } else {
        showSeconds = false
    }
}