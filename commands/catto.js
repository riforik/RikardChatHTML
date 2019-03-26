function getCatto(messageArray, cmd, args, chat, msgDate) {
    console.log(`(getCatto) messageArray: ${messageArray}`);
    console.log(`(getCatto) cmd: ${cmd}`);
    console.log(`(getCatto) args: ${args}`);
    chat.pop();

    // async function
    async function fetchAsync() {
        // await response of fetch call
        let response = await fetch('http://aws.random.cat/meow');
        // only proceed once promise is resolved
        let data = await response.json();
        // only proceed once second promise is resolved
        return data;
    }

    // trigger async function
    // log response or catch error of fetch promise
    fetchAsync()
        .then(data => {
            chatMsg = "";
            chatMsg += `<hr>`; // break line
            chatMsg += `<div class="msg-msg">`; // msg cont
            chatMsg += `<img class="usr-img"
            src="./assets/img/${BOT_INFO.avi}">`; // user img
            chatMsg += `<div class="usr-info">`; // User info
            chatMsg += `<h5 class="usr-name bot">${BOT_INFO.name}
          <span class="usr-time">${msgDate}</span></h5>`; // user name
            chatMsg += `<img class="usr-msg img" src="${data.file}">`; // contents
            chatMsg += `</div>`; // end User info
            chatMsg += `</div>`; // end chatMsg
            chat.push(chatMsg);

            MSG_CHAT.innerHTML = chat.join("\n"); // send message array to HTML
        })
        .catch(reason => console.log("failed to get kitty"))


}