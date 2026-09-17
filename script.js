/* --- 5. EFEITOS VISUAIS (NOISE / VHS) --- */

function iniciarEfeitoVisual() {
    const canvas = document.getElementById("noiseCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Ajusta o tamanho do canvas para cobrir a janela
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    // Loop de animação
    function loop() {
        const w = canvas.width;
        const h = canvas.height;
        
        // Cria uma imagem vazia
        const idata = ctx.createImageData(w, h);
        
        // Acessa os pixels diretamente (muito mais rápido)
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
            if (Math.random() < 0.1) { // 10% de chance de um pixel acender
                // Cor: Cinza claro com opacidade total (o CSS controla a transparência final)
                // Formato Hex Little Endian: Alpha Blue Green Red (0xff = 255)
                buffer32[i] = 0xff808080; 
            }
        }

        ctx.putImageData(idata, 0, 0);
        requestAnimationFrame(loop);
    }

    loop();
}

/* ==========================================================================
   KODOKU NO YAMI - ENGINE FINAL (V8 - Com Sustos/Sons por Cena)
   ========================================================================== */

/* --- 1. CONFIGURAÇÕES E REFERÊNCIAS --- */

const elementosAudio = {
    bgMusic: document.getElementById('bg-music'),
    sfxPlayer: document.getElementById('sfx-player'), // Usado para intro e SUSTOS
    sfxClick: document.getElementById('sfx-btn-click')
};

const caminhosAudio = {
    menu: "audio/bg-horror-1.mp3"
};

