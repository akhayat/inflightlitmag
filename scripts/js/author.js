/** Script dynamically creating an author page */

$(function () {
    var pathToHtmlWorks = "works/",
        pathToHtmlBios = "authors/",
        pathToBioPics = "../../images/authors/",
        queryStringParameters = /\?[^#]*/.exec(window.location.href)[0].substring(1).split("&"),
        params = {bioPicExtension: "jpg"},
        hash = window.location.href.split("#")[1],
        authorUrl = null;
        workUrl1 = null,
        workUrl2 = null,
        successfulLoad = function() {
            if (hash && $(this).attr("id") === ("#" + hash)) {
                $('html, body').animate({
                    scrollTop: $(this).offset().top
                }, 2000);
            }
        };

    // Parse the query string
    for(var i = 0; i < queryStringParameters.length; i++) {
        // TODO: Look into prebuilt string decoders
        param = queryStringParameters[i].replace(/%20|\+/g, " ")
                .replace(/%3F/g, "?")
                .replace(/%27/g, "'")
                .replace(/%2C/g, ",")
                .replace(/%0A/g, "<br/>")
                .replace(/%21/g, "!")
                .replace(/%23/g, "#")
                .replace(/%2F/g, "/")
                .replace(/%3A/g, ":")
                .replace(/%3B/g, ";")
                .replace(/%3C/g, "<")
                .replace(/%3E/g, ">")
                .replace(/%26/g, "&")
                .replace(/%2B/g, "+")
                .replace(/%25/g, "%")
                .replace(/%28/g, "(")
                .replace(/%29/g, ")")
                .replace(/%5B/g, "[")
                .replace(/%5D/g, "]")
                .replace(/%C3%A1/g, "\u00e1")
                .replace(/%C3%A9/g, "\u00e9")
                .replace(/%C3%B3/g, "\u00f3")
                .replace(/%C3%AD/g, "\u00ed")
                .replace(/%E2%80%94/g, "\u2014")
                .split("=");
        params[param[0]] = param[1];
    }



    if (params.author) {
        var fileRegex = /\?|'|\.|,|\*|!|<[^>]*>|:|%|;|\(|\)|\/|\[|\]|#/g;
        authorUrl = params.author.toLowerCase()
                .replace(/-/g, "_")
                .replace(/\s/g, "-")
                .replace(/\u00e1/g, "a")
                .replace(/\u00e9/g, "e")
                .replace(/\u00f3/g, "o")
                .replace(/\u00ed/g, "i")
                .replace(/\u2014/g, "~")
                .replace(fileRegex, "");
        workUrl1 = authorUrl + "-" + params.work1.toLowerCase()
                .replace(/-/g, "_")
                .replace(/\s|<br\/>/g, "-")
                .replace(/&|\+/g, "and")
                .replace(/\u00e1/g, "a")
                .replace(/\u00e9/g, "e")
                .replace(/\u00f3/g, "o")
                .replace(/\u00ed/g, "i")
                .replace(/\u2014/g, "~")
                .replace(fileRegex, "");
        $(document).prop("title", params.author + " - " + document.title);
        $("<img src=" + pathToBioPics + authorUrl + "." + params.bioPicExtension + "></img>")
                .appendTo("#bio-pic");
        $("#author").prepend("<h2>" + params.author + "</h2>");
        $("#bio-load-point").load(pathToHtmlBios + authorUrl + ".html");

        $("#work1").prepend("<h2>" + params.work1 + "</h2>");
        $("#work-load-point1").load(pathToHtmlWorks + workUrl1 + ".html", {}, successfulLoad);

        if(params.work2) {
            workUrl2 = authorUrl + "-" + params.work2.toLowerCase()
                    .replace(/-/g, "_")
                    .replace(/\s/g, "-")
                    .replace(/\u00e1/g, "a")
                    .replace(/\u00e9/g, "e")
                    .replace(/\u00f3/g, "o")
                    .replace(/\u00ed/g, "i")
                    .replace(/\u2014/g, "~")
                    .replace(fileRegex, "");
            $("#work2").prepend("<h2>" + params.work2 + "</h2>");
            $("#work-load-point2").load(pathToHtmlWorks + workUrl2 + ".html", {}, successfulLoad);
        } else {
            $("#work2").hide();
        }
    } else {
        onFail();
    }
});