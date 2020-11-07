$(document).ready(function() {

    $("p").dblclick(function() {
        $(this).hide();
    });

    $("button").click(function() {
        $("p").hide();
    })

    $("#alert_here").mousedown(function() {
        alert("hello")
    })

    $("input").focus(function() {
        $(this).css("background-color", "green")
    })


});