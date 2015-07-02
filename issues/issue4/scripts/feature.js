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

    $("#work-load-point1").load(pathToHtml + "brittany-piche-remodel.html", {}, successfulLoad);
    $("#work-load-point2").load(pathToHtml + "brittany-piche-stick.html", {}, successfulLoad);
    $("#work-load-point3").load(pathToHtml + "brittany-piche-around-the-bush.html", {}, successfulLoad);
    $("#work-load-point4").load(pathToHtml + "brittany-piche-gibberish.html", {}, successfulLoad);

});