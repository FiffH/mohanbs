$(document).ready(function() {
    $('#services-info-container').hide();
    $('.services-info-text').hide();
    
    $('.more-info').click(function(event){
        $('#services-info-container').show();
        $('.services-info-text').hide();
        $('#'+(event.target.id)+'-text').show();
        $('#'+(event.target.id)+'-text').addClass("animated fadeInDown");
    });
});
  