/* --- 2. BANCO DE DADOS DA HISTÓRIA --- */
const bancoDeCapitulos = {
    1: {
        titulo: "O Hospital de Setembro",
        bgm: "audio/chuva-bg-capitulo.mp3", 
        intro_sons: [
            "audio/passos-intro.wav",
            "audio/porta-abrindo-intro.wav",
            "audio/respiração-intro.wav",
            "audio/grito-intro.wav"
        ],
        roteiro: {
            "inicio": {
                texto: "O quarto está mergulhado em uma penumbra fria. Neste momento, só existe a luz de meu monitor e o som da forte chuva lá fora. Estou isolada há semanas descendo a espiral do fórum Kowa-Ito - 怖糸 de lendas urbanas, onde frequentemente posto os vídeos que faço visitando os lugares abandonados.",
                imagem: "img/cena_1.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-2" } ]
            },
            "cena-2": {
                texto: "Kowa-Ito - 怖糸 significa fio do medo, sendo uma relação direta com o fio vermelho, talvez? Fiquei sabendo de uma antiga lenda chamada  Akai Ito - 赤い糸 , que se relaciona com a conexão e o destino das pessoas. Será que todos nós temos um fio vermelho conectado em alguém com quem temos uma forte conexão? Ás vezes sinto que esse fio me conecta a esses lugares abandonados",
                imagem: "img/cena_2.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-3" } ]
            },
            "cena-3": {
                texto: "O tópico chamado “O Hospital Kuwashina 清水沢” brilha em meus olhos e instantaneamente surge o desejo de visitá-lo. Comecei a pesquisar sobre: Seu endereço é localizado nas coordenadas 43.055402, 141.973047, cerca de 6 minutos da minha casa. Desligo o meu monitor,  mas tudo que vem em minha mente é o lugar assombrando. Porém percebo que ainda não me banhei. Me levanto devagar, pego uma roupa limpa e vou ao banheiro.",
                imagem: "img/cena_3.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-4" } ]
            },
            "cena-4": {
                /*som_extra: "audio/hanako-na-banheira.mp3",*/
                
                texto: "Entro no banheiro e encaro a banheira antiga de madeira se enchendo de água. O barulho me agrada, estou apenas a observar e esperar. Deixo a roupa cair no chão e logo entro na banheira, está quente, aliviando um pouco do frio que sentia. Me levanto e piso no chão, gelado, assim visto minha roupa e me dirijo ao meu quarto.",
                imagem: "img/cena_4.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-5" } ]
            },
            "cena-5": {
                texto: "Acabo de voltar ao meu quarto e me deito. A vontade que sinto em visitar lugares abandonados e assustadores, é prazeroso. Gosto da adrenalina, gosto do paranormal, gosto do proibido. A sensação sufocante que domina o ar desses lugares é o que me faz querer viver para visitar mais lugares, cada vez mais sombrios e sufocantes. Então estou decidida, eu preciso ir. Sinto um frio no estômago e uma vontade incontrolável de ir até lá o mais rápido possível, vou amanhã. Estou cansada, fecho meus olhos e durmo.",
                imagem: "img/cena_5.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-6" } ]
            },
            "cena-6": {
                som_extra: "audio/hanako-levantando-cama.mp3",
                
                texto: "O dia amanhece, acordo e dou um suspiro... estou ansiosa. O dia finalmente chegou! Me levanto, logo visto meu uniforme escolar e desço as escadas de minha casa. ",
                imagem: "img/cena_6.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-7" } ]
            },
            "cena-7": {
                texto: "Cumprimento meus pais, porém suas vozes pareciam vir debaixo d'água, minha mente está focada em hoje á noite. Me sento no degrau da escada e deslizo a meia de algodão pela pele fria, coloco meu sapato e saio para a escola.",
                imagem: "img/cena_7.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-8" } ]
            },
            "cena-8": {
                texto: "Finalmente! Rapidamente saio desta maldita escola, estou livre. Me direciono a avenida logo à frente da escola e espero minha condução para casa.",
                imagem: "img/cena_8.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-9" } ]
            },
            "cena-9": {
                texto: "Saio de casa e percebo que está escuro, uma bela noite sombria.  Ao chegar em casa, corro para o meu quarto e pego minha câmera e minha lanterna. É tudo que eu preciso.",
                imagem: "img/cena_9.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-10" } ]
            },
            "cena-10": {
                texto: "Esperei o táxi na avenida de casa, ele chega rapidamente. Pedi para que me levasse ao local do hospital abandonado. Durante o caminho não consigo parar de imaginar: Como é? Tem fantasmas? Sinto um arrepio.",
                imagem: "img/cena_10.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-11" } ]
            },
            "cena-11": {
                som_extra: "audio/cena-11-audio.mp3",
                
                texto: "Logo desço do carro e me deparo com ele, finalmente... O hospital abandonado. Ouço um silencio, um vazio. Apenas o som dos grilos e dos morcegos, parece até que a cidade está vazia, apenas eu e minha alma. A encaro, a princípio parece um pouco pequeno, suas paredes estão descascadas, sua aparência... é perfeita. Logo adentro o lugar, seu ar é realmente muito denso e consigo sentir presenças em todos os cantos. São as pessoas que aqui sofreram? E aqui morreram? Também fiquei sabendo que existia uma ala psiquiátrica no segundo andar, indecisa me questiono se devo ir diretamente a ela ou começar pelo primeiro andar?",
                video: "img/cena_11.mp4",
                opcoes: [ 
                    { texto: "▶ PRIMEIRO ANDAR", proximo: "cena-12" },
                    { texto: "▶ SEGUNDO ANDAR (em breve)", proximo: "futuro" }
                ]
            },
            "cena-12": {
                texto: "Então decido começar pelo primeiro andar, estou no que parece ser a recepção do hospital, o lugar se encontra totalmente bagunçado, parece que foi abandonado ainda com todos os objetos aqui dentro, isso me causa arrepios. Decido seguir em um corredor logo a frente. ",
                imagem: "img/cena_12.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-13" } ]
            },
            "cena-13": {
                texto: "Sigo para o corredor, o teto está caindo, lugar se encontra quase em ruínas, sinto um forte cheiro de poeira, o que irrita um pouco meu nariz. Observar todos esses objetos hospitalares me trazem uma sensação estranha, foram realmente usados em pessoas reais e hoje estão aqui abandonados. Será que eles não carregariam uma linda história de alguém? Observo cada detalhe desse corredor, estou concentrada, quero saber mais sobre esse lugar.",
                imagem: "img/cena_13.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-14" } ]
            },
            "cena-14": {
                som_extra: "audio/cena-13-primeiro-andar-susto.mp3",

                texto: "O que é isso? Parece o barulho de algo caindo! Será que tem mais gente aqui? Já andei bastante e nem me atentei que a entrada do hospital está longe. Pode ser alguém ou apenas alguma lâmpada velha que caiu do teto. Tomada pela ansiedade me deparo com duas escolhas, ir em direção ao som para saber se estou segura, ou se devo esconder-me.",
                imagem: "img/cena_14.png",
                opcoes: [ { texto: "▶ INVESTIGAR", proximo: "cena-15" },
                          {  texto: "▶ ESCONDER-SE", proximo: "cena-21" }
                ]
            },
            "cena-15": {
                texto: "Então decidi investigar. Começo a andar e sigo até o final do corredor. Vou em direção ao som, eu preciso saber o que aconteceu aqui. Achei uma escada mas acho que o barulho não veio de cima.",
                imagem: "img/cena_15.jpg",
                opcoes: [ { texto: "▶ O som veio daqui.", proximo: "cena-16" } ]
            },
            "cena-16": {
                som_extra: "audio/coracao-normal.mp3",

                texto: "Olho para o lado e vejo um banheiro, será que o barulho veio daqui? Sinto que estou sendo observada a todo momento, não estou com um bom pressentimento.",
                imagem: "img/cena_16.png",
                opcoes: [ { texto: "▶ É só um banheiro vazio...", proximo: "cena-17" } ]
            },
            "cena-17": {
                som_extra: "audio/cena-17-audio.mp3",

                texto: "A lanterna treme levemente em minha mão. Ouço barulho de passos, como se algo estivesse me perseguindo. Sinto novamente aquela sensação estranha…",
                imagem: "img/cena_17.png",
                opcoes: [ { texto: "▶ Isso não vai me deixar em paz...", proximo: "cena-18" },
                          { texto: "▶ Não olha. Não agora.", proximo: "futuro2" }
                ]
            },
            "cena-18": {
                som_extra: "audio/coracao-acelerado.mp3",

                texto: "Dou um passo à frente... o som para. Algo se move na escuridão, alto demais, perto demais. Meu corpo trava. Não consigo gritar. Não consigo correr. Só consigo olhar.",
                imagem: "img/cena_18.png",
                opcoes: [ { texto: "▶ Está me olhando...", proximo: "cena-19" } ]
            },
            "cena-19": {
                texto: "Vejo uma silhueta humana no fim do corredor. Está parada. Imóvel. Meu coração dispara. Então começo a correr e a figura se move rápido demais para ser real. O som de passos correndo ecoa em minha direção. Ao chegar no final do corredor minhas pernas travam... Não consigo me mexer, por quê? O que está acontecendo comigo? Escuto os passos cada vez mais rápidos e mais fortes. Meu corpo se encontra totalmente imóvel, estou em desespero. Até que paro de ouvir os barulhos de passos e sinto uma forte respiração em minha nuca, este ser está logo atrás de mim. Minha lanterna cai, minha câmera cai e sinto minhas pernas saindo do chão, estou ficando sem fôlego, eu acho... que é meu fim...",
                imagem: "img/cena_19.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-20" } ]
            },
            "cena-20": {
                som_extra: "audio/cena-20-audio.mp3",

                texto: "A câmera cai no chão, ainda gravando. A imagem fica torta, captando apenas minhas pernas saindo do chão. O áudio capta minha respiração sufocada, não pude ao menos gritar por ajuda, e então silêncio. A fita continua rodando por alguns segundos antes de se encerrar sozinha. FINAL RUIM 2: HANAKO FOI INVESTIGAR O SOM",
                imagem: "img/cena_20.png",
                opcoes: [ { texto: "▶ SEM SINAL", proximo: "SAIR_PARA_CAPITULOS" } ]
            },
            "cena-21": {
                texto: "Minha melhor opção foi seguir para a porta mais próxima. Me abaixei, desliguei a lanterna e fiquei em total silêncio, tentando ouvir qualquer outro ruído. Precisava saber se era alguém ou apenas algum objeto velho caindo sem motivo. Fiquei ali parada por alguns minutos, até sentir que estava sozinha e segura novamente.",
                imagem: "img/cena_21.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-22" } ]
            },
            "cena-22": {
                texto: "Me sentindo um pouco mais segura, resolvo explorar as salas próximas de onde eu estava escondida. Alguns acessos são perigosos, com tetos desabando e pilhas de metal enferrujado bloqueando o caminho. Decido entrar nesta sala com a cortina rosa. Estranhamente, ela é a única coisa que destoa dos outros objetos, e até do hospital inteiro. Parece limpa... como se alguém a tivesse colocado aqui recentemente, após anos de abandono. Olho ao redor, levanto minha câmera e...",
                imagem: "img/cena_22.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-23" } ]
            },
            "cena-23": {
                texto: "Encontro uma caixa antiga, selada com cordas grossas. O ofuda no topo diz “悪魔豪鬼“ - 'Akuma Gouki'... Demônio Ogro? Se eu não estiver errada na leitura, isso é algum tipo de item de ritual. Tenho certeza que tem ligação com aquela cortina rosa impecável. Minha cabeça está a mil! O pessoal do fórum vai pirar quando vir isso. Estou ficando bem animada, preciso tirar foto e gravar tudo. Será que eu abro a caixa?",
                video: "img/cena_23.mp4",
                opcoes: [ { texto: "▶ Abrir a caixa...?", proximo: "cena-24" } ]
            },
            "cena-24": {
                texto: "Estou sentindo algo ruim vindo desta caixa, mas não aguento de curiosidade. Solto a câmera e tento abrir a tampa na marra. As cordas atrapalham, mas consigo rasgar o selo o suficiente para espiar. Ilumino a fresta e... decepção. A caixa parece vazia. Que bizarro. Tanto mistério, um selo de demônio, e nada dentro?  Estou muito confusa, mas tive um pensamento assustador: a energia ruim que estava dentro da caixa escapou e agora está aqui comigo. Melhor sair deste quarto o quanto antes.",
                imagem: "img/cena_24.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-25" } ]
            },
            "cena-25": {
                texto: "Ao sair da sala da cortina e da caixa estranha, antes mesmo de ligar a minha lanterna novamente, me deparo com dois homens ao fim do corredor. Minha barriga congela, meu coração quase salta pela boca. Minha melhor opção aqui é andar em silêncio no lado oposto do corredor para sair da vista deles.",
                imagem: "img/cena_25.png",
                opcoes: [ { texto: "▶ Cuidado...", proximo: "cena-26" } ]
            },
            "cena-26": {
                texto: "Saio bem devagar para o outro lado do corredor em busca de sair viva, tomando o máximo de cuidado para não fazer nenhum barulho, pois eu não sei quais são as intenções desses dois. Só sei que não devem ser boas.",
                imagem: "img/cena_26.png",
                opcoes: [ { texto: "▶ Não faça barulho", proximo: "cena-27" } ]
            },
            "cena-27": {
                texto: "Com tantos pensamentos passando pela minha cabeça, acabo me descuindo e piso sem querer em um pedaço de vidro que estava do meu lado e...",
                imagem: "img/cena_27.png",
                opcoes: [ { texto: "▶ ...", proximo: "cena-28" } ]
            },
            "cena-28": {
                texto: "Me escondo na quina da parede rápido antes de ser vista, mas sei que eles sabem que eu estou aqui, pois o som que eu fiz com o vidro foi bem perto deles. Meu coração está pulando do meu peito de tanto desespero que eu estou sentindo agora, eu não quero ser vista por eles. Meu medo diz para eu sair correndo, enquanto meu consciente diz para sair bem devagar sem fazer barulho, mesmo que eles consigam chegar bem perto de mim. O que eu faço!?",
                imagem: "img/cena_28.png",
                opcoes: [ { texto: "▶ Acho melhor eu correr", proximo: "cena-29" },
                          { texto: "▶ Melhor andar devagar", proximo: "cena-35" }
                ]
            },
            "cena-29": {
                texto: "Saio correndo procurando uma saída, eu não quero ser pega, só quero ir para casa o mais rápido possível.",
                imagem: "img/cena_29.png",
                opcoes: [ { texto: "▶ procurar uma saída, rápido!", proximo: "cena-30" } ]
            },
            "cena-30": {
                texto: "Vejo uma sala com uma porta semi aberta, entro o mais rápido possível. Se não for uma saída, espero pelo menos me esconder e despistar aqueles dois.",
                imagem: "img/cena_30.png",
                opcoes: [ { texto: "▶ Preciso me esconder", proximo: "cena-31" } ]
            },
            "cena-31": {
                texto: "Ao passar pela porta, vejo que não é apenas uma sala e não tem saída, eu estou tremendo de medo e estou ficando cansada, se eles me acharem aqui será o meu fim. O meu objetivo agora é apenas se esconder aqui novamente e ficar em silêncio absoluto.",
                imagem: "img/cena_31.png",
                opcoes: [ { texto: "▶ Ficar em silêncio", proximo: "cena-32" } ]
            },
            "cena-32": {
                texto: "Escuto eles andando e vejo a lanterna forte deles pelas frestas da porta, ouço-os falando “vamos barrar ou trancar essas portas, assim ela não vai sair caso ainda esteja aqui”. Até que... ouço um barulho na minha porta, eles a trancaram ou prenderam ela. Agora eu estou presa neste hospital nesta sala velha. O que eu faço!?",
                imagem: "img/cena_32.png",
                opcoes: [ { texto: "▶ ...", proximo: "cena-33" } ]
            },
            "cena-33": {
                texto: "Encosto na parede, sento no chão e começo a chorar de desespero e tristeza, já estou sem esperanças de sair deste hospital viva...",
                imagem: "img/cena_33.png",
                opcoes: [ { texto: "▶ Sem esperanças...", proximo: "cena-34" } ]
            },
            "cena-34": {
                som_extra: "audio/cena-34-audio.mp3",

                texto: "Você escuta um som de uma janela quebrando. Será que Hanako teve a ideia de quebrar aquela janela da sala em que ela estava e conseguiu fugir? Ou será que ela ficou presa ali para sempre?",
                imagem: "img/cena_34.png",
                opcoes: [ { texto: "▶ Será que eu fugi?", proximo: "SAIR_PARA_CAPITULOS" } ]
            },
            "cena-35": {
                texto: "Entro na sala ao lado e vou em busca de uma saída ou apenas para me distanciar desses dois estranhos. Eu não quero ser vista, então eu estou andando bem devagar com a lanterna apagada.",
                imagem: "img/cena_35.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-36" } ]
            },
            "cena-36": {
                texto: "Estou começando a me sentir segura novamente e ligo a minha lanterna para onde eu estou pisando. A cada passo sinto como se o hospital estivesse aumentando de tamanho, com mais salas e mais corredores. Pode ser apenas a minha mente pregando peças, preciso ficar calma para não chamar a atenção deles dois novamente.",
                imagem: "img/cena_36.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-37" } ]
            },

            "cena-37": {
                texto: "Após alguns minutos sentada neste banheiro escutando cada som deste hospital, começo a me sentir segura novamente e crio coragem para me levantar e sair deste pesadelo de uma vez por todas. O problema é que eu ainda continuo sentindo uma energia ruim, a mesma energia ruim que eu senti ao tentar abrir aquela caixa na sala da cortina rosa. Isso é muito estranho. Bem, melhor eu sair daqui logo.",
                imagem: "img/cena_37.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-38" } ]
            },

            "cena-38": {
                texto: "Ao seguir no corredor à frente, vejo uma silhueta humana no fim do corredor. Está parada. Imóvel. Meu coração dispara. Então começo a correr e a figura se move rápido demais para ser real. O som de passos correndo ecoa em minha direção. Ao chegar no final corredor minhas pernas travam... Não consigo me mexer, por quê? O que está acontecendo comigo? Escuto os passos cada vez mais rápidos e mais fortes. Meu corpo se encontra totalmente imóvel, estou em desespero. Até que paro de ouvir os barulhos de passos e sinto uma forte respiração em minha nuca, este ser está logo atrás de mim. Minha lanterna cai, minha câmera cai e sinto minhas pernas saindo do chão, estou ficando sem fôlego, eu acho... que é meu fim...",
                imagem: "img/cena_38.png",
                opcoes: [ { texto: "▶ AVANÇAR", proximo: "cena-39" } ]
            },

            "cena-39": {
                som_extra: "audio/cena-20-audio.mp3",

                texto: "A câmera cai no chão, ainda gravando. A imagem fica torta, captando apenas minhas pernas saindo do chão. O áudio capta minha respiração sufocada, não pude ao menos gritar por ajuda, e então silêncio. A fita continua rodando por alguns segundos antes de se encerrar sozinha.",
                imagem: "img/cena_39.png",
                opcoes: [ { texto: "▶ SEM SINAL", proximo: "SAIR_PARA_CAPITULOS" } ]
            },

