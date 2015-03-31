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
        param = queryStringParameters[i].replace(/%20/g, " ").replace(/%3F/g, "?").replace(/%27/g, "'")
            .replace(/%2C/g, ",").replace(/%0A/g, "<br/>").replace(/%21/g, "!").split('=');
        params[param[0]] = param[1];
    }
    
    
    
    if (params.author) {
        var fileRegex = /\?|'|\.|,|\*|!/g;
        authorUrl = params.author.toLowerCase().replace(/-/g, "_").replace(/\s/g, "-").replace(fileRegex, "");
        workUrl1 = authorUrl + "-" + params.work1.toLowerCase().replace(/-/g, "_").replace(/\s|<br\/>/g, "-").replace(fileRegex, "");
        $(document).prop("title", params.author + " - " + document.title);
        $("<img src=" + pathToBioPics + authorUrl + "." + params.bioPicExtension + "></img>").appendTo("#bio-pic");
        $("#author").prepend("<h2>" + params.author + "</h2>");
        $("#bio-load-point").load(pathToHtmlBios + authorUrl + ".html");
        
        $("#work1").prepend("<h2>" + params.work1 + "</h2>");
        $("#work-load-point1").load(pathToHtmlWorks + workUrl1 + ".html", {}, successfulLoad);
        
        if(params.work2) {
            workUrl2 = authorUrl + "-" + params.work2.toLowerCase().replace(/-/g, "_").replace(/\s/g, "-").replace(fileRegex, "");
            $("#work2").prepend("<h2>" + params.work2 + "</h2>");
            $("#work-load-point2").load(pathToHtmlWorks + workUrl2 + ".html", {}, successfulLoad);
        } else {
            $("#work2").hide();
        }
    } else {
        onFail();
    }
});