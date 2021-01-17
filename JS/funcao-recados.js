var campo_nome = document.querySelector("#nome");
var campo_recado = document.querySelector("#mensagem");
var btn_adicionar = document.querySelector("#btn-adicionar");
var corpo_tabela = document.querySelector("tbody");

function receber_recados(nome,recado){
    this.nome = nome;
    this.recado = recado;
    this.criar_linha_tabela = function(){
        var linha = document.createElement("tr");
        var campo_nome = document.createElement('td');
        var campo_recado = document.createElement('td');
        var campo_excluir = document.createElement('td');
        var texto_nome = document.createTextNode(this.nome);
        var texto_recado = document.createTextNode(this.recado);
        var botao_excluir = document.createElement("button");
        botao_excluir.innerHTML = 'Excluir';
        botao_excluir.style.background = 'red';
        botao_excluir.style.color = 'white';
        botao_excluir.style.width = '150%';
        botao_excluir.style.height = '150%';
        botao_excluir.style.border = 'none';
        botao_excluir.style.borderRadius = '0.1rem';
        botao_excluir.style.marginBottom = '20%';
        campo_nome.id = 'nome';
        campo_recado.id = 'mensagem';
        botao_excluir.id = 'btn_excluir';
        campo_nome.appendChild(texto_nome);
        campo_recado.appendChild(texto_recado);
        campo_excluir.appendChild(botao_excluir);
        linha.appendChild(campo_nome);
        linha.appendChild(campo_recado);
        linha.appendChild(campo_excluir);
        corpo_tabela.appendChild(linha);
    }
};

function adicionar(){
    var nome = campo_nome.value;
    var recado = campo_recado.value;
    novo_recado = new receber_recados(nome, recado);
    novo_recado.criar_linha_tabela();
    window.location.href='#recados';
    campo_nome.value = '';
    campo_recado.value = '';
};

btn_adicionar.addEventListener('click', adicionar);
