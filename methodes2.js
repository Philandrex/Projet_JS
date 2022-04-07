function feed1 (params){
    $(params).each(function (i,param) { 
        let $newDiv = $("<div>");
        $newDiv.html(`<h2>${param.title}</h2>
    <img src="${param.imageUrl}" alt="une photo" width = "100">
    <p>${param.summary}</p>`);
        $("main").append($newDiv);
    });
}


function create() {
    const newUrl = "https://api.spaceflightnewsapi.net/v3/articles" ;
    $.ajax({
        url:newUrl,
        methode: "GET",
        dataType: "json",
    })
        .done(function (response) {
            feed1(response);
        })
        .fail(function (error) {
            alert(error);
        })
        .always(function () {
            console.log("Requête effectuée");
        })
    }