//          "exemplo": {
//              som_extra: "audio/audio-aqui.mp3",
//
//              texto: "texto aqui",
//              imagem: "img/imagem-aqui.png",
//              opcoes: [ { texto: "▶ botao", proximo: "proxima cena" } ]
//          },            
        }
    },
    2: {
        titulo: "Capítulo 2",
        bgm: "audio/vento-caverna.mp3", 
        intro_sons: [
            "audio/trem-passando.wav", 
            "audio/coruja-longe.wav"
        ],
        roteiro: {
            "inicio": {
                texto: "Este é o capítulo 2. Se você está lendo isso, o sistema de save funcionou!",
                imagem: "",
                opcoes: [ { texto: "Voltar", proximo: "SAIR_PARA_CAPITULOS" } ]
            }
        }
    }
};

// Variáveis de Estado
let estadoJogo = {
    capituloAtualId: 0,
    dadosCapitulo: null,
    volumeMenu: 0.15,
    volumeAmbiente: 0.5,
    progressoMaximo: 1, 
    velocidadeTexto: 50,
    intervaloDigitacao: null,
    textoAtualCompleto: "",
    indiceIntro: 0,
    timerAviso: null,
    timerIntro: null
};

/* --- 3. SISTEMA DE SAVE --- */

function carregarProgresso() {
    const save = localStorage.getItem("kodoku_save_level");
    if (save) {
        estadoJogo.progressoMaximo = parseInt(save);
    } else {
        estadoJogo.progressoMaximo = 1;
    }
    atualizarVisualCadeados();
}

