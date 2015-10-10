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

    $("#work-load-point1").load(pathToHtml + "willie-watt-rupture.html", {}, successfulLoad);
    $("#work-load-point2").load(pathToHtml + "willie-watt-tripod.html", {}, successfulLoad);
    $("#work-load-point3").load(pathToHtml + "willie-watt-inverted-alice.html", {}, successfulLoad);
    $("#work-load-point4").load(pathToHtml + "willie-watt-butterfly-in-a-rainstorm.html", {}, successfulLoad);

});