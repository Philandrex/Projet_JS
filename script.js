// document ready event
$(document).ready(function () {

    // toggle navBar event
    $('.toggle').on('click', function () {
        $('nav').toggle();
    });

    // generate feed 
    $('.feed').on('click', function () {
        generate();
    });

    // toggle form
    $("#formulaire").click(function () {
        $("form").toggle();

    });

    // toggle carousel
    $("#carousel").click(function () {
        $(".carousel").toggle();

    });

    // add blog envent
    $("#formBlog").on("click", function (event) {
        event.preventDefault();
        let table = [{
            "title": document.getElementById("title").value,
            "summary": document.getElementById("blog").value,
            "imageUrl": document.getElementById("url").value,
        }]
        feed(table, "#feed");
    });

    // add image eve,t
    document.getElementById("imageForm").addEventListener("click", function (event) {
        event.preventDefault();
        let imageUrl = document.getElementById("image").value;
        addImage(imageUrl, ".row");
    });

    // delete image event
    document.addEventListener("dblclick",deleteImage);

    // mosaic click event
    document.getElementById("mosaic").addEventListener("click", mosaic);

    // colonne click event
    document.getElementById("colonne").addEventListener("click", colonne);

    // btn control on click event
    let main = document.getElementById("myMain");
    let btns = main.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }

    console.log("je suis la")
});