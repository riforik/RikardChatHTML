function getMsgs() {

    function initMessages() {
        // console.log("here");
        var initMessages = $.ajax({
            url: "./services/messages.php",
            type: "POST",
            dataType: "json"
        });

        initMessages.done(function(data) {
            chat = [];
            var content = "";
            $.each(data, function(i, item) {
                var m_id = item.id;
                var m_userName = item.userName;
                var m_message = item.message;
                var m_Time = item.mTime;


                content = "";

            });

            const msgArr1 = data.length
            checkSize(msgArr1, chat);

        });

        initMessages.fail(function(jqXHR, textStatus) {
            console.log("Something went Wrong! (getMsgs)" + textStatus);
        });
    };
    initMessages();

    function checkSize(msgArr1, chat) {
        console.log(`Chat Length: ${chat.length}`);
        console.log(`Arr Length: ${msgArr1}`);
    };

}