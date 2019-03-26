function say(messageArray, cmd, args, chat, msgDate) {
    console.log(`messageArray: ${messageArray}`);
    console.log(`cmd: ${cmd}`);
    console.log(`args: ${args}`);
    chat.pop();
    let chatMsg = "";

    chatMsg += `<hr>`; // break line
    chatMsg += `<div class="msg-msg">`; // msg cont
    chatMsg += `<img class="usr-img" src="./assets/img/${BOT_INFO.avi}">`; // user img
    chatMsg += `<div class="usr-info">`; // User info
    chatMsg += `<h5 class="usr-name bot">${BOT_INFO.name}
    <span class="usr-time">${msgDate}</span></h5>`; // user name
    chatMsg += `<p class="usr-msg">${args.join(" ")}</p>`; // contents
    chatMsg += `</div>`; // end User info
    chatMsg += `</div>`; // end chatMsg


    chat.push(chatMsg);
    console.log(args);

    MSG_CHAT.innerHTML = chat.join("\n"); // send message array to HTML
}