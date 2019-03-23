function localLevels(messageArray, cmd, args, chat) {
    function getLevels() {

        var getLevels = $.ajax({
            url: "../services/levels.php",
            type: "POST",
            dataType: "json"
        });

        getLevels.done(function(data) {
            console.log(data[1].name);
            var content = "";
            $.each(data, function(i, item) {
                var user_id = item.id;
                var user_name = item.name;
                var user_level = item.level;
                var user_experience = item.experience;
                var user_msgCount = item.messageCount;

                content += `<div id='user${i}' class='user'>`;
                content += `<p>Name: ${user_name}</p>`;
                content += `<p>ID: ${user_id}</p>`;
                content += `<p>Level: ${user_level}</p>`;
                content += `<p>Experience: ${user_experience}</p>`;
                content += `<p>Msg Cnt: ${user_msgCount}</p>`;
                content += `</div>`;
                content += "<hr>";
                chat.push(content);
                content = "";

            });
            console.log(chat);

            MSG_CHAT.innerHTML = chat.join("\n"); // send message array to HTML
            // $("#users").html(content);
        });

        getLevels.fail(function(jqXHR, textStatus) {
            console.log("Something went Wrong! (localLevels: 1)" + textStatus);
        });
    };



    getLevels();
};