function salvarProgresso(nivel) {
    if (nivel > estadoJogo.progressoMaximo) {
        estadoJogo.progressoMaximo = nivel;
        localStorage.setItem("kodoku_save_level", nivel);
        atualizarVisualCadeados();
    }
}

function atualizarVisualCadeados() {
    // Começa do capítulo 2 e vai tentando encontrar botões até o infinito (ou até acabar os botões)
    let i = 2;
    while (true) {
        // Tenta achar o botão e a imagem correspondente no HTML
        const btn = document.getElementById(`btn-cap-${i}`);
        const img = document.getElementById(`img-cap-${i}`);
        const txt = document.getElementById(`titulo-cap-${i}`);

        // Se não existir botão para esse número (ex: btn-cap-4 não existe), o loop para.
        if (!btn) break;

        // Se o progresso máximo do jogador for maior ou igual a esse capítulo 'i'
        if (estadoJogo.progressoMaximo >= i) {
            
            // 1. Remove o cadeado (visual CSS)
            btn.classList.remove("locked");
            
            // 2. Troca a imagem para a porta aberta (se a imagem existir)
            if (img) {
                img.src = "img/door-8-512.png"; 
            }

            // 3. Atualiza o título pegando direto do Banco de Dados (se existir lá)
            if (txt && bancoDeCapitulos[i]) {
                txt.innerText = bancoDeCapitulos[i].titulo;
            } else if (txt) {
                txt.innerText = `Capítulo ${i}`; // Fallback genérico
            }
        }
        
        // Prepara para verificar o próximo (2... 3... 4...)
        i++;
    }
}

