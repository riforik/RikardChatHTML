/*
    ISAIAH ROBINSON - 100666922

*/

//
$(document).ready(
    function () {

        $(document).on("click", "body .asset__click", function () {

            var id = $(this).attr("data-id");
            alert(id);

        });

        $("#getAssetsButton").click(
            function () {

                var getAsset = $.ajax({
                    url: "services/get.php",
                    type: "POST",
                    dataType: "json"
                });

                getAsset.done(function (data) {
                    // alert("Dingo ate my");
                    // alert(data);
                    var content = "";
                    $.each(data, function (i, item) {

                        var id = item.id;
                        var name = item.name;


                        content += "<h3 class='asset__click' data-id='" + id + "'>" + name + "</h3>";

                    });

                    $("#assets__content").html(content);

                });

                getAsset.fail(function (jqXHR, textStatus) {
                    alert("Somethin went wrong (22)" + textStatus);
                });

            });

    }
);
