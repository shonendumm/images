$(document).ready(function() {
    // alert("hello")

    $("#but1").click(function() {

        var x = $("a").attr("href");
        alert(x);

    });

    $("#but2").click(function() {
        $("#p01").text("changed")

    })


    $("#but3").click(function() {
        $("input").val("")

    })


});