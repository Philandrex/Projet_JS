function feed(params) {
    for (let i = 0; i < params.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<h2>${params[i].title}</h2>
    <img src="${params[i].imageUrl}" alt="une photo" width = "100">
    <p>${params[i].summary}</p>`;
        document.querySelector("main").append(newDiv);
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
    document.querySelector("main").append(message);
}


function create() {
    const newUrl = "https://api.spaceflightnewsapi.net/v3/articles";
    fetch(newUrl)
        .then(checkError)
        .then(result => { feed(result) })
        .catch(error => { errorMessage(error) });
}