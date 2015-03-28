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
    
    $("#work-load-point1").load(pathToHtml + "anthony-khayat-a-tub-of-royal-blood.html", {}, successfulLoad);
    $("#work-load-point2").load(pathToHtml + "anthony-khayat-fourteen.html", {}, successfulLoad);
    $("#work-load-point3").load(pathToHtml + "anthony-khayat-paul-the-hamster.html", {}, successfulLoad);
    $("#work-load-point4").load(pathToHtml + "anthony-khayat-diary-of-an-agnostic.html", {}, successfulLoad);
    
});