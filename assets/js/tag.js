$(document).ready(function () {
    $('.tag').click(function (e) { 
        $(this).siblings('.tag').fadeToggle(500);
        let tagdata = $(this).attr('data-tag')
        console.log(tagdata);
        $('.'+tagdata).fadeToggle(500);
        
    });
});