function channelMessages() {


    let timer, delay = 10000;
    timer = setInterval(function() {
        // console.log("update");
        getMessages();
    }, delay);

    function getMessages() {
        // console.log("here");
        var getMessages = $.ajax({
            url: "./services/messages.php",
            type: "POST",
            dataType: "json"
        });

        getMessages.done(function(data) {
            chat = [];
            var content = "";
            $.each(data, function(i, item) {
                var m_id = item.id;
                var m_userName = item.userName;
                var m_message = item.message;
                var m_Time = item.mTime;

                // fill chatMsg
                content += `<hr>`; // break line
                content += `<div class="msg-msg" data-id="${m_id}">`; // msg cont
                content += `<img class="usr-img" src="./assets/img/avi1.png">`; // user img
                content += `<div class="usr-info">`; // User info
                content += `<h5 class="usr-name">${m_userName}
            <span class="usr-time">${m_Time}</span></h5>`; // user name
                content += `<p class="usr-msg">${m_message}</p>`; // contents
                content += `</div>`; // end User info
                content += `</div>`; // end chatMsg

                chat.push(content);
                content = "";

            });
            const msgArr1 = data.length
            checkSize(msgArr1, chat);

            displayScreen();

            MSG_CHAT.innerHTML = chat.join("\n"); // send message array to HTML
            // $("#users").html(content);
        });

        getMessages.fail(function(jqXHR, textStatus) {
            console.log("Something went Wrong! (getLevels)" + textStatus);
        });
    };
    getMessages();

    function checkSize(msgArr1, chat) {
        console.log(`Chat Length: ${chat.length}`);
        console.log(`Arr Length: ${msgArr1}`);
    };


}