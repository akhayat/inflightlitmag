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
    
    $("#work-load-point1").load(pathToHtml + "sara-khayat-poetry-died-in-my-arms-last-night.html", {}, successfulLoad);
    $("#work-load-point2").load(pathToHtml + "sara-khayat-the-art-of-being-breathless.html", {}, successfulLoad);
    $("#work-load-point3").load(pathToHtml + "sara-khayat-wreckage.html", {}, successfulLoad);
    $("#work-load-point4").load(pathToHtml + "sara-khayat-wade.html", {}, successfulLoad);
    
});