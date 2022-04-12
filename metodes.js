function feed(params, cible) {
    for (let i = 0; i < params.length; i++) {
        let newDiv = document.createElement("div");
        let title = document.createElement("h2");
        let summary = document.createElement("p");
        let image = document.createElement("img");
        title.innerHTML = params[i].title;
        image.setAttribute("src", params[i].imageUrl);
        image.setAttribute("alt", "une photo");
        image.setAttribute("width", 100);
        summary.innerHTML = params[i].summary;
        newDiv.append(title, image, summary);
        document.querySelector(cible).prepend(newDiv);
    }
}

function checkError(response) {
    if (response.status >= 200 && response.status <= 299) {
        return response.json();
    } else {
        throw Error(response.statusText);
    }
}

function errorMessage(error) {
    let message = document.createElement("div");
    message.innerHTML = error;
    document.querySelector("#feed").append(message);
}


function generate() {
    const newUrl = "https://api.spaceflightnewsapi.net/v3/articles";
    document.querySelector("#feed").innerHTML = ""
    fetch(newUrl)
        .then(checkError)
        .then(result => { feed(result, "#feed") })
        .catch(error => { errorMessage(error) });
}


function colonne() {
    console.log("je suis dans colonne");
    let elements = document.getElementsByClassName("column");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "100%";
        elements[i].style.flex = "100%";
    }
}
function mosaic() {
    let elements = document.getElementsByClassName("column");
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%";
        elements[i].style.flex = "23%";
    }
}
function addImage(imageUrl, cible) {
    let image = document.createElement("img");
    image.setAttribute("src", imageUrl);
    image.setAttribute("alt", "une image à ajouter");
    image.setAttribute("width", "23vw");
    image.setAttribute("class", "column");
    image.setAttribute("id", "added")
    document.querySelector(cible).prepend(image);
}
function deleteImage(event) {
    let cible = event.target;
    let id = cible.getAttribute("id");
    if (id == "added"){
    cible.remove();
    }

}