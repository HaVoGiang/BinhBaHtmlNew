
var scroll =  jQuery(".mouse_scroll");
scroll.click(function(){
    jQuery("html, body").animate({scrollTop: 580}, 500);
});

// Menu_color_white();
$( window ).scroll(function() {
    if(jQuery("html, body").scrollTop() > 150){
        // Menu_color_black();
    }else{
        // Menu_color_white();
    }
});



function Menu_color_white(){
    jQuery(".menu_user_wrap .menu_user_nav li > a").css("color", "#fff");
    jQuery(".menu_main_wrap .menu_main_nav li > a").css("color", "#fff");
    jQuery(".menu_main_wrap .menu_main_nav > li.current-menu-ancestor > a").css("border-color", "#fff");
    jQuery(".menu_main_wrap .menu_main_nav > li:hover > a").css("border-color", "rgba(255, 255, 255,1)");
}
function Menu_color_black(){
    jQuery(".menu_user_wrap .menu_user_nav li > a").css("color", "#555");
    jQuery(".menu_main_wrap .menu_main_nav li > a").css("color", "#555");
    jQuery(".menu_main_wrap .menu_main_nav > li.current-menu-ancestor > a").css("border-color", "rgba(85, 85, 85, 1)");
    jQuery(".menu_main_wrap .menu_main_nav > li:hover > a").css("border-color", "rgba(85, 85, 85, 1)");
}