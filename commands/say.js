function say(messageArray, cmd, args, chat) {
    console.log(`messageArray: ${messageArray}`);
    console.log(`cmd: ${cmd}`);
    console.log(`args: ${args}`);
    chat.pop();

    chat.push(`<div class="msg-msg">
    <h5>RikardChatBot</h5>
    <p>${args.join(" ")}</p>
    </div>`);
    console.log(args);

    MSG_CHAT.innerHTML = chat.join("\n"); // send message array to HTML
}