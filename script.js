// document ready event
$(document).ready(function () {

    // toggle navBar event
    $('.toggle').on('click', function () {
        $('nav').toggle();
    });

    // generate feed 
    $('.feed').on('click', function () {
        getElemets();
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
        let form = formValidate();
        document.querySelector(".errorMessage").innerHTML = "";
        if(form == ""){
            let table = [{
                "title": document.getElementById("title").value,
                "summary": document.getElementById("blog").value,
                "imageUrl": document.getElementById("url").value,
            }]
            createElements(table, "#feed");
        }else{
            document.querySelector(".errorMessage").innerHTML = form ;
        };

        
    });

    // add image event
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