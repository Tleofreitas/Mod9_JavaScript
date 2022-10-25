function State() {
    this.listSection = null;
}

const state = new State();

// Iniciar o list controller
export function init() {
    state.listSection = document.querySelector("#list-section");
}

// Adicionar Card na tela
export function addCard(address) {
    const card = createCard(address);
    state.listSection.appendChild(card);
}

function createCard(address) {
    // Criar a div
    const div = document.createElement("div");

    // Adicionar a classe
    div.classList.add("card-list-item");
    
    // Adicionar H3
    const h3 = document.createElement("h3");
    // Colocar a cidade dentro do H3
    h3.innerHTML = address.city;

    // Linha do Endereço
    const line = document.createElement("p");
    line.classList.add("address-line");
    line.innerHTML = `${address.street}, ${address.number}`;

    const cep = document.createElement("p");
    cep.classList.add("address-cep");
    cep.innerHTML = address.cep;

    // Adicionar tudo na div
    div.appendChild(h3);
    div.appendChild(line);
    div.appendChild(cep);

    // Retornar o div montado
    return div;
}