/* --- 4. SISTEMA DE NAVEGAÇÃO --- */

function changeScreen(screenId) {
    playClickSound();

    if (screenId !== 'game-play') {
        pararTudoDoJogo();
        garantirMusicaMenu();
    }

    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });
    
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active');
    }
}

function voltarAoMenu() {
    changeScreen('game-menu');
}

function pararTudoDoJogo() {
    if (estadoJogo.intervaloDigitacao) clearInterval(estadoJogo.intervaloDigitacao);
    if (estadoJogo.timerAviso) clearTimeout(estadoJogo.timerAviso);
    if (estadoJogo.timerIntro) clearTimeout(estadoJogo.timerIntro);
    if (elementosAudio.sfxPlayer) elementosAudio.sfxPlayer.pause();
}

/* --- 5. SISTEMA DE ÁUDIO --- */

function playClickSound() {
    if (elementosAudio.sfxClick) {
        elementosAudio.sfxClick.currentTime = 0;
        elementosAudio.sfxClick.volume = 0.8;
        elementosAudio.sfxClick.play().catch(()=>{});
    }
}

function garantirMusicaMenu() {
    const bg = elementosAudio.bgMusic;
    if (!bg) return;

    const srcAtual = decodeURIComponent(bg.src);
    if (!srcAtual.includes(caminhosAudio.menu)) {
        bg.src = caminhosAudio.menu;
        bg.volume = estadoJogo.volumeMenu;
        bg.loop = true;
        bg.load();
        bg.play().catch(()=>{});
    } else {
        bg.volume = estadoJogo.volumeMenu;
        if (bg.paused) bg.play().catch(()=>{});
    }
}

