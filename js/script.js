$(document).ready( function () {


    $("div.backtotop").addClass("d-sm-none");
    // $(window).resize( function() {
    //     var screenWidth = window.innerWidth;
    //     if (screenWidth > 768) {
    //         $("div.backtotop").addClass("d-sm-none");
    //     }
    // });


    $("#MainSection, h1").click(function (event) {
       var screenWidth = window.innerWidth;
       if (screenWidth < 768) {
           $("#NavbarItems").collapse('hide');
       }
    });

});