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
    startClock()
}

//clock main script
function startClock () {

    //get time
    let today = new Date()

    //arrays for day and month names
    let days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
    let months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')

    //split time into parts
    let year = today.getFullYear()
    let month = today.getMonth()
    let d = today.getDate()
    let day = today.getDay()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()

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
    
    //restart clock script
    setTimeout(startClock, 1000)
}

//add 0 in front of number if <10
function formatTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i
}

//unhide image URL textbox
function imageTexboxAppear() {
    document.querySelector('.imagebuttonwrapper').style.visibility = "visible"
}

//change background and hide textbox
function imageTextboxHide() {
    document.querySelector('.imagebuttonwrapper').style.visibility = "hidden"
    //check for URL
    if (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test($("#imageTextbox").val())) {
        //change background
        document.querySelector('#background').style.background = "url(" + document.querySelector("#imageTextbox").value + ") no-repeat center"
        document.querySelector('#background').style.backgroundSize = "cover"
    } else {
        //display error
        alert("Invalid URL.")
    }
}

//unhide blur slider
function blurSliderAppear() {
    document.querySelector('.blurbuttonwrapper').style.visibility = "visible"
}

//apply blur and hide blur slider
function blurSliderHide() {
    document.querySelector('.blurbuttonwrapper').style.visibility = "hidden"
    document.querySelector('#background').style.filter = "blur(" + (document.querySelector("#blurSlider").value / 10) + "px)"
}

//unhide color selector textbox
function colorTextboxAppear() {
    document.querySelector('.colorbuttonwrapper').style.visibility = "visible"
}

//change clock color and hide color selector textbox
function colorTextboxHide() {
    document.querySelector('.colorbuttonwrapper').style.visibility = "hidden"
    document.querySelector('.clockwrapper').style.color = document.querySelector("#colorTextbox").value
}

//unhide message textbox
function messageTextboxAppear() {
    document.querySelector('.messagebuttonwrapper').style.visibility = "visible"
}

//change message and hide message textbox
function messageTextboxHide() {
    document.querySelector('.messagebuttonwrapper').style.visibility = "hidden"
    document.querySelector('#message').innerHTML = document.querySelector("#messageTextbox").value
}

//unhide seconds checkbox
function secondsCheckboxAppear() {
    document.querySelector('.secondsbuttonwrapper').style.visibility = "visible"
}

//change 'showSeconds' value and hide seconds checkbox
function secondsCheckboxHide() {
    document.querySelector('.secondsbuttonwrapper').style.visibility = "hidden"
    //check if checkbox is checked, and modify 'showSeconds' value accordingly
    if (document.querySelector('#secondsCheckbox').checked == true) {
        showSeconds = true
    } else {
        showSeconds = false
    }
}