// const MENU = document.querySelector("");

// N A V   C O N T R O L L E R
const menu = document.querySelector('#example-animated-menu');

$('.title-bar').click(function() {
    // get the menu

    // if menu is opened
    if (menu.classList.contains("opened")) {
        $('.top-bar')
            .removeClass("opened")
            .slideUp(500);


        $(".title-bar")
            .removeClass("opened");


    } else {
        $('.top-bar')
            .css('height', '100vh')
            .addClass("opened")
            .slideDown(500);

        $(".title-bar")
            .addClass("opened");

    }

});


$('.nav .x').click(function(e) {
    // click page to hide nav (broken)
    // let target = e.target.classList;
    // console.log(target);
    // if (target.contains("title-bar") ||
    //     target.contains("top-bar") ||
    //     target.contains("menu-icon") ||
    //     target.contains("menu-text") ||
    //     target.contains("link")) {
    //     console.log("Clicked the nav");
    //
    // } else {
    //     if (menu.classList.contains("opened")) {
    //         $('.top-bar')
    //             .removeClass("opened")
    //             .slideUp(200);
    //
    //
    //         $(".title-bar")
    //             .removeClass("opened");
    //
    //     }
    // }

    if (menu.classList.contains("opened")) {
        $('.top-bar')
            .removeClass("opened")
            .slideUp(200);


        $(".title-bar")
            .removeClass("opened");

    }

});