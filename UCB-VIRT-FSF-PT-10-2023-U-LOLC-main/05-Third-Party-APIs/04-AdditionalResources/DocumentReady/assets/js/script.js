$(function () {
    console.log('+-- after DOM is ready -------------------+');
    $('img').css({maxWidth:"640px"});
});

$(window).on("load",function(){
    console.log('+-- after all elements are loaded --------+');
    $('img').css({maxWidth:"140px"});
});