$(document).ready(function () {
    $('.toggle').on('click',function() {
        $('nav').toggle();
    });

    $('.feed').on('click', function() {
        create();
    });
});