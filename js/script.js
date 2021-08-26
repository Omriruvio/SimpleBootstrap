$(document).ready( function () {

    $(".row div, h1").click(function (event) {
       var screenWidth = window.innerWidth;
       if (screenWidth < 768) {
           $("#NavbarItems").collapse('hide');
       }
    });

});