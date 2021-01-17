var btn_creditos = document.querySelector("#btn-rodape");

function abrir_janela(){
    newpopupWindow = window.open ('', 'pagina', "width=250 height=250");
    newpopupWindow.document.write ("<img src='img/meme.png' width='200' height='100'> <br/> <b>Disciplia: Desenvolvimento Web</b> <br/> Aluno: Thiago Torres de Freites");
}

btn_creditos.addEventListener('click', abrir_janela);