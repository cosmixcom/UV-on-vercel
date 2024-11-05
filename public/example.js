// document // makes it so you can press enter to submit as opposed to just being able to press a button
//     .getElementById("urlInput")
//     .addEventListener("keydown", function (event) {
//         if (event.key === "Enter") {
//             event.preventDefault();
//             document.getElementById("searchButton").click();
//         }
//     });

document.getElementById("form").addEventListener('submit', (event) => {
    event.preventDefault();

    let url = document.getElementById("urlInput").value; // if no periods are detected in the input, search google instead
    let searchUrl = "https://www.google.com/search?q=";

    if (!url.includes(".")) {
        url = searchUrl + encodeURIComponent(url);
    } else {
        if (!url.startsWith("http://") && !url.startsWith("https://")) { // if no http or https is detected, add https automatically
            url = "https://" + url;
        }
    }

    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);

    
});

if (new URLSearchParams(location.search).get('q')) {
    window.location = __uv$config.prefix + __uv$config.encodeUrl(new URLSearchParams(location.search).get('q'));
}
