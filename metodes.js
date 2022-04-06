function feed(params) {
    for (let i = 0; i < params.length; i++) {
        let title = params[i].title;
        let summary = params[i].summary;
        let imageUrl = params[i].imageUrl;
        let $newDiv = $("<div>");
        $newDiv.html(`<h2>${title}</h2>
    <img src="${imageUrl}" alt="une photo" width = "100">
    <p>${summary}</p>`);
        $("main").append($newDiv);
    }
}

function create() {
const newUrl = "https://api.spaceflightnewsapi.net/v3/articles" ;
fetch(newUrl)
.then(Response=>Response.json())
.then(result => {
    feed(result);
});
/*
$.ajax({
    url: "newUrl",
    methode: "GET",
    dataType: "json",
})
    .done(function (response) {
        feed(response);
    })
    .fail(function (error) {
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })
    .always(function () {
        console.log("Requête effectuée");
    })

*/
}