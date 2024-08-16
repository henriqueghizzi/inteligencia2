const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que se depara com uma nova rede social que promete proteger seus dados pessoais de forma inovadora, qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Isso parece ótimo! Finalmente uma rede que se preocupa com a privacidade.",
                afirmacao: "Você se sentiu aliviado ao encontrar uma plataforma que valoriza sua privacidade. "
            },
            {
                texto: "Isso parece suspeito. Nenhuma rede social é completamente segura.",
                afirmacao: "Sua desconfiança o levou a pesquisar mais sobre a segurança da plataforma antes de usá-la."
            }
        ]
    },
    {
        enunciado: "Ao instalar um novo aplicativo no seu celular, ele pede acesso a diversas permissões, incluindo sua localização. O que você faz?",
        alternativas: [
            {
                texto: "Concedo todas as permissões. Elas são necessárias para o aplicativo funcionar corretamente.",
                afirmacao: "Você se preocupa mais com a funcionalidade do que com as possíveis invasões de privacidade."
            },
            {
                texto: "Reviso cada permissão e só concedo o que for estritamente necessário.",
                afirmacao: "Você protege seus dados e só permite o acesso mínimo necessário para o aplicativo funcionar."
            }
        ]
    },
    {
        enunciado: "Um e-mail com uma oferta irresistível chega na sua caixa de entrada. Ele pede que você clique em um link para confirmar a oferta. O que você faz?",
        alternativas: [
            {
                texto: "Clico imediatamente, não posso perder essa oportunidade!",
                afirmacao: "Você corre riscos independente da autenticidade do e-mail, as vezes uma ofertinha não faz mal a ninguem, não é?."
            },
            {
                texto: "Verifico a autenticidade do remetente e passo o cursor sobre o link para ver para onde ele leva antes de clicar.",
                afirmacao: "Sua precaução o protege possíveis golpes de phishing."
            }
        ]
    },
    {
        enunciado: "Você está prestes a baixar um software popular, mas descobre que há uma versão gratuita e uma paga. A versão gratuita requer a instalação de vários pacotes adicionais e acesso ao seu histórico de navegação. O que você faz?",
        alternativas: [
            {
                texto: "Opto pela versão gratuita, economizar dinheiro é sempre bom, e não é sempre que tenho dinheiro disponível.",
                afirmacao: "Escolher versões gratuitas até pode ser uma boa opção, mas deve-se verificar ar integridade do software, pois você aceita comprometer sua privacidade em troca de economizar, sem saber como seus dados serão utilizados."
            },
            {
                texto: "Invisto na versão paga para evitar riscos à minha privacidade e dados.",
                afirmacao: "Você prioriza a segurança dos seus dados e investe em uma solução mais segura, evitando possíveis violações de privacidade."
            }
        ]
    },
    {
        enunciado: "Você descobre que seus dados pessoais foram comprometidos em uma violação de segurança de uma grande empresa. O que faz em seguida? ",
        alternativas: [
            {
                texto: "Mudo minhas senhas imediatamente e monitoro de perto minhas contas.",
                afirmacao: "Suas respostas rápidas ajudam a mitigar os danos e proteger suas informações."
            },
            {
                texto: "Ignoro a notícia e espero que não haja consequências.",
                afirmacao: "Ao ignorar situações de riscos, você pode se expor a perigos maiores no futuro."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado Final";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();