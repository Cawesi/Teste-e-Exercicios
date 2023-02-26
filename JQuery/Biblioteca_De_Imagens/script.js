$(document).ready(function(){
    $('#adicionar-imagem').click(function(){
        $('.add_images_input').slideDown();
    })
    
    $('.cancelar-envio').click(function(){
        $('.add_images_input').slideUp();
    })
    
    $('.salvar-imagem').click(function(){
    
        let url = $('#link-image')[0].value
    
        let container_image = "";
    
        container_image = `<div class="container-image"><img src="${url}"class="image" alt="Imagem Cidade"><a href="#"><h3>Visualizar imagem no Site</h3></a></div>`
    
        $(container_image).appendTo($('#galeria')[0])
    
        $('#link-image')[0].value = ""
    
    })
})
