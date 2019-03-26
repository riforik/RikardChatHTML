function clear(messageArray, cmd, args, chat, msgDate) {
    console.log(`messageArray: ${messageArray}`);
    console.log(`cmd: ${cmd}`);
    console.log(`args: ${args}`);
    let bArgs = parseInt(`${args}`);
    bArgs++;
    console.log(`bArgs: ${bArgs}`);

    if (!chat) {
        console.log("array empty");
    } else if (!isPosNum(args)) {
        console.log("enter a valid numer, and not 0.");
    } else {
        // clear args amount of array items plus the one for !clear command
        for (var i = 0; i < bArgs; i++) {
            chat.pop(); // remove item
        }
        let chatMsg = "";
        chatMsg += `<hr>`; // break line
        chatMsg += `<div class="msg-msg">`; // msg cont
        chatMsg += `<img class="usr-img" src="./assets/img/avi4.png">`; // user img
        chatMsg += `<div class="usr-info">`; // User info
        chatMsg += `<h5 class="usr-name bot">Rikard Chat Bot
        <span class="usr-time">${msgDate}</span></h5>`; // user name
        chatMsg += `<p class="usr-msg">Cleared ${args} messages.</p>`; // contents
        chatMsg += `</div>`; // end User info
        chatMsg += `</div>`; // end chatMsg

        // add new message to array
        chat.push(chatMsg);

        MSG_CHAT.innerHTML = chat.join("\n"); // send message array to HTML
        removePrev();

    }

}

function isPosNum(num) {
    return !isNaN(num) && num > 0;
}

function removePrev() {
    setTimeout(function() {
        chat.pop(); // remove item
        MSG_CHAT.innerHTML = chat.join("\n"); // send message array to HTML
    }, 1500)
}