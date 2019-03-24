//------   G L O B A L     V A R I A B L E S   ------
const MSG_INP = document.querySelector("#msg-inp"); // message input
const MSG_SEND = document.querySelector("#msg-send"); // send button
const MSG_CHAT = document.querySelector("#msg-chat"); // chat

let chat = [];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const PREFIX = "!";

//------   C O N T R O L L E R    F U N C T I O N S   ------
// message sent
function sendMessage() {
    console.log("called");
    let message = MSG_INP.value; // get value

    // if there is a message
    if (message) {
        console.log(`Message Sent: ${message}`); // log value
        addMessage(message);
        MSG_INP.value = ""; // clear value
    } else {
        console.log(`No message`); // log value
    }
}

function clearFields() {
    MSG_INP.value = ""; // clear value
}

function addMessage(message) {

    // new message variables
    let date = new Date;
    let chatMsg = "";

    // fill chatMsg
    chatMsg += `<hr>`; // break line
    chatMsg += `<div class="msg-msg">`; // msg cont
    chatMsg += `<img class="usr-img" src="./assets/img/avi1.png">`; // user img
    chatMsg += `<div class="usr-info">`; // User info
    chatMsg += `<h5 class="usr-name">Guest
    <span class="usr-time">
    ${days[date.getDay()]}
    ${months[date.getMonth()]} ${date.getFullYear()},
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
    </span></h5>`; // user name
    chatMsg += `<p class="usr-msg">${message}</p>`; // contents
    chatMsg += `</div>`; // end User info
    chatMsg += `</div>`; // end chatMsg

    chat.push(chatMsg); // add new message to array

    // message parts split up
    let messageArray = message.split(" "); // split array by  each " "
    let cmd = messageArray[0]; // start of msg before " " as split
    let args = messageArray.slice(1); // arguments after cmd


    // add message to database
    let msgDate = `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    msgToDB(message, msgDate);

    if (cmd === "!say") {
        say(messageArray, cmd, args, chat); // !say
    } else if (cmd === "!clear") {
        clear(messageArray, cmd, args, chat); // !say
    } else if (cmd === "!levels") {
        levels(messageArray, cmd, args, chat); // !say
    } else if (cmd === "!ll") {
        localLevels(messageArray, cmd, args, chat); // !say
    } else {
        MSG_CHAT.innerHTML = chat.join("\n"); // send message array to HTML
    }


}

function displayScreen() {
    $("body").fadeIn(2000);
}

// IIFE function
window.onload = function(e) {
    clearFields(); // clear form fields
    displayScreen();

    // on message send click
    MSG_SEND.addEventListener("click", sendMessage);
    MSG_INP.addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            // console.log("down");
            // console.log(e);
            e.preventDefault();
            MSG_SEND.click();
        }
    });
}; // end onload