function clear(messageArray, cmd, args, chat) {
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

        // add new message to array
        chat.push(`<div class="msg-msg">
      <h5>RikardChatBot</h5>
      <p>Cleared ${args} messages.</p>
      </div>`);

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