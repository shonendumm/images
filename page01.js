$(document).ready(function() {
    // alert("hello")

    // code to change the image

    $("img").click(function() {
        var b = $(this).attr("data-alt")
        var a = $(this).attr("alt")
        var x = $(this).attr("src")
        if (x == a) {
            $(this).attr("src", b);
        } else {
            $(this).attr("src", a);
        }
    })



});