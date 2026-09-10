# Kodoku no Yami — 孤独の闇

**Horror psicológico interativo no navegador · Interactive psychological horror in the browser**

[Português (Brasil)](#português-brasil) | [English](#english)

---

## Português (Brasil)

### Sobre o projeto

**Kodoku no Yami** é um projeto autoral de jogo narrativo de horror psicológico e mistério, desenvolvido para rodar diretamente no navegador. A experiência combina leitura, escolhas, imagens, vídeos e ambientação sonora com uma estética de gravação antiga, ruído e scanlines inspirada em VHS.

A interação acontece por botões de avanço e decisão, em um formato próximo de uma visual novel com navegação point-and-click. O foco está na construção de tensão, na exploração narrativa e nas consequências das escolhas.

O desenvolvimento técnico foi realizado individualmente por **William Marques**, com apoio do **ChatGPT**. **Jamili** participou da criação da história e das imagens das cenas, com apoio do **ChatGPT e do Gemini**.

> **Estado atual:** a base funcional do menu principal e do sistema de narrativa está implementada. A história ainda está em produção: alguns finais estão prontos, enquanto outros caminhos precisam de diálogos e imagens para serem concluídos. A interface e a história estão em português brasileiro; a seção em inglês deste README documenta o projeto, mas não representa uma tradução do jogo.

### História e atmosfera

O capítulo 1, **“O Hospital de Setembro”**, acompanha **Hanako**, uma jovem interessada em lugares abandonados e lendas urbanas. Depois de encontrar uma publicação sobre um hospital no fórum **Kowa-Ito — 怖糸**, ela decide visitar o local levando uma câmera e uma lanterna.

O que começa como curiosidade se transforma em uma experiência de isolamento, incerteza e medo. Corredores escuros, sons inesperados e decisões tomadas sob pressão conduzem a narrativa por diferentes caminhos.

A direção visual combina cenários japoneses, tecnologia de aparência retrô, ambientes abandonados e imagens de aspecto fotográfico. O som de chuva, passos, respiração e outros efeitos ajuda a construir a sensação de presença e ameaça.

**Conteúdo:** temas de horror psicológico, perseguição, morte, sustos sonoros e efeitos visuais contínuos de ruído. Ajuste o volume antes de jogar; os efeitos de cena têm volume independente do controle de ambiente.

### Recursos presentes

| Recurso | Implementação atual |
| --- | --- |
| Navegação entre telas | Menu principal, seleção de capítulos, jogo, sobre e configurações. |
| Narrativa ramificada | Cenas conectadas por opções que apontam para a próxima etapa da história. |
| Capítulo 1 | 39 cenas cadastradas e três pontos de encerramento de percurso; algumas alternativas ainda não foram implementadas. |
| Imagens e vídeos | Exibição de mídia conforme a cena; vídeos nas cenas 11 e 23. |
| Replay de vídeo | Botão para repetir o vídeo depois que a reprodução termina. |
| Texto gradual | Efeito de digitação com velocidades lenta, normal e rápida. |
| Pular texto | Exibe imediatamente o texto completo da cena atual. |
| Abertura do capítulo | Aviso sobre fones, sequência de sons e apresentação do título; opção de pular a sequência inicial. |
| Ambientação sonora | Música do menu, chuva durante o capítulo, som de clique e efeitos específicos de cenas. |
| Controle de volume | Ajustes separados para a música do menu e o áudio ambiente do capítulo. |
| Estética VHS | Ruído em Canvas, scanlines em CSS e vídeo de fundo com transição de opacidade. |
| Cursores personalizados | Imagens de cursor para os estados normal e de interação. |
| Tela cheia | Alternância pela Fullscreen API, quando suportada pelo navegador. |
| Progresso local | Registro do nível de capítulo desbloqueado usando `localStorage`. |
| Layout adaptativo | Estilos com Flexbox, Grid, unidades de viewport e media queries. |

Os três pontos de encerramento não significam três histórias totalmente independentes: alguns caminhos compartilham elementos narrativos e desfechos semelhantes.

### Tecnologias

- **HTML5:** estrutura das telas, controles e elementos de áudio e vídeo.
- **CSS3:** identidade visual, animações, sobreposições, responsividade e cursores.
- **JavaScript puro:** navegação, estado do jogo, cenas, escolhas, digitação e reprodução de mídia.
- **Canvas 2D + `requestAnimationFrame`:** geração do ruído visual.
- **Web Storage (`localStorage`):** persistência do desbloqueio de capítulos.
- **Fullscreen API:** modo de tela cheia.
- **Google Fonts, Material Icons e Font Awesome 6.5.1:** fontes e ícones externos.

O projeto é estático: não usa WordPress, backend, banco de dados remoto, framework JavaScript ou etapa de build. Não há instalação de pacotes via npm para executar esta versão. O roteiro está em um objeto JavaScript, dentro de `script.js`, e não em um arquivo JSON separado.

### Estrutura de arquivos

| Caminho | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura da aplicação, telas, botões, configurações e elementos de mídia. |
| `style.css` | Aparência, efeitos VHS, animações, cursores e regras de layout. |
| `script.js` | Roteiro, estado do jogo e lógica de interação. |
| `img/` | Imagens das cenas, vídeos MP4, cursores e ícones. |
| `audio/` | Música, ambientação e efeitos em MP3 e WAV, além de imagens auxiliares de capa. |
| `README.md` | Documentação em português brasileiro e inglês. |

Mantenha as pastas `img/` e `audio/` ao lado de `index.html`, preservando nomes e extensões dos arquivos.

### Como executar localmente

1. Extraia ou baixe o projeto.
2. Abra um terminal na pasta que contém `index.html`, `style.css` e `script.js`.
3. Se tiver Python 3 instalado, inicie um servidor estático local:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Em sistemas que usam o comando `python3`:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

4. Acesse [http://localhost:8000](http://localhost:8000).
5. Para encerrar o servidor, pressione `Ctrl+C` no terminal.

Também é possível servir essa mesma pasta com um servidor de desenvolvimento estático do seu editor. Python é apenas uma opção para servir os arquivos; não faz parte da lógica do jogo.

Use um navegador com JavaScript, áudio e vídeo HTML5 habilitados. Fontes e ícones externos dependem de conexão com a internet. A reprodução de áudio pode exigir uma primeira interação com a página.

### Como jogar

1. No menu, selecione **Começar**.
2. Escolha **Capítulo 1**.
3. Acompanhe a abertura ou use **PULAR ABERTURA**. A apresentação do título ainda acontece antes do botão **INICIAR**.
4. Leia o texto e selecione os botões de avanço ou escolha.
5. Use **Pular Texto** para revelar a cena imediatamente.
6. Ajuste a velocidade de leitura em **Configurações** e o volume ambiente pelo controle dentro do jogo.
7. Ao chegar a um encerramento, use a opção exibida para voltar à seleção de capítulos.

Recomeçar o capítulo permite explorar outros caminhos. Não há, nesta versão, um botão para continuar exatamente da última cena visitada.

### Organização da lógica

A estrutura `bancoDeCapitulos` reúne os dados de cada capítulo:

| Campo | Uso |
| --- | --- |
| `titulo` | Nome mostrado na abertura. |
| `bgm` | Caminho do áudio ambiente. |
| `intro_sons` | Lista de sons reproduzidos na abertura. |
| `roteiro` | Objeto de cenas identificadas por chaves, começando em `inicio`. |

Cada cena contém `texto`, `imagem` ou `video`, um `som_extra` opcional e uma lista `opcoes`. Cada opção usa `texto` como rótulo do botão e `proximo` como destino.

As funções centrais são:

- `changeScreen()`: alterna as telas da aplicação.
- `selecionarCapitulo()`: verifica o desbloqueio e prepara a abertura.
- `iniciarJogoReal()`: inicia a ambientação e carrega `inicio`.
- `mostrarCena()`: atualiza mídia, texto, som e opções.
- `digitarTexto()` e `pularDigitacao()`: controlam a apresentação do texto.
- `salvarProgresso()` e `carregarProgresso()`: mantêm o nível de desbloqueio.

O destino especial `SAIR_PARA_CAPITULOS` salva o nível seguinte e retorna à seleção. Existe também tratamento para `FIM_CAPITULO_1`, embora ele não seja usado pelas opções atuais.

### Como adicionar conteúdo

Para acrescentar uma cena, adicione uma chave única ao `roteiro` do capítulo e conecte uma opção existente a ela. Exemplo ilustrativo, usando uma imagem já presente no projeto:

```javascript
"nova-cena": {
    texto: "Um novo corredor surge diante de mim.",
    imagem: "img/cena_12.png",
    opcoes: [
        { texto: "Continuar", proximo: "outra-cena" }
    ]
}
```

Esse exemplo não deve ser colado isoladamente: ele pertence ao objeto `roteiro`. Crie também o destino `outra-cena`, ou substitua-o pelo identificador de uma cena existente. Para usar vídeo, utilize o campo `video` no lugar de `imagem`. Para um efeito sonoro, acrescente `som_extra` com um caminho válido.

Um novo capítulo precisa de dados em `bancoDeCapitulos`, uma cena `inicio`, mídias disponíveis e um controle correspondente na seleção em `index.html`. O sistema de cadeados procura os identificadores `btn-cap-N`, `img-cap-N` e `titulo-cap-N`, em sequência a partir do capítulo 2.

### Progresso e configurações

A chave **`kodoku_save_level`** registra apenas o maior nível de capítulo desbloqueado no navegador atual. Ela não armazena a cena atual, histórico de escolhas, uma coleção de finais ou progresso em uma conta online.

As configurações de volume e velocidade ficam no estado JavaScript durante a sessão e não são persistidas após recarregar a página. Os finais atuais registram o desbloqueio do capítulo seguinte mesmo que seu botão ainda esteja oculto no HTML.

### Etapa atual de produção

O trabalho principal daqui em diante é concluir o conteúdo narrativo sobre a base funcional existente: escrever os diálogos restantes, criar as imagens e conectar os caminhos aos respectivos finais. A história ainda não deve ser apresentada como concluída.

- **Rotas incompletas:** a cena 11 aponta para `futuro` e a cena 17 para `futuro2`. Esses destinos não estão cadastrados; selecionar essas opções mantém a cena atual, sem mensagem explicativa.
- **Capítulos futuros:** apenas o capítulo 1 aparece na seleção. O capítulo 2 contém um texto de teste e referências a áudios ausentes. Os controles dos capítulos 2 e 3 estão comentados no HTML; não há roteiro de capítulo 3.

<details>
<summary>Notas técnicas de manutenção e compatibilidade</summary>

- **Nome de áudio:** a cena 18 referencia `audio/coracao-acelerado.mp3`, mas o arquivo está salvo como `audio/coracao-acelerado.MP3`. Essa diferença pode impedir o carregamento em ambientes que distinguem maiúsculas e minúsculas.
- **Volume dos efeitos:** o controle ambiente altera a trilha de fundo, não os sustos e sons de cena, que usam volume `1.0` no código. Os cliques usam `0.8`.
- **Acessibilidade e desempenho:** há ajustes de layout, mas a compatibilidade em diferentes dispositivos ainda exige validação. Não existe controle para desativar o ruído ou tratamento de `prefers-reduced-motion`; a seleção de capítulo usa uma `div` clicável sem suporte próprio de teclado.
- **Manutenção:** `iniciarEfeitoVisual()` está declarada duas vezes. Também existe uma imagem provisória com `src="audio/"` nas configurações.

Estas observações são ajustes pontuais e oportunidades de refinamento; não alteram a distinção entre a base funcional implementada e o conteúdo narrativo ainda em produção. A análise dos arquivos não substitui um teste completo de todas as rotas no navegador.

</details>

### Possíveis evoluções

Sugestões de continuidade, sem compromisso de prazo:

- Concluir os caminhos narrativos pendentes e desenvolver os próximos capítulos.
- Adicionar retomada por cena e histórico de finais encontrados.
- Persistir preferências e incluir controle separado de efeitos sonoros.
- Melhorar navegação por teclado e oferecer redução dos efeitos visuais.
- Validar layouts em diferentes telas e otimizar o ruído em Canvas.
- Separar roteiro e lógica em arquivos próprios conforme o projeto crescer.
- Traduzir a interface e a história para inglês.

### Autoria e uso de IA

| Participante | Contribuição |
| --- | --- |
| **William Marques** | Desenvolvimento técnico individual do projeto, com apoio do ChatGPT. |
| **Jamili** | Participação na criação da história e das imagens de cada cena, com apoio do ChatGPT e do Gemini. |
| **ChatGPT** | Ferramenta de apoio ao desenvolvimento e ao processo criativo. |
| **Gemini** | Ferramenta de apoio ao processo de criação das imagens das cenas. |

O projeto reúne desenvolvimento autoral e colaboração criativa entre William e Jamili, com uso declarado de ferramentas de inteligência artificial.

### Licença e créditos de recursos

Esta versão não inclui um arquivo `LICENSE` nem um inventário completo de autoria e licenças de cada recurso de mídia. A tela **Sobre** menciona também o uso de algumas imagens obtidas na internet. Este README não atribui uma licença ao código nem aos arquivos de imagem, vídeo ou áudio.

---

## English

### About the project

**Kodoku no Yami** is an original narrative game project focused on psychological horror and mystery, built to run directly in a web browser. It combines reading, choices, images, videos, and sound design with an old-recording aesthetic featuring VHS-inspired noise and scanlines.

Players interact through progression and choice buttons, in a format close to a visual novel with point-and-click navigation. The experience focuses on building tension, narrative exploration, and the consequences of decisions.

All technical development was carried out individually by **William Marques**, with assistance from **ChatGPT**. **Jamili** contributed to the story and the creation of scene images, with assistance from **ChatGPT and Gemini**.

> **Current status:** the main menu and narrative system have their functional foundation implemented. The story is still in production: some endings are ready, while other routes need dialogue and images to be completed. The interface and story are in Brazilian Portuguese; this English README section documents the project but does not mean that the game itself has been translated.

### Story and atmosphere

Chapter 1, **“O Hospital de Setembro” (“The September Hospital”)**, follows **Hanako**, a young woman interested in abandoned places and urban legends. After discovering a hospital-related post on the **Kowa-Ito — 怖糸** forum, she decides to visit the location with a camera and a flashlight.

What begins as curiosity becomes an experience of isolation, uncertainty, and fear. Dark corridors, unexpected sounds, and decisions made under pressure lead the narrative along different paths.

The visual direction combines Japanese settings, retro-looking technology, abandoned environments, and photographic-style imagery. Rain, footsteps, breathing, and other sound effects build a sense of presence and threat.

**Content:** psychological horror, pursuit, death, audio jump scares, and continuous visual noise effects. Adjust your volume before playing; scene effects are independent of the ambient volume control.

### Existing features

| Feature | Current implementation |
| --- | --- |
| Screen navigation | Main menu, chapter selection, gameplay, about, and settings. |
| Branching narrative | Scenes connected by choices that point to the next story segment. |
| Chapter 1 | 39 defined scenes and three route endpoints; some alternatives are not implemented yet. |
| Images and videos | Scene-specific media, including videos in scenes 11 and 23. |
| Video replay | A button to replay a video after playback ends. |
| Gradual text display | Typewriter effect with slow, normal, and fast settings. |
| Skip text | Immediately reveals the current scene's full text. |
| Chapter opening | Headphone notice, audio sequence, and title presentation; option to skip the initial sequence. |
| Sound design | Menu music, chapter rain ambience, click sounds, and scene-specific effects. |
| Volume controls | Separate adjustments for menu music and chapter ambience. |
| VHS aesthetic | Canvas noise, CSS scanlines, and a background video with opacity transitions. |
| Custom cursors | Cursor images for normal and interaction states. |
| Fullscreen | Fullscreen API toggle where supported by the browser. |
| Local progress | Chapter unlock level stored through `localStorage`. |
| Adaptive layout | Flexbox, Grid, viewport units, and media queries. |

The three endpoints do not represent three completely independent stories: some routes share narrative elements and similar outcomes.

### Technologies

- **HTML5:** screens, controls, and audio/video elements.
- **CSS3:** visual identity, animation, overlays, responsive styles, and cursors.
- **Vanilla JavaScript:** navigation, game state, scenes, choices, typewriter text, and media playback.
- **Canvas 2D + `requestAnimationFrame`:** visual noise generation.
- **Web Storage (`localStorage`):** persistent chapter unlock level.
- **Fullscreen API:** fullscreen mode.
- **Google Fonts, Material Icons, and Font Awesome 6.5.1:** external fonts and icons.

This is a static project: it does not use WordPress, a backend, a remote database, a JavaScript framework, or a build step. No npm package installation is needed to run this version. The story is stored in a JavaScript object inside `script.js`, not in a separate JSON file.

### File structure

| Path | Responsibility |
| --- | --- |
| `index.html` | Application structure, screens, buttons, settings, and media elements. |
| `style.css` | Appearance, VHS effects, animation, cursors, and layout rules. |
| `script.js` | Story data, game state, and interaction logic. |
| `img/` | Scene images, MP4 videos, cursors, and icons. |
| `audio/` | Music, ambience, and MP3/WAV effects, plus auxiliary cover images. |
| `README.md` | Brazilian Portuguese and English documentation. |

Keep `img/` and `audio/` alongside `index.html`, preserving all filenames and extensions.

### Running locally

1. Extract or download the project.
2. Open a terminal in the folder containing `index.html`, `style.css`, and `script.js`.
3. With Python 3 installed, start a local static server:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

On systems using the `python3` command:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

4. Open [http://localhost:8000](http://localhost:8000).
5. Press `Ctrl+C` in the terminal to stop the server.

You can also serve the same folder through a static development server in your editor. Python is only one way to serve the files; it is not part of the game logic.

Use a browser with JavaScript and HTML5 audio/video enabled. External fonts and icons require an internet connection. Audio playback may require an initial interaction with the page.

### How to play

1. Select **Começar** (Start) in the main menu.
2. Choose **Capítulo 1** (Chapter 1).
3. Watch the opening or select **PULAR ABERTURA** (Skip Opening). The title presentation still runs before **INICIAR** (Begin) appears.
4. Read the story and select progression or choice buttons.
5. Use **Pular Texto** (Skip Text) to reveal the scene text immediately.
6. Adjust reading speed in **Configurações** (Settings) and ambience using the in-game volume control.
7. At an endpoint, use the displayed option to return to chapter selection.

Restart the chapter to explore other paths. This version does not have a button to resume from the last visited scene.

### Logic organization

The `bancoDeCapitulos` structure holds each chapter's data:

| Field | Purpose |
| --- | --- |
| `titulo` | Name displayed during the opening. |
| `bgm` | Ambient audio path. |
| `intro_sons` | List of sounds played during the opening. |
| `roteiro` | Object containing scenes identified by keys, starting at `inicio`. |

Each scene contains `texto`, either `imagem` or `video`, an optional `som_extra`, and an `opcoes` array. Each option uses `texto` for its button label and `proximo` for its destination.

The central functions are:

- `changeScreen()`: switches application screens.
- `selecionarCapitulo()`: checks chapter access and prepares the opening.
- `iniciarJogoReal()`: starts ambience and loads `inicio`.
- `mostrarCena()`: updates media, text, audio, and choices.
- `digitarTexto()` and `pularDigitacao()`: control text presentation.
- `salvarProgresso()` and `carregarProgresso()`: maintain the unlock level.

The special destination `SAIR_PARA_CAPITULOS` saves the next unlock level and returns to chapter selection. A handler for `FIM_CAPITULO_1` also exists, although current choices do not use it.

### Adding content

To add a scene, create a unique key inside the chapter's `roteiro` and connect an existing choice to it. This illustrative example uses an image already included in the project:

```javascript
"new-scene": {
    texto: "A new corridor appears before me.",
    imagem: "img/cena_12.png",
    opcoes: [
        { texto: "Continue", proximo: "another-scene" }
    ]
}
```

Do not paste this as standalone code: it belongs inside the `roteiro` object. Define `another-scene` as well, or replace it with an existing scene ID. Use `video` instead of `imagem` for a video scene. Add `som_extra` with a valid path for a sound effect.

A new chapter needs data in `bancoDeCapitulos`, an `inicio` scene, available media, and a corresponding selection control in `index.html`. The lock system looks for `btn-cap-N`, `img-cap-N`, and `titulo-cap-N` IDs sequentially, beginning with Chapter 2.

### Progress and settings

The **`kodoku_save_level`** key stores only the highest unlocked chapter level in the current browser. It does not store the current scene, choice history, an ending collection, or progress in an online account.

Volume and text-speed settings remain in JavaScript state during the session and do not persist after a reload. Current endpoints record the next chapter's unlock level even when its button is still hidden in the HTML.

### Current production stage

The main work ahead is to finish the narrative content on top of the existing functional foundation: write the remaining dialogue, create the images, and connect routes to their respective endings. The story should not yet be presented as complete.

- **Unfinished routes:** scene 11 points to `futuro`, and scene 17 points to `futuro2`. These destinations are not defined; selecting them leaves the current scene unchanged without an explanatory message.
- **Future chapters:** only Chapter 1 is visible in chapter selection. Chapter 2 contains test text and references to missing audio files. Chapter 2 and 3 controls are commented out in HTML; no Chapter 3 story is defined.

<details>
<summary>Technical maintenance and compatibility notes</summary>

- **Audio filename:** scene 18 references `audio/coracao-acelerado.mp3`, while the supplied file is named `audio/coracao-acelerado.MP3`. This mismatch can prevent loading on case-sensitive systems.
- **Effects volume:** the ambience control changes background audio, not jump scares or scene effects, which use volume `1.0` in the code. Click sounds use `0.8`.
- **Accessibility and performance:** layout adjustments exist, but compatibility across devices still needs validation. There is no noise-disable control or `prefers-reduced-motion` handling; chapter selection uses a clickable `div` without its own keyboard support.
- **Maintenance:** `iniciarEfeitoVisual()` is declared twice. Settings also contain a temporary image element with `src="audio/"`.

These observations concern specific adjustments and refinement opportunities; they do not change the distinction between the implemented functional foundation and the narrative content still in production. File inspection does not replace a complete browser playthrough of every route.

</details>

### Possible improvements

Potential next steps, without a delivery commitment:

- Complete unfinished story branches and develop additional chapters.
- Add scene-based resume and a discovered-endings history.
- Persist preferences and provide separate sound-effects volume control.
- Improve keyboard navigation and offer reduced visual effects.
- Validate layouts across screen sizes and optimize Canvas noise.
- Separate story data and logic into dedicated files as the project grows.
- Translate the game interface and story into English.

### Authorship and AI assistance

| Contributor | Contribution |
| --- | --- |
| **William Marques** | Individual technical development of the project, with ChatGPT assistance. |
| **Jamili** | Contributions to the story and creation of scene images, with ChatGPT and Gemini assistance. |
| **ChatGPT** | Assistance with development and the creative process. |
| **Gemini** | Assistance with the scene-image creation process. |

The project combines original development and creative collaboration between William and Jamili, with transparent use of AI tools.

### License and asset credits

This version does not include a `LICENSE` file or a complete inventory of authorship and licenses for each media asset. The **About** screen also mentions the use of some images sourced from the internet. This README does not assign a license to the code or to image, video, or audio files.

[Português (Brasil)](#português-brasil) | [English](#english)
