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
    chatMsg += `<div class="msg-msg">`; // msg cont
    chatMsg += `<h5>Guest</h5>`; // user name
    chatMsg += `<p>${message}</p>`; // contents
    chatMsg += `<p>
    ${days[date.getDay()]}
    ${months[date.getMonth()]} ${date.getFullYear()},
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</p>`; // time sent
    chatMsg += `</div>`; // end chatMsg

    chat.push(chatMsg); // add new message to array

    // message parts split up
    let messageArray = message.split(" "); // split array by  each " "
    let cmd = messageArray[0]; // start of msg before " " as split
    let args = messageArray.slice(1); // arguments after cmd


    // add message to database
    msgToDB(message, date);

    if (cmd === "!say") {
        say(messageArray, cmd, args, chat); // !say
    } else if (cmd === "!clear") {
        clear(messageArray, cmd, args, chat); // !say
    } else if (cmd === "!levels") {
        levels(messageArray, cmd, args, chat); // !say
    } else {} else if (cmd === "!ll") {
        localLevels(messageArray, cmd, args, chat); // !say
    } else {
        MSG_CHAT.innerHTML = chat.join("\n"); // send message array to HTML
    }


}

// IIFE function
window.onload = function(e) {
    clearFields(); // clear form fields

    // on message send click
    MSG_SEND.addEventListener("click", sendMessage);
    MSG_INP.addEventListener("keypress", function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            sendMessage();
        }
    });
}; // end onload