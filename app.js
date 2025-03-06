//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        inputAmigo.value = ''; // Limpar o campo de entrada
    }
}

// Função para atualizar a lista de amigos exibida
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.id = `amigo-${index}`;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear o Amigo Secreto sem repetir nomes
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário ter pelo menos dois amigos para sortear.');
        return;
    }

    let sorteio = [...amigos];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    amigos.forEach((amigo) => {
        let sorteadoIndex;
        let sorteado;

        do {
            sorteadoIndex = Math.floor(Math.random() * sorteio.length);
            sorteado = sorteio[sorteadoIndex];
        } while (sorteado === amigo);

        sorteio.splice(sorteadoIndex, 1);
        const li = document.createElement('li');
        li.textContent = `${amigo} sorteou ${sorteado}`;
        resultado.appendChild(li);
    });
}
