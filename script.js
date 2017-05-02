// JavaScript //sets element to the variable $pic
$(document).ready(function() {
    var $pic = $("#pic");
    var $ground = $('#ground');

    $pic.click(function() {
        $pic.css("top", $pic.offset().top + 50);
        var intervalthingy = setInterval(function() {
            if( $pic.offset().top >= $ground.offset().top-100 ){
                clearInterval(intervalthingy);
               
            } else {
                 $pic.css("top", $pic.offset().top + 50);
            }        
        },400);
    });

});