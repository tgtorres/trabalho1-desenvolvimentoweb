var btn_preto = document.querySelector("#btn-fundo-preto");
var btn_cinza = document.querySelector("#btn-fundo-cinza");
var btn_azul = document.querySelector("#btn-fundo-azul");

var cor_fundo = window.document.body;

function deixar_preto(){
    cor_fundo.style.background = '#0B0C12';
}

function deixar_cinza(){
    cor_fundo.style.background = '#A6B1C6';
}

function deixar_azul(){
    cor_fundo.style.background = '#6A90DF';
}

btn_preto.addEventListener('click', deixar_preto);
btn_cinza.addEventListener('click', deixar_cinza);
btn_azul.addEventListener('click', deixar_azul);
