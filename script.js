$(document).ready(function () {
    $('.toggle').on('click', function () {
        $('nav').toggle();
    });

    $('.feed').on('click', function () {
        generate();
    });
    $("#formulaire").click(function () { 
       $("form").toggle();
        
    });
    $("#carousel").click(function () { 
        $(".carousel").toggle();
         
     });
    $("button").on("click", function (event) {
        event.preventDefault();
            let table = [{
            "title": document.getElementById("title").value,
            "summary": document.getElementById("blog").value,
            "imageUrl": document.getElementById("url").value,
        }]
        feed(table,"#feed");
    });
    console.log("fin du programme")
});