function msgToDB(message, time) {

    // console.log(`messageArray: ${messageArray}`); // dont need
    // console.log(`cmd: ${cmd}`); // dont need
    // console.log(`args: ${args}`); // don't need
    // console.log('Here');
    console.log(message);
    var user_name = "Guest";
    var user_msg = message;

    var insertAsset = $.ajax({
        url: "../services/insert.php",
        type: "POST",
        data: {
            userName: user_name,
            message: user_msg,
            time: time,
        },
        dataType: "json"
    });

    insertAsset.done(function(data) {
        // $(".assets__content").html(data.message);
        console.log("Insert Good!");
    });

    insertAsset.fail(function(jqXHR, textStatus) {
        alert("Something went Wrong! (47)" + textStatus);
    });

}