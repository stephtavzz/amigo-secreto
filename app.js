let listaDeNomes = [];
let nomesSorteados = [];

function adicionarAmigo() {
    let input = document.querySelector('#amigo');
    let nome = input.value.trim();
    
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Verificar se o nome já foi adicionado
    if (listaDeNomes.indexOf(nome) !== -1) {
        alert('Este nome já foi adicionado.');
        return;
    }

    listaDeNomes.push(nome);
    atualizarLista();
    input.value = '';
}

function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de atualizar
    
    for (let i = 0; i < listaDeNomes.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaDeNomes[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (listaDeNomes.length < 2) {
        alert('Adicione pelo menos dois nomes para realizar o sorteio.');
        return;
    }

    // Pausar o sorteio quando todos os nomes já foram sorteados
    if (nomesSorteados.length === listaDeNomes.length) {
        alert('Todos os amigos já foram sorteados!');
        return;
    }

    // Sorteio simples
    let indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);
    let nomeSorteado = listaDeNomes[indiceSorteado];

    // Verificar se o nome já foi sorteado
    while (nomesSorteados.indexOf(nomeSorteado) !== -1) {
        indiceSorteado = Math.floor(Math.random() * listaDeNomes.length);
        nomeSorteado = listaDeNomes[indiceSorteado];
    }

    // Adiciona o nome sorteado à lista de sorteados
    nomesSorteados.push(nomeSorteado);
    console.log(nomesSorteados); // Mostra no console os nomes sorteados

    // Exibe o resultado
    document.querySelector('#resultado').textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;
}