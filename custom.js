// instancia jQuery e evita conflitos
// jQuery(function($)){

$(document).ready(function(){
    
    $('owl-Carousel').owlCarousel();

    let titulos = $('h4') // usando tags
    let itens = $('.featured-item') // usando classes
    let destaques = $('#featured') // usando id
    console.log(titulos.first());

})