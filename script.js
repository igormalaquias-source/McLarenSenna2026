// Array com as 10 curiosidades da McLaren Senna
const curiosidades = [
    {
        titulo: "Homenagem ao Ídolo",
        texto: "O carro foi batizado em homenagem ao tricampeão mundial de Fórmula 1, Ayrton Senna, com a autorização oficial da família Senna."
    },
    {
        titulo: "Produção Ultra Limitada",
        texto: "Apenas 500 unidades foram produzidas no total, e todas foram vendidas antes mesmo do carro ser apresentado oficialmente ao público."
    },
    {
        titulo: "Coração V8 Biturbo",
        texto: "Ele é equipado com um motor 4.0 V8 biturbo que gera impressionantes 800 cavalos de potência e 81,6 kgfm de torque puro."
    },
    {
        titulo: "Leveza Extrema",
        texto: "Graças ao uso massivo de fibra de carbono em todo o chassi e painéis, o carro pesa apenas 1.198 kg, sendo o McLaren de rua mais leve desde o lendário F1."
    },
    {
        titulo: "Downforce Monstruoso",
        texto: "O enorme aerofólio traseiro ativo ajuda o carro a gerar até 800 kg de downforce (pressão aerodinâmica contra o solo) a 250 km/h."
    },
    {
        titulo: "Velocidade de Foguete",
        texto: "A McLaren Senna vai de 0 a 100 km/h em incríveis 2,8 segundos e atinge uma velocidade máxima de 335 km/h."
    },
    {
        titulo: "Portas Transparentes",
        texto: "Como opcional de fábrica, as portas podiam vir com painéis de vidro na parte inferior, permitindo que o piloto veja o asfalto passando sob seus pés."
    },
    {
        titulo: "Escapamento voltado para cima",
        texto: "As saídas de escapamento de titânio saem diretamente na parte superior do motor, direcionando os gases quentes longe da asa traseira para não atrapalhar a aerodinâmica."
    },
    {
        titulo: "Interior Minimalista",
        texto: "Para economizar peso, o interior não tem tapetes, os bancos de fibra de carbono pesam apenas 8 kg cada e a maioria dos comandos fica no teto do carro."
    },
    {
        titulo: "Causa Social",
        texto: "A última unidade produzida (número 500) foi leiloada por 1,91 milhão de libras, e o dinheiro foi revertido diretamente para o Instituto Ayrton Senna."
    }
];

// Função para renderizar os cards na tela
function carregarCuriosidades() {
    const grid = document.getElementById('grid-curiosidades');
    
    curiosidades.forEach((item, index) => {
        // Criar o elemento do card
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Formatar o número para ter sempre dois dígitos (ex: 01, 02...)
        const numeroFormatado = String(index + 1).padStart(2, '0');
        
        // Estrutura interna do card
        card.innerHTML = `
            <div class="card-numero">${numeroFormatado}</div>
            <h3>${item.titulo}</h3>
            <p>${item.texto}</p>
        `;
        
        // Adiciona o card ao grid principal
        grid.appendChild(card);
    });
}

// Executa a função assim que a página carregar
window.addEventListener('DOMContentLoaded', carregarCuriosidades);