function levels(messageArray, cmd, args, chat, msgDate) {
    console.log(`messageArray: ${messageArray}`);
    console.log(`cmd: ${cmd}`);
    console.log(`args: ${args}`);
    console.log('Here');


    function getLevels() {

        var getLevels = $.ajax({
            url: "http://isaiahrobinson.ca/assets/Projects/RikardDiscBot_HTML/services/levels.php",
            type: "POST",
            dataType: "json"
        });
        // console.log(getLevels);

        getLevels.done(function(data) {
            console.log(data[1].name);
            var content = "";
            $.each(data, function(i, item) {
                var user_id = item.id;
                var user_name = item.name;
                var user_level = item.level;
                var user_experience = item.experience;
                var user_msgCount = item.messageCount;

                content += `<hr>`; // break line
                content += `<div class="msg-msg">`; // msg cont
                content += `<img class="usr-img" src="./assets/img/${BOT_INFO.avi}">`; // user img
                content += `<div class="usr-info">`; // User info
                content += `<h5 class="usr-name bot">${BOT_INFO.name}
                                <span class="usr-time">${msgDate}</span></h5>`; // user name
                content += `<div class="usr-msg">
                <h3>${user_name}</h3>
                <h5>Level: ${user_level}</h5>
                <h5>XP: ${user_experience}</h5>
                <h5>Msg Count:${user_msgCount}</h5>
                </div>`; // contents
                content += `</div>`; // end user msg
                content += `</div>`; // end user info
                content += `</div>`; // end chatMsg
                chat.push(content);
                content = "";
            });
            console.log(chat);

            MSG_CHAT.innerHTML = chat.join("\n"); // send message array to HTML
            // $("#users").html(content);
        });

        getLevels.fail(function(jqXHR, textStatus) {
            alert("Something went WRONG! (getLevels)" + textStatus);
        });
    };

    getLevels();

}