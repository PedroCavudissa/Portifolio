$(document).ready(function(){

    // Scroll suave
    $('a[href^="#"]').on('click',function(e){
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if(target.length){
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
    });

    // Animação de barras de skills
    $('.skill-bar div').each(function(){
        var width = $(this).attr('style');
        $(this).css('width','0');
        $(this).animate({width: width.replace('width:','')},1500);
    });

    // Formulário de contacto simulado
    $('#contactForm').submit(function(e){
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        $(this).trigger('reset');
    });
});