function ajustarVolumeMenu(valor) {
    document.getElementById("vol-menu-display").innerText = valor;
    estadoJogo.volumeMenu = valor / 100;
    
    const telaAtual = document.querySelector('.screen.active');
    if (telaAtual && telaAtual.id !== 'game-play') {
        elementosAudio.bgMusic.volume = estadoJogo.volumeMenu;
    }
}

function ajustarVolumeAmbiente(valor) {
    estadoJogo.volumeAmbiente = valor / 100;
    
    const telaAtual = document.querySelector('.screen.active');
    if (telaAtual && telaAtual.id === 'game-play') {
        elementosAudio.bgMusic.volume = estadoJogo.volumeAmbiente;
    }
}

/* --- 6. ENGINE DA HISTÓRIA --- */

function selecionarCapitulo(num) {
    playClickSound();

    if (num > estadoJogo.progressoMaximo) {
        alert(`🔒 Capítulo Bloqueado!\n\nComplete o Capítulo ${num - 1} primeiro.`);
        return;
    }

    if (bancoDeCapitulos[num]) {
        estadoJogo.capituloAtualId = num;
        estadoJogo.dadosCapitulo = bancoDeCapitulos[num];

        document.querySelector("#intro-titulo").innerHTML = `CAPÍTULO ${num}<br><span style="font-size: 0.6em">${estadoJogo.dadosCapitulo.titulo}</span>`;
        
        changeScreen('game-play');
        document.getElementById("intro-overlay").classList.remove("hidden");
        document.getElementById("game-ui").classList.add("hidden");
        document.getElementById("btn-start-game").classList.add("hidden");
        document.getElementById("intro-titulo").classList.add("hidden");
        document.getElementById("btn-skip-intro").style.display = "block";

        if (elementosAudio.bgMusic) {
            elementosAudio.bgMusic.pause();
            elementosAudio.bgMusic.currentTime = 0;
        }

        estadoJogo.indiceIntro = 0;
        estadoJogo.timerAviso = setTimeout(() => { iniciarFaseAviso(); }, 1000);
    }
}

function iniciarFaseAviso() {
    const aviso = document.getElementById("aviso-fones");
    aviso.classList.add("fade-in");
    
    estadoJogo.timerAviso = setTimeout(() => {
        aviso.classList.remove("fade-in");
        estadoJogo.timerAviso = setTimeout(() => { tocarSequenciaIntro(); }, 3000);
    }, 6000);
}

