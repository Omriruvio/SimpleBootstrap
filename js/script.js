$(document).ready( function () {

    $("#navbarToggler").blur(function (event) {
       var screenWidth = window.innerWidth;
       if (screenWidth < 720) {
           $("#NavbarItems").collapse('hide');
       }
    });

});