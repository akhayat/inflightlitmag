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
    
    $("#work-load-point1").load(pathToHtml + "r-miller-note-to-self.html", {}, successfulLoad);
    $("#work-load-point2").load(pathToHtml + "r-miller-full-collapse.html", {}, successfulLoad);
    $("#work-load-point3").load(pathToHtml + "r-miller-lets-go-somewhere-comfortable.html", {}, successfulLoad);
    $("#work-load-point4").load(pathToHtml + "r-miller-is-this-what-it-means-to-grow-up.html", {}, successfulLoad);
    
});