function tocarSequenciaIntro() {
    const player = elementosAudio.sfxPlayer;
    const listaSons = estadoJogo.dadosCapitulo.intro_sons;

    if (listaSons && estadoJogo.indiceIntro < listaSons.length) {
        player.src = listaSons[estadoJogo.indiceIntro];
        player.volume = 1.0;
        player.play();
        estadoJogo.indiceIntro++;
        player.onended = function() {
            estadoJogo.timerIntro = setTimeout(() => { tocarSequenciaIntro(); }, 1000);
        };
    } else {
        animarTituloFinal();
    }
}

function pularAbertura() {
    if (elementosAudio.sfxPlayer) {
        elementosAudio.sfxPlayer.pause();
        elementosAudio.sfxPlayer.currentTime = 0;
        elementosAudio.sfxPlayer.onended = null;
    }
    if (estadoJogo.timerAviso) clearTimeout(estadoJogo.timerAviso);
    if (estadoJogo.timerIntro) clearTimeout(estadoJogo.timerIntro);

    const aviso = document.getElementById("aviso-fones");
    if (aviso) {
        aviso.classList.remove("fade-in");
        aviso.style.opacity = 0;
    }
    animarTituloFinal();
}

function animarTituloFinal() {
    document.getElementById("btn-skip-intro").style.display = "none";
    const titulo = document.getElementById("intro-titulo");
    const botao = document.getElementById("btn-start-game");
    
    titulo.classList.remove("hidden");
    setTimeout(() => { titulo.classList.add("fade-in"); }, 100);
    setTimeout(() => {
        titulo.classList.remove("fade-in");
        setTimeout(() => {
            titulo.classList.add("hidden");
            botao.classList.remove("hidden");
        }, 3000);
    }, 6000);
}

function iniciarJogoReal() {
    playClickSound();
    document.getElementById("intro-overlay").classList.add("hidden");
    document.getElementById("game-ui").classList.remove("hidden");

    const bg = elementosAudio.bgMusic;
    const musicaCapitulo = estadoJogo.dadosCapitulo.bgm;

    if (musicaCapitulo) {
        bg.pause();
        bg.currentTime = 0;
        bg.src = musicaCapitulo;
        bg.volume = estadoJogo.volumeAmbiente;
        bg.loop = true;
        bg.load();
        const playPromise = bg.play();
        if (playPromise !== undefined) playPromise.catch(e => console.log(e));
    }

    mostrarCena("inicio");
}

/* Substitua sua função mostrarCena por esta atualizada */
function mostrarCena(cenaId) {
    if (cenaId === "SAIR_PARA_CAPITULOS") {
        const proximoNivel = estadoJogo.capituloAtualId + 1;
        salvarProgresso(proximoNivel); 
        alert(`CAPÍTULO ${estadoJogo.capituloAtualId} FINALIZADO!\n\nProgresso salvo.\nO Capítulo ${proximoNivel} foi desbloqueado.\nJogue os outros finais deste capítulo antes de seguir em frente.`);
        changeScreen('game-chapters');
        return;
    }

    if (cenaId === "FIM_CAPITULO_1") {
        salvarProgresso(2);
        alert("🔓 Capítulo 2 Desbloqueado!");
        changeScreen('game-chapters');
        return;
    }

    const cena = estadoJogo.dadosCapitulo.roteiro[cenaId];
    if (!cena) return;

    // --- REFERÊNCIAS VISUAIS ---
    const imgElement = document.getElementById("cena-imagem");
    const videoElement = document.getElementById("cena-video");
    const btnReplay = document.getElementById("btn-replay");

    // Reset inicial: Esconde o botão de replay sempre que mudar de cena
    if (btnReplay) btnReplay.classList.add("hidden");

    // --- LÓGICA VÍDEO vs IMAGEM ---
    if (cena.video) {
        imgElement.classList.add("hidden");
        videoElement.classList.remove("hidden");
        
        videoElement.src = cena.video;
        videoElement.loop = false; // Garante que não vai loopar
        
        // Tenta dar play
        videoElement.play().catch(e => console.log("Erro autoplay:", e));

        // QUANDO O VÍDEO ACABAR: Mostra o botão
        videoElement.onended = function() {
            btnReplay.classList.remove("hidden");
        };

    } else {
        // Se for imagem normal
        videoElement.pause();
        videoElement.classList.add("hidden");
        imgElement.classList.remove("hidden");
        imgElement.src = cena.imagem || "";
        
        // Garante que o botão replay não apareça em fotos
        btnReplay.classList.add("hidden");
    }

    // --- RESET DE ÁUDIO (SFX) ---
    if (elementosAudio.sfxPlayer) {
        elementosAudio.sfxPlayer.pause();
        elementosAudio.sfxPlayer.currentTime = 0;
    }

    // --- SOM EXTRA (SUSTOS) ---
    if (cena.som_extra && elementosAudio.sfxPlayer) {
        elementosAudio.sfxPlayer.src = cena.som_extra;
        elementosAudio.sfxPlayer.volume = 1.0;
        elementosAudio.sfxPlayer.loop = false;
        elementosAudio.sfxPlayer.play().catch(e => console.log(e));
    }

    // --- TEXTO E OPÇÕES ---
    estadoJogo.textoAtualCompleto = cena.texto;
    digitarTexto(cena.texto);

    const container = document.getElementById("opcoes-container");
    container.innerHTML = "";
    
    cena.opcoes.forEach(opcao => {
        const btn = document.createElement("button");
        btn.innerText = opcao.texto;
        btn.className = "btn-escolha";
        btn.onclick = () => {
            playClickSound();
            mostrarCena(opcao.proximo);
        };
        container.appendChild(btn);
    });
}

