function msgToDB(message, time) {
    let name = "Guest";

    console.log(message);
    var user_name = name;
    var user_msg = message;
    var user_time = time + " tested 2";

    var insertAsset = $.ajax({
        url: "./services/insert.php",
        type: "POST",
        data: {
            name: name,
            message: user_msg,
            time: user_time,
        },
        dataType: "json"
    });

    insertAsset.done(function(data) {
        // $(".assets__content").html(data.message);
        console.log(`insertAsset: ${data}`); // returns object object

        // object showing responseJSON and responseText
        console.log(data);
        console.log(`Insert Good! ${data.message}`);
        // log the desired contents
        console.log(`Message\nUser: ${user_name}\nMsg: ${user_msg}\nTime: ${user_time}`);
    });

    insertAsset.fail(function(data, jqXHR, textStatus) {
        console.log(data);
        console.log(`Something went Wrong! (msgToDB: ${data.message}; ${textStatus})`);

        console.log(`Message\nUser: ${user_name}\nMsg: ${user_msg}\nTime: ${user_time}`);
    });

}