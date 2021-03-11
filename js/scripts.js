$(document).ready(function () {
    $("#classRed").click(function () {
        $("#redPara").css("color", "red");
    })

    $("#classAppend").click(function () {
        $("#appendPara").append(".(^.^)./");
    })

    $("#classToggle").click(function () {
        $("#togglePara").slideToggle();
    })

    // $("#classHide").click(function () {
    //     $("#showPara").hide("fast", function () {
    //         $(this).prev().hide("fast", arguments.callee);
    //     });
    $("#classHide").click(function () {
        $("#showPara").hide("fast")
    });
    $("#classShow").click(function () {
        $("#showPara").show("fast");
    })

    $("#classSlideUp").click(function () {
        if ($("#slideUpPara").first().is(":hidden")) {
            $("#slideUpPara").slideDown("slow");
        }
        else {
            $("#slideUpPara").slideUp();
        }
    })

    $("#classFadeOut").click(function () {
        $("#fadePara").fadeOut("slow");
    })
    $("#classFadeIn").click(function () {
        $("#fadePara").fadeIn("slow");
    })

    $("#classBefore").click(function () {
        $("#htmlPara").before("<hr />");
    })
    $("#classAfter").click(function () {
        $("#htmlPara").after("<hr />");
    })

    $("#classAttr").click(function () {
        var buttonClass = $("button").attr("class");
        $("em").text(buttonClass);
    })
})