// --- NOVA FUNÇÃO PARA O BOTÃO REPLAY ---
function replayVideo() {
    const videoElement = document.getElementById("cena-video");
    const btnReplay = document.getElementById("btn-replay");

    if (videoElement) {
        btnReplay.classList.add("hidden"); // Esconde o botão
        videoElement.currentTime = 0;      // Volta pro início
        videoElement.play();               // Toca de novo
    }
}


function digitarTexto(texto) {
    const el = document.getElementById("texto-historia");
    const btnPular = document.getElementById("btn-pular");
    
    el.innerHTML = "";
    if (estadoJogo.intervaloDigitacao) clearInterval(estadoJogo.intervaloDigitacao);

    if (btnPular) btnPular.style.display = "block";

    let i = 0;
    estadoJogo.intervaloDigitacao = setInterval(() => {
        el.innerHTML += texto.charAt(i);
        el.scrollTop = el.scrollHeight;
        i++;
        if (i >= texto.length) {
            clearInterval(estadoJogo.intervaloDigitacao);
            if (btnPular) btnPular.style.display = "none";
        }
    }, estadoJogo.velocidadeTexto);
}

function pularDigitacao() {
    if (estadoJogo.intervaloDigitacao) {
        clearInterval(estadoJogo.intervaloDigitacao);
    }

    const el = document.getElementById("texto-historia");
    const btnPular = document.getElementById("btn-pular");

    el.innerHTML = estadoJogo.textoAtualCompleto;
    el.scrollTop = 0;

    if (btnPular) {
        btnPular.style.display = "none";
    }
}

function mudarVelocidade(val) {
    estadoJogo.velocidadeTexto = parseInt(val);
}

/* --- 7. VISUAL E INICIALIZAÇÃO --- */

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(()=>{});
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
    }
}

function iniciarEfeitoVisual() {
    const canvas = document.getElementById("noiseCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    window.addEventListener("resize", resize);
    resize();
    function loop() {
        const idata = ctx.createImageData(canvas.width, canvas.height);
        const buffer32 = new Uint32Array(idata.data.buffer);
        for (let i = 0; i < buffer32.length; i++) {
            if (Math.random() < 0.1) buffer32[i] = 0xff808080;
        }
        ctx.putImageData(idata, 0, 0);
        requestAnimationFrame(loop);
    }
    loop();
}

document.addEventListener("DOMContentLoaded", () => {
    iniciarEfeitoVisual();
    carregarProgresso();
    
    document.body.addEventListener('click', () => {
        garantirMusicaMenu();
    }, { once: true });
});

// Bloqueia o menu de contexto (botão direito) no site inteiro
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Opcional: Bloqueia alguns atalhos de teclado comuns para salvar/inspecionar (Ctrl+S, Ctrl+U, F12)
// Nota: F12 é difícil de bloquear em todos os navegadores, mas isso ajuda.
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 's' || e.key === 'u')) {
        e.preventDefault();
    }
});


/* Loop com fade vídeo background */
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById('bg-video');
    const fadeTime = 0.7; // Tempo do fade em segundos (igual ao CSS)


    video.addEventListener('timeupdate', () => {
        if ((video.duration - video.currentTime) < fadeTime) {
            video.classList.add('fade-out');
        }
    });

    video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
    });

    video.addEventListener('playing', () => {
        video.classList.remove('fade-out');
    });
});

// No seu arquivo script.js

const body = document.body;

// Quando o usuário aperta o botão do mouse
document.addEventListener('mousedown', () => {
    body.classList.add('is-clicking');
});

// Quando o usuário solta o botão do mouse
document.addEventListener('mouseup', () => {
    body.classList.remove('is-clicking');
});
