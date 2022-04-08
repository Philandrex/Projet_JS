function feed(params) {
    for (let i = 0; i < params.length; i++) {
        let newDiv = document.createElement("div");
        let title = document.createElement("h2");
        let summary = document.createElement("p");
        let image = document.createElement("img");
        title.innerHTML = `${params[i].title}`;
        image.setAttribute("src",`${params[i].imageUrl}`);
        image.setAttribute("alt","une photo");
        image.setAttribute("width",100);
        summary.innerHTML = `${params[i].summary}`;
        newDiv.append(title,image,summary);
        document.querySelector("#feed").append(newDiv);
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


function create() {
    const newUrl = "https://api.spaceflightnewsapi.net/v3/articles";
    document.querySelector("#feed").innerHTML= ""
    fetch(newUrl)
        .then(checkError)
        .then(result => { feed(result) })
        .catch(error => { errorMessage(error) });
}