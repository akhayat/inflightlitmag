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

    $("#work-load-point1").load(pathToHtml + "derek-childs-bittersweet.html", {}, successfulLoad);
    $("#work-load-point2").load(pathToHtml + "derek-childs-heartless.html", {}, successfulLoad);
    $("#work-load-point3").load(pathToHtml + "derek-childs-if-only.html", {}, successfulLoad);
    $("#work-load-point4").load(pathToHtml + "derek-childs-run-derek-run.html", {}, successfulLoad);

});