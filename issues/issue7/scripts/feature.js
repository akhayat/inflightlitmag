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

    $("#work-load-point1").load(pathToHtml + "laura-khayat-gentle-resolve.html", {}, successfulLoad);
    $("#work-load-point2").load(pathToHtml + "laura-khayat-euros.html", {}, successfulLoad);
    $("#work-load-point3").load(pathToHtml + "laura-khayat-ghost.html", {}, successfulLoad);
    $("#work-load-point4").load(pathToHtml + "laura-khayat-the-moon-tarot.html", {}, successfulLoad);

});