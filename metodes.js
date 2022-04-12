
// get feed elements function
function createElements(params, cible) {
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

// check error function
function checkError(response) {
    if (response.status >= 200 && response.status <= 299) {
        return response.json();
    } else {
        throw Error(response.statusText);
    }
}

// error message function
function sendErrorMessage(error) {
    let message = document.createElement("div");
    message.innerHTML = error;
    document.querySelector("#feed").append(message);
}

// generate feed function
function getElemets() {
    const newUrl = "https://api.spaceflightnewsapi.net/v3/articles";
    document.querySelector("#feed").innerHTML = ""
    fetch(newUrl)
        .then(checkError)
        .then(result => { createElements(result, "#feed") })
        .catch(error => { sendErrorMessage(error) });
}

// colonne function
function colonne() {
    console.log("je suis dans colonne");
    let elements = document.getElementsByClassName("column");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "100%";
        elements[i].style.flex = "100%";
    }
}

// mosaic function
function mosaic() {
    let elements = document.getElementsByClassName("column");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "25%";
        elements[i].style.flex = "23%";
    }
}

// add image function 
function addImage(imageUrl, cible) {
    let style =document.getElementsByTagName("img")[0].getAttribute("style");
    let image = document.createElement("img");
    image.setAttribute("src", imageUrl);
    image.setAttribute("alt", "une image à ajouter");
    image.setAttribute("width", "23vw");
    image.setAttribute("class", "column");
    image.setAttribute("id", "added")
    image.setAttribute("style",style);
    document.querySelector(cible).prepend(image);
}

// delete image function
function deleteImage(event) {
    let cible = event.target;
    let id = cible.getAttribute("id");
    if (id == "added"){
    cible.remove();
    }

}

// controle form input
function formValidate(){
    let msg ="";
    let title = document.forms["myForm"]["title"].value;
    let summary = document.forms["myForm"]["blog"].value;
    let url = document.forms["myForm"]["url"].value;
if (title.length <6 || title.length > 30 ){
    msg += "Vous n'avez pas entré un 'title' valide. <br>";
}  
if (summary.length<15 || summary.length > 300) {
    msg += "Vous n'avez pas entré un 'summary' valide <br>";
}
if (url == ""){
    msg += "Vous n'avez pas entré un 'URL' valide";
}
return msg;
}

// nativ carousel
document.querySelectorAll(".carousel").forEach(carousel =>{

    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel__nav">
        ${buttonsHtml.join("")}
    </div>
    `);

    const buttons = carousel.querySelectorAll(".carousel__button");

    buttons.forEach((button,i)=>{
        button.addEventListener("click", () =>{
            items.forEach (item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(button => button.classList.remove("carousel__button--selected"));
            items[i].classList.add("carousel__item--selected");
            buttons[i].classList.add("carousel__button--selected");
        });
    });

    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
});