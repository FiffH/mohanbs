$(document).ready(function() {
    $('#services-info-container').hide();
    $('.services-info-text').hide();
    
    $('.services-card').click(function(event){
        $('#services-info-container').show();
        $('.services-info-text').hide();
        $('#'+(event.target.id)+'-text').show();
        $('#'+(event.target.id)+'-text').addClass("animated fadeInDown");
    });
});