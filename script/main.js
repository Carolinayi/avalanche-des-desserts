
$(document).ready(main);

var counter = 1;
function main() {
    $(".nav-mobile").click(function () {
        if (counter == 1){
            $("nav").animate({
                // display: "block"
            });
            counter = 0;
        } else{
            counter = 1;
            $("nav").animate({
                // display:"none"
            })
        }

    });
    /*Montrer et cacher le submenus*/
    $(".sub-menu").click(function () {
        $(this).children(".children").slideToggle();
    });
}