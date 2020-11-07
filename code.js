$(document).ready(function() {

    $("p").dblclick(function() {
        $(this).hide();
    });

    $("button").click(function() {
        $("p").toggle(1000, function() { alert("callback") }); // toggle is to hide or show
    })

    // $("#alert_here").mousedown(function() {
    //     alert("hello")
    // })

    $("input").on({
        focus: function() {
            $(this).css("background-color", "white")
        },
        blur: function() {
            $(this).css("background-color", "lightblue")
        }

    })


});