console.log('Here');
const UPDATE = document.querySelector("#update");

function getLevels() {

    var getLevels = $.ajax({
        url: "./services/levels.php",
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

        });

        $("#users").html(content);
    });

    getLevels.fail(function(jqXHR, textStatus) {
        alert("Something went Wrong! (getLevels)" + textStatus);
    });
};

function updateUsr() {
    console.log('here');
    // get userInformation based on message input
    // i.e. updateUsr(user);
    // var id = $(this).attr("data-id");
    // var actorName = $("#actorName").val();
    // var gender = $("#gender").val();
    //
    // //alert(id + actorName);
    // var updateAsset = $.ajax({
    //   url: "services/update.php",
    //   type: "POST",
    //   data: {
    //     id: id,
    //     name: actorName,
    //     gender: gender
    //   },
    //   dataType: "json"
    // });
    //
    // updateAsset.done(function(data) {
    //   $(".assets__content").html(data.message);
    // });
    //
    // updateAsset.fail(function(jqXHR, textStatus) {
    //   alert("Something went Wrong! (47)" + textStatus);
    // });
};

getLevels();

// C O N T R O L L E R S
UPDATE.addEventListener("click", updateUsr);