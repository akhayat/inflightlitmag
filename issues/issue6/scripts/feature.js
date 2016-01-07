$(function () {
    var pathToHtml = "works/",
        hash = window.location.href.split("#")[1],
        successfulLoad = function() {
            if (hash && $(this).attr("id") === ("#" + hash)) {
                $('html, body').animate({
                    scrollTop: $(this).offset().top
                }, 2000);
            }
        };

    $("#work-load-point1").load(pathToHtml + "gabby-mccullough-sounds-of-silence.html", {}, successfulLoad);
    $("#work-load-point2").load(pathToHtml + "gabby-mccullough-moonlight-visitations.html", {}, successfulLoad);
    $("#work-load-point3").load(pathToHtml + "gabby-mccullough-the-knife.html", {}, successfulLoad);
    $("#work-load-point4").load(pathToHtml + "gabby-mccullough-gut-feeling.html", {}, successfulLoad);

});