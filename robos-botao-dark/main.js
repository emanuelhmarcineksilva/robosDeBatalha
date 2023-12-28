const robos = [
    {
        id: 1,
        nome: 'rg4',
        altura: 4,
        habilidades: 'laiser',
        foto: "https://robohash.org/rg4",
    },
    {
        id: 2,
        nome: 'rdf2',
        altura: 2,
        habilidades: 'fumaça',
        foto: "https://robohash.org/rdf2",
    },
    {
        id: 3,
        nome: 'jhw5',
        altura: 5,
        habilidades: 'pulso eletromagnetico',
        foto: "https://robohash.org/jhw5",
    },
    {
        id: 4,
        nome: 'qwf1',
        altura: 1,
        habilidades: 'voar',
        foto: "https://robohash.org/qwf1",
    }
]

const robosSection = document.querySelector('.robos');

const botao = document.querySelector('.btn');

botao.addEventListener('click', () => {
    // O "documentElement" é a propria tag do "html".
    // O códico "toggle" acrescenta se não tiver e se tiver ele tira, como um interupitor de uma lâmpada, se estiver desligado ele liga e se estiver ligado ele desliga.
    document.documentElement.classList.toggle('dark')
})

// O código 'map()' mapeia cada um dos itens dentro do que esta sendo chamado, no caso 'robos', sendo os itens nesse caso objetos.
const todosRobos = robos.map((robos) => {
    return `<div class="robo">
    <p><strong>Nome:</strong> ${robos.nome}</p>
    <img src="${robos.foto}">
    <p><strong>Altura:</strong> ${robos.altura + ' metros'}</p>
    <p><strong>Habilidades:</strong> ${robos.habilidades}</p>
</div>`
});

robosSection.innerHTML = todosRobos;

