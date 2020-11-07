$(document).ready(function() {

    $("p").dblclick(function() {
        $(this).hide();
    });

    $("button").click(function() {
        $("p").hide();
    })

    $("#alerthere").mousedown(function() {
        alert("hello")
    })

});