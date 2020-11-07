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