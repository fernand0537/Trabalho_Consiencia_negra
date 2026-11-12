// Banco de Dados dos Dossiês das Pioneiras
const dossiesCientistas = {
    katherine: {
        nome: "Katherine Johnson",
        categoria: "Matemática • Ciência Espacial (EUA)",
        periodo: "1918 – 2020 • NACA / NASA",
        imagem: "img/Katherine_Jonson.jfif",
        biografia: "Nascida na Virgínia Ocidental, Katherine Johnson demonstrou habilidades matemáticas extraordinárias desde a infância, formando-se na universidade aos 18 anos. Contratada pela NACA (precursora da NASA) em 1953, destacou-se por sua precisão absoluta em geometria analítica e mecânica orbital em uma época anterior aos computadores eletrônicos modernos.",
        conquistas: [
            "Calculou a trajetória do voo de Alan Shepard em 1961, o primeiro norte-americano no espaço.",
            "Teve seus cálculos manuais solicitados pessoalmente pelo astronauta John Glenn antes do voo orbital Friendship 7 (1962).",
            "Determinou as janelas de lançamento e trajetórias de retorno da histórica missão Apollo 11 à Lua em 1969.",
            "Condecorada com a Medalha Presidencial da Liberdade em 2015."
        ],
        citacao: "“Nós sempre tivemos mulheres fazendo coisas na NASA. Elas simplesmente não eram vistas.” — Katherine Johnson"
    },
    gladys: {
        nome: "Drª. Gladys West",
        categoria: "Matemática • Geodésia Computacional (EUA)",
        periodo: "1930 – Presente • Naval Surface Warfare Center",
        imagem: "img/Gladys_West.jfif",
        biografia: "Filha de agricultores na Virgínia, Gladys West conquistou uma bolsa de estudos para cursar matemática e tornou-se a segunda mulher negra contratada na base naval de Dahlgren, em 1956. Lá, liderou equipes de programação e análise de dados de satélites, criando modelos matemáticos capazes de calcular com extrema precisão o formato irregular da Terra (geoide).",
        conquistas: [
            "Programou o supercomputador IBM 7030 Stretch para processar dados altimétricos de satélites.",
            "Desenvolveu o modelo geodésico da Terra utilizado como alicerce matemático direto para o sistema GPS.",
            "Gerenciou o projeto Seasat, pioneiro no sensoriamento remoto dos oceanos por satélite.",
            "Introduzida no Hall da Fama dos Pioneiros do Espaço e Mísseis da Força Aérea dos EUA em 2018."
        ],
        citacao: "“Quando você está trabalhando todos os dias, não pensa no impacto que aquilo terá no mundo; você apenas quer fazer o cálculo certo.” — Gladys West"
    },
    sonia: {
        nome: "Drª. Sonia Guimarães",
        categoria: "Física • Engenharia de Materiais (Brasil)",
        periodo: "1957 – Presente • Instituto Tecnológico de Aeronáutica (ITA)",
        imagem: "img/Sonia_guimaraes.jfif",
        biografia: "Natural de Brotas (SP), Sonia Guimarães superou barreiras socioeconômicas e raciais para graduar-se em Física pela UFSCar e conquistar seu doutorado na Inglaterra. Em 1993, tornou-se professora do prestigiado Instituto Tecnológico de Aeronáutica (ITA), onde atua na pesquisa de materiais semicondutores e sensores de radiação infravermelha.",
        conquistas: [
            "Primeira mulher negra brasileira a obter o título de Doutora em Física (1989).",
            "Primeira mulher negra a integrar o corpo docente do ITA, inspirando gerações de engenheiros e cientistas.",
            "Pesquisadora especialista em crescimento epitaxial e detecção de radiação infravermelha.",
            "Membro ativa de iniciativas de divulgação científica, equidade racial e incentivo a meninas nas áreas STEM."
        ],
        citacao: "“A ciência precisa da diversidade de olhares. Quando mulheres negras ocupam os laboratórios, todo o país avança.” — Drª. Sonia Guimarães"
    }
};

// Curiosidades Interativas do Museu (sem repetição imediata)
const btnCuriosidade = document.getElementById('btn-curiosidade');
const exibicaoCuriosidade = document.getElementById('exibicao-curiosidade');

const acervoCuriosidades = [
    "🏛️ Curiosidade #1: Antes do voo orbital de 1962, o astronauta John Glenn recusou-se a decolar até que Katherine Johnson conferisse manualmente todos os números gerados pelos computadores eletrônicos IBM.",
    "🏛️ Curiosidade #2: Durante décadas, a própria Drª. Gladys West utilizava mapas de papel em suas viagens de carro, sem imaginar que o GPS moderno dependia diretamente de suas equações dos anos 1970 e 1980.",
    "🏛️ Curiosidade #3: Quando a Drª. Sonia Guimarães começou a dar aulas no ITA, em 1993, as mulheres ainda eram proibidas de prestar o vestibular da instituição — o ingresso feminino só foi liberado anos depois.",
    "🏛️ Curiosidade #4: O termo 'Computador' no século XX referia-se originalmente a uma profissão exercida majoritariamente por mulheres matemáticas que realizavam cálculos complexos à mão.",
    "🏛️ Curiosidade #5: Além da Apollo 11, Katherine Johnson também ajudou a trazer a tripulação da Apollo 13 em segurança de volta à Terra após uma explosão a bordo."
];

let ultimoIndice = -1;

btnCuriosidade.addEventListener('click', () => {
    let indiceSorteado;
    do {
        indiceSorteado = Math.floor(Math.random() * acervoCuriosidades.length);
    } while (indiceSorteado === ultimoIndice);
    
    ultimoIndice = indiceSorteado;
    exibicaoCuriosidade.textContent = acervoCuriosidades[indiceSorteado];
});

// Lógica do Modal Dossiê
const modalDossie = document.getElementById('modal-dossie');
const fecharModal = document.getElementById('fechar-modal');

function abrirDossie(idCientista) {
    const dados = dossiesCientistas[idCientista];
    if (!dados) return;

    document.getElementById('modal-img').src = dados.imagem;
    document.getElementById('modal-img').alt = `Retrato de ${dados.nome}`;
    document.getElementById('modal-categoria').textContent = dados.categoria;
    document.getElementById('modal-titulo').textContent = dados.nome;
    document.getElementById('modal-periodo').textContent = dados.periodo;
    document.getElementById('modal-descricao').textContent = dados.biografia;
    document.getElementById('modal-citacao').textContent = dados.citacao;

    // Preenche a lista de conquistas
    const listaEl = document.getElementById('modal-conquistas');
    listaEl.innerHTML = '';
    dados.conquistas.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listaEl.appendChild(li);
    });

    modalDossie.style.display = 'flex';
}

fecharModal.addEventListener('click', () => {
    modalDossie.style.display = 'none';
});

window.addEventListener('click', (evento) => {
    if (evento.target === modalDossie) {
        modalDossie.style.display = 'none';
    }
});

// Fecha o modal ao pressionar a tecla ESC
window.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && modalDossie.style.display === 'flex') {
        modalDossie.style.display = 'none';
    }
});