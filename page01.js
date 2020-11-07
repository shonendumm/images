$(document).ready(function() {
    // alert("hello")

    // code to change the image

    $("img").click(function() {
        var y = $(this).attr("data-alt")
        $(this).attr("src", y);
    })



    // previous code stuff on buttons and getting/setting html attributes
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

    // reminder on how to do multiple event handlers

    $("input").on({

        focus: function() {
            $(this).css("background-color", "lightgrey")
        }, // important to put comma

        blur: function() {
            $(this).css("background-color", "white")
        }

    })


});