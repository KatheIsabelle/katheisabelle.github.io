/* ============================================================
   CARTAS
   Arte real do baralho (tarot_free.zip) em assets/cards/NN.png,
   verso em assets/cards/back.png. Numeração = arcanos maiores.
   Pra trocar de baralho depois, só apontar "img" pra outro set
   de arquivos do mesmo tamanho (73x113).
   Cada carta = uma seção do portfolio.
   ============================================================ */
const CARDS = [
  {
    id: "imperatriz",
    number: "III",
    img: "assets/cards/03.png",
    name: "A Imperatriz",
    meaning: "meu arcano pessoal",
    eyebrow: "sobre mim",
    title: "Kathe Beserra",
    body: `

    <p>Sou <span class="hl hl--gold">Game Designer</span> e <span class="hl hl--gold">desenvolvedora</span>
    independente, apaixonada por criar experiências marcantes e únicas por meio dos jogos.</p>

    <p>Já atuei como game designer e gameplay designer em <span class="hl hl--rose">Dungeon Runner</span>, um roguelike
    de deck-building publicado na Google Play, com arquitetura orientada a dados pras cartas, inimigos e itens —
    escrevi o game design document completo e o lore do jogo. Também fui game designer, desenvolvedora e artista 3D
    do <a class="hl hl--rose" href="https://katheisabelle.itch.io/tnt-party-game" target="_blank" rel="noopener">TNT Party Game</a>, com cinco minigames multiplayer local, feito na SoulCode
    Academy com patrocínio da TNT Energy Drink.</p>

    <p>Formada em <strong>Engenharia de Computação</strong> pela UFPel e o meu trabalho de conclusão de curso foi o
    <a class="hl hl--rose" href="https://katheisabelle.itch.io/odisseia-2d" target="_blank" rel="noopener">Odisseia 2D</a>, um jogo educativo sobre circuitos digitais desenvolvido em
    Unity, que recebeu destaque na Semana Integrada de Inovação, Ensino, Pesquisa e Extensão (SIIEPE) e foi
    publicado no <a class="hl hl--gold" href="https://sol.sbc.org.br/index.php/sbie/article/view/31298" target="_blank" rel="noopener">Simpósio Brasileiro de Informática na Educação (SBIE)</a>, evento Qualis A3.</p>

    <p>Atualmente faço <strong>pós-graduação [Mestrado]</strong> (PPGC) na mesma universidade, pesquisando no
    <span class="hl hl--violet">LUPS</span> (Laboratório de Sistemas Ubíquos e Paralelos) uma aplicação de
    realidade virtual pra Meta Quest, criada pra apoiar o aprendizado da escrita manuscrita em crianças. Esse
    trabalho foi publicado no Symposium on Virtual and Augmented Reality (SVR), o principal evento de RV/RA do
    Brasil, promovido pela Comissão Especial de Realidade Virtual e Aumentada (CERV) da SBC — outro evento Qualis A3.</p>

    <p>Tenho experiência com <strong>programação</strong>
    (<img class="tech-icon" src="assets/portfolio/skills/csharp.png" alt="C#">,
    <img class="tech-icon" src="assets/portfolio/skills/python.png" alt="Python">,
    <img class="tech-icon" src="assets/portfolio/skills/javascript.png" alt="JavaScript">),
    <strong>desenvolvimento de jogos</strong> 2D/3D em
    <img class="tech-icon" src="assets/portfolio/skills/unity.png" alt="Unity">,
    <strong>modelagem e animação</strong> 3D com
    <img class="tech-icon" src="assets/portfolio/skills/blender.png" alt="Blender">,
    <strong>ilustração digital</strong> no
    <img class="tech-icon" src="assets/portfolio/skills/photoshop.png" alt="Photoshop">
    e <strong>inglês avançado</strong> com certificações.</p>
    
     <div class="about-links">
      <a class="icon-btn" href="https://katheisabelle.itch.io" target="_blank" rel="noopener" aria-label="itch.io">
        <img src="assets/portfolio/icons/itch.png" alt="itch.io">
      </a>
      <a class="icon-btn" href="https://github.com/KatheIsabelle" target="_blank" rel="noopener" aria-label="GitHub">
        <img src="assets/portfolio/icons/github.png" alt="GitHub">
      </a>
      <a class="icon-btn" href="https://www.linkedin.com/in/kathe-beserra-6a70a3194/" target="_blank" rel="noopener" aria-label="LinkedIn">
        <img src="assets/portfolio/icons/linkedin.png" alt="LinkedIn">
      </a>
      <a class="icon-btn" href="https://www.instagram.com/katheisab/" target="_blank" rel="noopener" aria-label="Instagram">
        <img src="assets/portfolio/icons/instagram.png" alt="Instagram">
      </a>
      <a class="icon-btn" href="https://drive.google.com/file/d/1XQMn1mp_J-I52Tkbost6bdA48JsdXqvA/view?usp=sharing" target="_blank" rel="noopener" aria-label="Currículo">
        <img src="assets/portfolio/icons/cv.png" alt="Currículo">
      </a>

    </div>
    `
  },

  {
    id: "mago",
    number: "I",
    img: "assets/cards/01.png",
    name: "O Mago",
    meaning: "manifestação",
    eyebrow: "biblioteca digital",
    title: "Projetos de jogos",
    body: `
      <div class="games-grid" id="gamesGrid">

        <button class="game-tile" data-game="magicards">
        <img class="game-tile__cover" src="assets/portfolio/games/cardgame.svg" alt="">
        <span class="game-tile__title">MagiCards</span>
        <span class="game-tile__meta">2026 · Google Play · CardGame</span>
        </button>

        <button class="game-tile" data-game="odisseia">
          <img class="game-tile__cover" src="assets/portfolio/games/odisseia.svg" alt="">
          <span class="game-tile__title">Odisseia 2D</span>
          <span class="game-tile__meta">2025 · Puzzle Educacional</span>
        </button>

        <button class="game-tile" data-game="tnt">
         <img class="game-tile__cover" src="assets/portfolio/games/tnt-party.svg" alt="">
          <span class="game-tile__title">TNT Party Game</span>
          <span class="game-tile__meta">2024 · Local Multiplayer</span>
        </button>

        <button class="game-tile" data-game="knight">
        <img class="game-tile__cover" src="assets/portfolio/games/lonely-knight.svg" alt="">
        <span class="game-tile__wip">WIP</span>
        <span class="game-tile__title">The Lonely Knight 2D</span>
        <span class="game-tile__meta">2024 · Ação 2D Top-down [WIP]</span>
      </button>

      <button class="game-tile" data-game="darkness">
      <img class="game-tile__cover" src="assets/portfolio/games/adventure-of-darkness.svg" alt="">
      <span class="game-tile__wip">WIP</span>
      <span class="game-tile__title">Adventure of Darkness</span>
      <span class="game-tile__meta">2024 · Ação 2D Plataforma [WIP]</span>
    </button>


      </div>  

        <article class="game-sheet" id="sheet-magicards" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <img src="assets/halloween/spell_book.png" alt="">
          <span>← Galeria de Jogos</span>
        </button>

        <div class="game-sheet__top">
          <div class="game__video">
            <iframe src="https://www.youtube.com/embed/ksJn1VwlFUc?rel=0" title="MagiCards" allowfullscreen loading="lazy"></iframe>
          </div>
          <div class="game-sheet__head">
            <h3>MagiCards</h3>
            <p class="game-sheet__status">Projeto profissional · Bibiu Games · freelancer 2024–2025 · publicado em 2026</p>
            <ul class="chips">
              <li><img src="assets/halloween/magic_wand.png" alt=""><b>Gênero</b>Dungeon Crawler e Card Game Colecionável</li>
              <li><img src="assets/halloween/cauldron.png" alt=""><b>Engine</b>Unity</li>
              <li><img src="assets/halloween/bat.png" alt=""><b>Plataforma</b> Android (Google Play, gratuito)</li>
              <li><img src="assets/halloween/witch_hat.png" alt=""><b>Equipe</b> Time de desenvolvimento da Bibiu Games</li>
            </ul>
          </div>
        </div>

        <h4 class="sheet-h"><img src="assets/halloween/jack_o_lantern_happy.png" alt="">Meu papel</h4>
        <p class="role-chips">
          <span>Narrativa</span><span>Game Designer</span><span>Design de monstros</span>
          <span>Design de cenários</span><span>Design de itens</span><span>Design de PETs</span>
        </p>

        <h4 class="sheet-h"><img src="assets/halloween/spell_book.png" alt="">Sobre</h4>
        <p>Reúna suas cartas, entre na masmorra e molde seu destino. MagiCards é um dungeon crawler e card game colecionável em que cada carta conta: nas batalhas por turnos você joga ataques, magias e buffs, encadeia combos e enfrenta mais de 200 monstros pela Floresta, pelo Deserto e pelo Gelo.</p>
        <p>Entre uma partida e outra, você faz o deck crescer: invoca novas cartas no Templo, evolui seus poderes, forja equipamentos, prepara poções e leva pets como companheiros.</p>

        <div class="sheet-shots">
        <figure>
          <img src="assets/portfolio/games/magicCard-1.webp" alt="NPC" loading="lazy">
          <figcaption><b>1. NPCs & Eventos</b></figcaption>
        </figure>
        <figure>
          <img src="assets/portfolio/games/magicCard-2.webp" alt="Build deck" loading="lazy">
          <figcaption><b>2. Construa Seu Deck Personalizado</b></figcaption>
        </figure>
        <figure>
          <img src="assets/portfolio/games/magicCard-3.webp" alt="Colecione" loading="lazy">
          <figcaption><b>3. Colecione Cartas & Monstros</b></figcaption>
        </figure>
         <figure>
          <img src="assets/portfolio/games/magicCard-4.webp" alt="Equipamentos" loading="lazy">
          <figcaption><b>4. Forge Equipamentos Lendários</b></figcaption>
        </figure>
        <figure>
          <img src="assets/portfolio/games/magicCard-5.webp" alt="PETS" loading="lazy">
          <figcaption><b>5. Recrute PETs Poderosos</b></figcaption>
        </figure>
        <figure>
          <img src="assets/portfolio/games/magicCard-6.webp" alt="preparacao" loading="lazy">
          <figcaption><b>6. Organize Seus Recursos</b></figcaption>
        </figure>
        <figure>
          <img src="assets/portfolio/games/magicCard-7.webp" alt="Inimigos" loading="lazy">
          <figcaption><b>7. Encare Inimigos Poderosos</b></figcaption>
        </figure>
      </div>


        <h4 class="sheet-h"><img src="assets/halloween/candelabra.png" alt="">Destaques</h4>
        <ul class="sheet-list">
          <li>Mais de 400 fases, 200 monstros e 200 cartas, com mais de 500 evoluções e mais de 1.100 itens.</li>
          <li>Combate por turnos com mana e correntes de cartas: combinar cores gera bônus.</li>
          <li>Forja de equipamentos (capacete, armadura, escudo, amuleto e botas), poções e árvore de atributos para montar a sua build.</li>
          <li>30 pets que carregam itens, sobem de nível e desbloqueiam habilidades.</li>
          <li>Eventos ao vivo, como World Boss, Dragon Tower e Victory Stack, com ranking.</li>
        </ul>

        <div class="sheet-links">
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://play.google.com/store/apps/details?id=bibiugames.magicards" target="_blank" rel="noopener">baixar na Play Store</a>
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://www.bibiugames.com/magicards/wiki/" target="_blank" rel="noopener">wiki do jogo</a>
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://www.bibiugames.com" target="_blank" rel="noopener">Bibiu Games</a>
        </div>

      </article>



      <article class="game-sheet" id="sheet-odisseia" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← Galeria de Jogos</span>
        </button>

        <div class="game-sheet__top">
          <div class="game__video">
            <iframe src="https://www.youtube.com/embed/2xZFekYdR78?rel=0" title="Odisseia 2D" allowfullscreen loading="lazy"></iframe>
          </div>
          <div class="game-sheet__head">
            <h3>Odisseia 2D: Explorando Caminhos Lógicos</h3>
            <p class="game-sheet__status">TCC · UFPel · defendido em 13/08/2025</p>
            <ul class="chips">
              <li><img src="assets/halloween/magic_wand.png" alt=""><b>Gênero</b> puzzle 2D Educacional + Combate, Top-down, Single Player</li>
              <li><img src="assets/halloween/cauldron.png" alt=""><b>Engine</b> Unity</li>
              <li><img src="assets/halloween/bat.png" alt=""><b>Plataforma</b> Windows</li>
              <li><img src="assets/halloween/witch_hat.png" alt=""><b>Equipe</b> solo (orientação: Prof. Dr. Leomar Jr. | coorientação: Me. Henrique Kessler)</li>
            </ul>
          </div>
        </div>

        <h4 class="sheet-h"><img src="assets/halloween/jack_o_lantern_happy.png" alt="">Meu papel</h4>
        <p class="role-chips">
          <span>Game Designer</span><span>Level Designer</span>
          <span>Game Dev</span><span>Roteirista</span><span>Tester</span></p>

        
        <h4 class="sheet-h"><img src="assets/halloween/spell_book.png" alt="">Sobre</h4>
        <p>Embarque em uma envolvente aventura 2D com câmera no estilo top-down e gênero puzzle RPG.
        Explore um mundo elétrico e desafiador, onde cada fase propõe enigmas baseados em Técnicas e Circuitos Digitais.</p>

        <p>Você será o protagonista: um jovem humano que, por acidente, foi transportado para um mundo nanométrico e totalmente desconhecido.
        Para voltar para casa, precisará investigar este universo cheio de segredos e superar desafios impostos por uma figura misteriosa que
        conhece mais sobre você do que imagina.</p>

        <p>Desvende os mistérios de uma vasta rede de transistores, aprendendo sobre propagação de sinais, resolvendo quebra-cabeças e enfrentando
        inimigos desafiadores. Evolua, adquira conhecimento e novas habilidades a cada conquista!</p>


      <div class="sheet-shots">
        <figure>
          <img src="assets/portfolio/games/odisseia-mundo.gif" alt="Mundo" loading="lazy">
          <figcaption><b>1. O mundo</b><br>Onde a narrativa começa.</figcaption>
        </figure>
        <figure>
          <img src="assets/portfolio/games/odisseia-combate.gif" alt="Combate" loading="lazy">
          <figcaption><b>2. O combate</b><br>Enfrente inimigos antes de cada quebra-cabeça.</figcaption>
        </figure>
        <figure>
          <img src="assets/portfolio/games/odisseia-puzzles.gif" alt="Quebra-cabeças" loading="lazy">
          <figcaption><b>3. As 4 redes de transistores</b><br>Resolva os puzzles e colete os tokens para avançar.</figcaption>
        </figure>
      </div>

        <h4 class="sheet-h"><img src="assets/halloween/candelabra.png" alt="">Destaques</h4>
        <ul class="sheet-list">
          <li>Puzzles que mapeiam funções booleanas em redes pull-up/pull-down CMOS.</li>
          <li>4 combates, 4 quebra-cabeças e 12 moedas, com cutscenes e tutorial.</li>
          <li>Testado com 24 alunos (graduação e mestrado): acertos subiram em 4 de 5 questões, de 15–19 para 18–22 acertos.</li>
          <li>Avaliação de UX: maioria "concordo totalmente" em design, imersão, controles e relevância do conteúdo.</li>
          <li>Publicado no SBIE (Qualis A3) e destaque no SIIEPE.</li>
        </ul>

        <div class="sheet-links">
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://katheisabelle.itch.io/odisseia-2d" target="_blank" rel="noopener">jogar no itch.io</a>
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://sol.sbc.org.br/index.php/sbie/article/view/31298" target="_blank" rel="noopener">artigo (SBIE)</a>
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://canva.link/xnmkssbari42h1a" target="_blank" rel="noopener">Apresentação (TCC UFPEL)</a>
          </div>
      </article>


      <article class="game-sheet" id="sheet-tnt" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← Galeria de Jogos</span>
        </button>

        <div class="game-sheet__top">
          <div class="game__video">
            <iframe src="https://www.youtube.com/embed/MGeESugYH6k?rel=0" title="TNT Party Game" allowfullscreen loading="lazy"></iframe>
          </div>
          <div class="game-sheet__head">
            <h3>TNT Party Game</h3>
            <p class="game-sheet__status">Projeto final · Bootcamp Desenvolvedor de Jogos · Soulcode Academy</p>
            <ul class="chips">
              <li><img src="assets/halloween/magic_wand.png" alt=""><b>Gênero</b> Party Game 3D, Multiplayer (4 jogadores)</li>
              <li><img src="assets/halloween/cauldron.png" alt=""><b>Engine</b> Unity</li>
              <li><img src="assets/halloween/bat.png" alt=""><b>Plataforma</b> Windows · controle (joystick)</li>
              <li><img src="assets/halloween/witch_hat.png" alt=""><b>Equipe</b> 8 pessoas · patrocínio TNT Energy Drink</li>
            </ul>
          </div>
        </div>

        <h4 class="sheet-h"><img src="assets/halloween/jack_o_lantern_happy.png" alt="">Meu papel</h4>
        <p class="role-chips">
          <span>Game Designer</span><span>Game Dev</span><span>Level Designer</span>
          <span>UI Designer</span><span>3D Artist</span><span>Tester</span>
        </p>

        <h4 class="sheet-h"><img src="assets/halloween/spell_book.png" alt="">Sobre</h4>
         <p>No universo de diversão da TNT, quatro competidores enfrentam uma série de desafios em ambientes Sci-fi, 
        participando de cinco tipos de mini-games.</p> 
        
        <p>Esses jogos foram planejados e desenvolvidos para um evento especial 
        chamado "Dinâmica Energética".Os jogadores competem intensamente, acumulando pontos por meio de seu desempenho e 
        pela coleta de latinhas espalhadas pelo cenário. O objetivo é conquistar a vitória e o prêmio TNT, 
        destinado a quem demonstrar o maior talento e se tornar o grande campeão do evento.</p>

      <h4 class="sheet-h"><img src="assets/halloween/candelabra.png" alt="">Os 5 minigames</h4>
      <ul class="mini-list">
        <li>
          <img src="assets/portfolio/games/tnt-mg1.PNG" alt="Coleta em Falso">
          <div><b>Coleta em Falso</b><span>Plataforma, com pulo e tempo de reação para coletar latinhas sem cair.</span></div>
        </li>
        <li>
          <img src="assets/portfolio/games/tnt-mg2.PNG" alt="Persiga a Energia">
          <div><b>Persiga a Energia</b><span>Perseguição e evasão em tela dividida, segurando a latinha pelo maior tempo.</span></div>
        </li>
        <li>
          <img src="assets/portfolio/games/tnt-mg3.PNG" alt="Círculo de Energia">
          <div><b>Círculo de Energia</b><span>Coleta de latinhas sobre plataformas que giram em sentidos opostos.</span></div>
        </li>
        <li>
          <img src="assets/portfolio/games/tnt-mg4.PNG" alt="Corrida Energética">
          <div><b>Corrida Energética</b><span>Sequência aleatória de botões, em que cada acerto vira metros.</span></div>
        </li>
        <li>
          <img src="assets/portfolio/games/tnt-mg5.PNG" alt="Caminho Energizado">
          <div><b>Caminho Energizado</b><span>Corrida e coleta, desviando de obstáculos até o destino.</span></div>
        </li>
      </ul>


        <h4 class="sheet-h"><img src="assets/halloween/cobweb.png" alt="">Destaques</h4>
        <ul class="sheet-list">
          <li>Level design feito sob medida para a dinâmica de cada minigame.</li>
          <li>Arte 3D low poly com a paleta TNT e visual neon.</li>
          <li>Personagem genérico e personalizável, com cores da paleta TNT e capacetes com logo e símbolos da marca.</li>
          <li>Menu, tela de regras antes de cada partida, seleção de fase e cutscene de pódio no fim.</li>
        </ul>

        <div class="sheet-links">
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://katheisabelle.itch.io/tnt-party-game" target="_blank" rel="noopener">jogar no itch.io</a>
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://soulcode.com" target="_blank" rel="noopener">Soulcode Academy</a>
        </div>
      </article>



      <article class="game-sheet" id="sheet-knight" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← Galeria de Jogos</span>
        </button>

        <div class="game-sheet__top">
          <div class="game__video">
            <iframe src="https://www.youtube.com/embed/Cniqsc9QfDo?rel=0" title="The Lonely Knight 2D" allowfullscreen loading="lazy"></iframe>
          </div>
          <div class="game-sheet__head">
            <h3>The Lonely Knight 2D</h3>
            <p class="game-sheet__status">Projeto autoral · 2024 · Em desenvolvimento</p>
            <ul class="chips">
              <li><img src="assets/halloween/magic_wand.png" alt=""><b>Gênero</b> Ação e Aventura 2D, Top-down, Single Player</li>
              <li><img src="assets/halloween/cauldron.png" alt=""><b>Engine</b> Unity</li>
              <li><img src="assets/halloween/bat.png" alt=""><b>Plataforma</b> Windows</li>
              <li><img src="assets/halloween/witch_hat.png" alt=""><b>Equipe</b> solo</li>
            </ul>
          </div>
        </div>

        <h4 class="sheet-h"><img src="assets/halloween/jack_o_lantern_happy.png" alt="">Meu papel</h4>
        <p class="role-chips">
          <span>Game Designer</span><span>Game Dev</span><span>Level Designer</span>
          <span>Tester</span>
        </p>

        <h4 class="sheet-h"><img src="assets/halloween/spell_book.png" alt="">Sobre</h4>
        <p>Jogo 2D top-down em que você assume o papel de um cavaleiro solitário em um mundo
        desconhecido, enfrentando criaturas diversas e construindo seu próprio lar em meio ao caos.</p>
        <p>Uma experiência que mistura sobrevivência, introspecção e a busca por paz em um universo vasto.</p>

         <div class="sheet-shots">
          <figure><img src="assets/portfolio/games/knight-1.png" alt="Floresta e inimigos" loading="lazy"></figure>
          <figure><img src="assets/portfolio/games/knight-2.png" alt="Vila" loading="lazy"></figure>
        </div>

        <h4 class="sheet-h"><img src="assets/halloween/candelabra.png" alt="">Destaque</h4>
        <ul class="sheet-list">
          <li>Combate básico contra inimigos.</li>
          <li>Novas mecânicas em desenvolvimento.</li>
        </ul>


        <div class="sheet-links">
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://katheisabelle.itch.io/the-knight" target="_blank" rel="noopener">jogar no itch.io</a>
        </div>
      </article>



      <article class="game-sheet" id="sheet-darkness" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← Galeria de Jogos</span>
        </button>

        <div class="game-sheet__top">
          <div class="game__video">
            <iframe src="https://www.youtube.com/embed/SEU_ID_DO_VIDEO?rel=0" title="Adventure of Darkness" allowfullscreen loading="lazy"></iframe>
          </div>
          <div class="game-sheet__head">
            <h3>Adventure of Darkness</h3>
            <p class="game-sheet__status">Projeto autoral · em desenvolvimento</p>
            <ul class="chips">
              <li><img src="assets/halloween/magic_wand.png" alt=""><b>Gênero</b> Ação 2D, Plataforma, Single Player</li>
              <li><img src="assets/halloween/cauldron.png" alt=""><b>Engine</b> Unity</li>
              <li><img src="assets/halloween/bat.png" alt=""><b>Plataforma</b> Windows</li>
              <li><img src="assets/halloween/witch_hat.png" alt=""><b>Equipe</b> solo</li>
            </ul>
          </div>
        </div>

        <h4 class="sheet-h"><img src="assets/halloween/jack_o_lantern_happy.png" alt="">Meu papel</h4>
        <p class="role-chips">
          <span>Game Designer</span><span>Game Dev</span><span>Level Designer</span>
          <span>Tester</span>
        </p>

        <h4 class="sheet-h"><img src="assets/halloween/spell_book.png" alt="">Sobre</h4>
        <p>Assuma o papel do herói e embarque em uma missão épica para caçar e capturar DarkSkull,
        um demônio determinado a espalhar o caos por sua terra natal.</p>
        <p>Enfrente seus aliados corrompidos, explore cenários sombrios e aterrorizantes, e lute pela
        sua vida enquanto tenta salvar seu mundo da destruição!</p>

        <h4 class="sheet-h"><img src="assets/halloween/candelabra.png" alt="">Estado atual</h4>
        <ul class="sheet-list">
          <li>Combate básico contra inimigos.</li>
          <li>Novas mecânicas em desenvolvimento.</li>
        </ul>

        <div class="sheet-links">
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://katheisabelle.itch.io/adventureofdarkness" target="_blank" rel="noopener">ver no itch.io</a>
        </div>
      </article>


     
    `
      
  },


  {
    id: "mundo",
    number: "XXI",
    img: "assets/cards/21.png",
    name: "O Mundo",
    meaning: "entregue ao mundo",
    eyebrow: "biblioteca de pergaminhos",
    title: "Publicações acadêmicas",
    body: `

      <div class="pub-grid">

        <article class="pub-card">
          <header class="pub-card__head">
            <h4>SVR 2026</h4>
            <div class="pub-card__logos">
              <img src="assets/portfolio/pubs/logo-ufpel2.png" alt="UFPel" title="Universidade Federal de Pelotas">
              <img src="assets/portfolio/pubs/logo-capes.png" alt="CAPES" title="CAPES">
            </div>
          </header>

          <a class="pub-card__cover" href="https://svr.sbc.org.br/2026/" target="_blank" rel="noopener">
            <img src="assets/portfolio/pubs/logo-svr.png" alt="Capa do artigo SVR 2026" loading="lazy">
          </a>

          <div class="pub-card__info">
            <span class="pub-card__tag pub-card__tag--qualis">⭐ 2026 · Qualis A3 · Mestrado</span>
            <p class="pub-card__title">Characterizing Differences Between VR-Based and Paper-Based Handwriting Assessment: A Pilot Study</p>
            <p class="pub-card__authors">BESERRA, Kathe Isabelle; TORCHELSEN, Rafael Piccin</p>
            <p class="pub-card__desc">Symposium on Virtual and Augmented Reality, principal conferência de realidade virtual e aumentada do Brasil, promovida pela Comissão Especial de Realidade Virtual (CERV) da SBC. Em 2026, de 29/09 a 02/10, em Goiânia (GO), junto com o SBGames e o SIBGRAPI/ICAT.</p>
            
            <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="assets/portfolio/pubs/32059.pdf" target="_blank" rel="noopener">
              <img src="assets/halloween/cursed_scroll.png" alt="">
              <span>ler publicação</span>
            </a>
          </div>
        </article>

        <article class="pub-card">
          <header class="pub-card__head">
            <h4>CBIE — SBIE</h4>
            <div class="pub-card__logos">
              <img src="assets/portfolio/pubs/logo-ufpel2.png" alt="UFPel" title="Universidade Federal de Pelotas">
            </div>
          </header>

          <a class="pub-card__cover" href="https://cbie.sbc.org.br/2026/" target="_blank" rel="noopener">
            <img src="assets/portfolio/pubs/pub-6.png" alt="Capa do artigo SBIE" loading="lazy">
          </a>

          <div class="pub-card__info">
            <span class="pub-card__tag pub-card__tag--qualis">⭐ 2024 · Qualis A3 · Graduação</span>
            <p class="pub-card__title">Odisseia 2D: Explorando Caminhos Lógicos</p>
            <p class="pub-card__authors">BESERRA, Kathe Isabelle; KESSLER, Henrique; JUNIOR, Leomar Soares Da Rosa</p>
            <p class="pub-card__desc">O Congresso Brasileiro de Informática na Educação (CBIE) é um evento anual da Sociedade Brasileira de Computação (SBC) que promove a troca de experiências entre as comunidades científica, profissional, governamental e empresarial na área de Informática na Educação. O SBIE (Simpósio Brasileiro de Informática na Educação) é o simpósio científico que faz parte do congresso.</p>
            <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://sol.sbc.org.br/index.php/sbie/article/view/31298" target="_blank" rel="noopener">
              <img src="assets/halloween/cursed_scroll.png" alt="">
              <span>ler publicação</span>
            </a>
          </div>
        </article>

        <article class="pub-card">
          <header class="pub-card__head">
            <h4>ComIng — UFSM</h4>
            <div class="pub-card__logos">
              <img src="assets/portfolio/pubs/logo-ufpel2.png" alt="UFPel" title="Universidade Federal de Pelotas">
            </div>
          </header>

          <a class="pub-card__cover" href="https://periodicos.ufsm.br/coming/article/view/85263" target="_blank" rel="noopener">
            <img src="assets/portfolio/pubs/pub-4.png" alt="Capa do artigo ComIng" loading="lazy">
          </a>

          <div class="pub-card__info">
            <span class="pub-card__tag">🎓 2023 · Periódico · Graduação </span>
            <p class="pub-card__title">Qualificando as Práticas Acadêmicas - Inclusão Digital e Diversidade na UFPel</p>
            <p class="pub-card__authors"> BESERRA, Kathe; LORENZONI, Maria Júlia; BEZERRA, Louise Queiroz; MACKEDANZ, Tiago; ROCHA, Gabriel; MARTINEZ, Santiago; GUTTIER, Rogéria; JURDINA, Laura Quevedo; ROSA, Leomar Soares da</p>
            <p class="pub-card__desc">Revista científica Communications and Innovations Gazette (ComIng) da UFSM, de acesso livre e publicação contínua, com trabalhos originais em ciência da computação, sistemas de informação e engenharia da computação, avaliados por pares.</p>
            <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://periodicos.ufsm.br/coming/article/view/85263" target="_blank" rel="noopener">
              <img src="assets/halloween/cursed_scroll.png" alt="">
              <span>ler publicação</span>
            </a>
          </div>
        </article>

        <article class="pub-card">
          <header class="pub-card__head">
            <h4>ComIng — UFSM</h4>
            <div class="pub-card__logos">
              <img src="assets/portfolio/pubs/logo-ufpel2.png" alt="UFPel" title="Universidade Federal de Pelotas">
            </div>
          </header>

          <a class="pub-card__cover" href="https://periodicos.ufsm.br/coming/index" target="_blank" rel="noopener">
            <img src="assets/portfolio/pubs/pub-4.png" alt="Capa do artigo ComIng" loading="lazy">
          </a>

          <div class="pub-card__info">
            <span class="pub-card__tag">🎓 2023 · Periódico · Graduação</span>
            <p class="pub-card__title">Gurias da Comp: A permanência de Mulheres em Cursos de Graduação em Ciência e Engenharia de Computação</p>
            <p class="pub-card__authors">LORENZONI, Maria Júlia; BESERRA, Kathe; BEZERRA, Louise Queiroz; JURDINA, Laura Quevedo; ROSA, Leomar Soares da</p>
            <p class="pub-card__desc">Revista científica Communications and Innovations Gazette (ComIng) da UFSM, de acesso livre e publicação contínua, com trabalhos originais em ciência da computação, sistemas de informação e engenharia da computação, avaliados por pares.</p>
            <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://periodicos.ufsm.br/coming/article/view/85264" target="_blank" rel="noopener">
              <img src="assets/halloween/cursed_scroll.png" alt="">
              <span>ler publicação</span>
            </a>
          </div>
        </article>



        <article class="pub-card">
          <header class="pub-card__head">
            <h4>SIIEPE — CIC</h4>
            <div class="pub-card__logos">
              <img src="assets/portfolio/pubs/logo-ufpel2.png" alt="UFPel" title="Universidade Federal de Pelotas">
              <img src="assets/portfolio/pubs/logo-cnpq.png" alt="CNPq" title="CNPq">
              <img src="assets/portfolio/pubs/logo-capes.png" alt="CAPES" title="CAPES">
            </div>
          </header>

          <a class="pub-card__cover" href="https://wp.ufpel.edu.br/siiepe/" target="_blank" rel="noopener">
            <img src="assets/portfolio/pubs/pub-2.png" alt="Capa do trabalho SIIEPE CIC" loading="lazy">
          </a>

          <div class="pub-card__info">
            <span class="pub-card__tag pub-card__tag--award">🏆 2023 · Destaque da Sessão · Graduação</span>
            <p class="pub-card__title">A Odisseia das Redes de Transistores: Explorando Caminhos Lógicos</p>
            <p class="pub-card__authors">BESERRA, Kathe Isabelle; KESSLER, Henrique; JUNIOR, Leomar Soares Da Rosa</p>
            <p class="pub-card__desc">Congresso de Iniciação Científica (CIC) da UFPel, parte do SIIEPE (Semana Integrada de Inovação, Ensino, Pesquisa e Extensão). Maior evento científico da UFPel, congregando alunos e professores das mais diferentes áreas do conhecimento e de inúmeras instituições de ensino e pesquisa do Brasil e do exterior.</p>
            <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://anais-siiepe.ufpel.edu.br/2023/CE_04120.pdf" target="_blank" rel="noopener">
              <img src="assets/halloween/cursed_scroll.png" alt="">
              <span>ler publicação</span>
            </a>
          </div>
        </article>

        <article class="pub-card">
          <header class="pub-card__head">
            <h4>SIIEPE — CEG</h4>
            <div class="pub-card__logos">
              <img src="assets/portfolio/pubs/logo-ufpel2.png" alt="UFPel" title="Universidade Federal de Pelotas">
              <img src="assets/portfolio/pubs/logo-cnpq.png" alt="CNPq" title="CNPq">
              <img src="assets/portfolio/pubs/logo-capes.png" alt="CAPES" title="CAPES">
            </div>
          </header>

          <a class="pub-card__cover" href="https://wp.ufpel.edu.br/siiepe/" target="_blank" rel="noopener">
            <img src="assets/portfolio/pubs/pub-2.png" alt="Capa do trabalho SIIEPE CEG" loading="lazy">
          </a>

          <div class="pub-card__info">
            <span class="pub-card__tag">🎓 2023 · Artigo Publicado · Graduação</span>
            <p class="pub-card__title">Gurias da Comp: A permanência de mulheres em cursos de graduação em computação</p>
            <p class="pub-card__authors">LORENZONI, Maria Júlia; BESERRA, Kathe; BEZERRA, Louise Queiroz; JURDINA, Laura Quevedo; ROSA, Leomar Soares da</p>
            <p class="pub-card__desc">Congresso de Ensino de Graduação (CEG) da UFPel, parte do SIIEPE (Semana Integrada de Inovação, Ensino, Pesquisa e Extensão). Promovido pela Pró-Reitoria de Ensino, espaço para compartilhar trabalhos e experiências no ensino de graduação.</p>
            <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://anais-siiepe.ufpel.edu.br/2023/G1_06127.pdf" target="_blank" rel="noopener">
              <img src="assets/halloween/cursed_scroll.png" alt="">
              <span>ler publicação</span>
            </a>
          </div>
        </article>



        <article class="pub-card">
          <header class="pub-card__head">
            <h4>SIIEPE — CEG</h4>
            <div class="pub-card__logos">
              <img src="assets/portfolio/pubs/logo-ufpel2.png" alt="UFPel" title="Universidade Federal de Pelotas">
              <img src="assets/portfolio/pubs/logo-cnpq.png" alt="CNPq" title="CNPq">
              <img src="assets/portfolio/pubs/logo-capes.png" alt="CAPES" title="CAPES">
            </div>
          </header>

          <a class="pub-card__cover" href="https://wp.ufpel.edu.br/siiepe/" target="_blank" rel="noopener">
            <img src="assets/portfolio/pubs/pub-2.png" alt="Capa do trabalho SIIEPE CEG" loading="lazy">
          </a>

          <div class="pub-card__info">
            <span class="pub-card__tag pub-card__tag--award">🏆 2023 · Destaque da Sessão · Graduação</span>
            <p class="pub-card__title">Qualificando as Práticas Acadêmicas: Inclusão Digital e Diversidade na UFPel</p>
            <p class="pub-card__authors">BESERRA, Kathe; LORENZONI, Maria Julia; BEZERRA, Louise Queiroz; MACKEDANZ, Tiago; ROCHA, Gabriel; JURGINA, Laura Q.; JÚNIOR, Leomar Soares Da Rosa</p>
            <p class="pub-card__desc">Congresso de Ensino de Graduação (CEG) da UFPel, parte do SIIEPE (Semana Integrada de Inovação, Ensino, Pesquisa e Extensão). Promovido pela Pró-Reitoria de Ensino, espaço para compartilhar trabalhos e experiências no ensino de graduação.</p>
            <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://anais-siiepe.ufpel.edu.br/2023/G2_05582.pdf" target="_blank" rel="noopener">
              <img src="assets/halloween/cursed_scroll.png" alt="">
              <span>ler publicação</span>
            </a>
          </div>
        </article>

      </div>
    `
  },
  
  {
    id: "estrela",
    number: "XVII",
    img: "assets/cards/17.png",
    name: "A Estrela",
    meaning: "inspiração & criação",
    eyebrow: "ateliê",
    title: "Arte & desenhos",
    body: `

        <h3 class="art-title">Ilustração digital 🎨</h3>

        <figure class="art-video">
          <div class="art-video__frame">
            <iframe src="https://www.youtube.com/embed/vqi48ETMxx8?rel=0" title="Käthe Kollwitz: Coincidências que entrelaçam" allowfullscreen loading="lazy"></iframe>
          </div>
          <figcaption>KÄTHE KOLLWITZ: Coincidências que entrelaçam [PARTE 1] <img class="cap-icon" src="assets/portfolio/icons/adobe-photoshop.png" alt="Photoshop" title="Photoshop"></figcaption>
        </figure>

        <div class="gallery">
          <figure class="gallery__item">
            <img src="assets/portfolio/art/venus.jpg" alt="Nascimento de Venus">
            <span class="game-tile__wip">WIP</span>
            <figcaption>O NASCIMENTO DE VÊNUS<img class="cap-icon" src="assets/portfolio/icons/adobe-photoshop.png" alt="Photoshop" title="Photoshop"></figcaption>
          </figure>
          <figure class="gallery__item">
            <img src="assets/portfolio/art/god.jpg" alt="You're God">
            <span class="game-tile__wip">WIP</span>
            <figcaption>SKETCH UI: YOU'RE GOD<img class="cap-icon" src="assets/portfolio/icons/adobe-photoshop.png" alt="Photoshop" title="Photoshop"></figcaption>
          </figure>
          <figure class="gallery__item">
            <img src="assets/portfolio/art/personagem2.jpg" alt="Personagem cartoon">
            <figcaption>PERSONAGEM CARTOON<img class="cap-icon" src="assets/portfolio/icons/adobe-photoshop.png" alt="Photoshop" title="Photoshop"></figcaption>
          </figure>
          <figure class="gallery__item">
            <img src="assets/portfolio/art/personagens.jpg" alt="Personagens cartoon">
            <figcaption>PERSONAGENS CARTOON<img class="cap-icon" src="assets/portfolio/icons/adobe-photoshop.png" alt="Photoshop" title="Photoshop"></figcaption>
          </figure>
          <figure class="gallery__item">
            <img src="assets/portfolio/art/wally.jpg" alt="Wally sketch">
            <span class="game-tile__wip">WIP</span>
            <figcaption>SKETCH WALLY<img class="cap-icon" src="assets/portfolio/icons/adobe-photoshop.png" alt="Photoshop" title="Photoshop"></figcaption>
          </figure>
        </div>

        <h3 class="art-title">Modelagem 3D 🗿</h3>
        <div class="gallery">
          <figure class="gallery__item">
            <img src="assets/portfolio/art/modeling3.jpg" alt="Personagem com formas básicas">
            <figcaption>PERSONAGEM FORMAS BÁSICAS<img class="cap-icon" src="assets/portfolio/icons/Blender.png" alt="Blender" title="Blender"></figcaption>
          </figure>
          <figure class="gallery__item">
            <img src="assets/portfolio/art/modeling1.jpg" alt="Personagens com hair particles">
            <figcaption>PERSONAGENS COM PARTÍCULAS<img class="cap-icon" src="assets/portfolio/icons/Blender.png" alt="Blender" title="Blender"></figcaption>
          </figure>
          <figure class="gallery__item">
            <img src="assets/portfolio/art/modeling2.jpg" alt="Modelagem em processo">
            <span class="game-tile__wip">WIP</span>
            <figcaption>PERSONAGEM MODO ESCULTURA<img class="cap-icon" src="assets/portfolio/icons/Blender.png" alt="Blender" title="Blender"></figcaption>
          </figure>
          <figure class="gallery__item">
            <img src="assets/portfolio/art/shield.jpg" alt="Escudo renderizado">
            <figcaption>SHADERS E PINTURA<img class="cap-icon" src="assets/portfolio/icons/Blender.png" alt="Blender" title="Blender"></figcaption>
          </figure>
        </div>
    `
  },

  
  {
    id: "roda",
    number: "X",
    img: "assets/cards/10.png",
    name: "A Roda da Fortuna",
    meaning: "ideias em movimento",
    eyebrow: "blog",
    title: "Crônicas da Roda",
    body: `
      <div class="games-grid" id="gamesGrid">

        <button class="game-tile" data-game="post-1">
          <img class="game-tile__cover" src="assets/portfolio/games/post.svg" alt="">
          <span class="game-tile__wip">WIP</span>
          <span class="game-tile__title">Games Dicas</span>
          <span class="game-tile__meta">em breve</span>
        </button>

        <button class="game-tile" data-game="post-2">
          <img class="game-tile__cover" src="assets/portfolio/games/post.svg" alt="">
          <span class="game-tile__wip">WIP</span>
          <span class="game-tile__title">Games & IA</span>
          <span class="game-tile__meta">em breve</span>
        </button>

        <button class="game-tile" data-game="post-3">
          <img class="game-tile__cover" src="assets/portfolio/games/post.svg" alt="">
          <span class="game-tile__wip">WIP</span>
          <span class="game-tile__title">Game Design</span>
          <span class="game-tile__meta">em breve</span>
        </button>

        <button class="game-tile" data-game="post-4">
          <img class="game-tile__cover" src="assets/portfolio/games/post.svg" alt="">
          <span class="game-tile__wip">WIP</span>
          <span class="game-tile__title">Pesquisa & VR</span>
          <span class="game-tile__meta">em breve</span>
        </button>

        <button class="game-tile" data-game="post-5">
          <img class="game-tile__cover" src="assets/portfolio/games/post.svg" alt="">
          <span class="game-tile__wip">WIP</span>
          <span class="game-tile__title">Arte & 3D</span>
          <span class="game-tile__meta">em breve</span>
        </button>

      </div>

      <article class="game-sheet" id="sheet-post-1" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← Todos os posts</span>
        </button>

        <h3 class="art-title">Primeiro post</h3>
        <span class="pub-card__tag">em breve</span>

        <p>Este post ainda está sendo escrito.</p>
      </article>

      <article class="game-sheet" id="sheet-post-2" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← Todos os posts</span>
        </button>

        <h3 class="art-title">Primeiro post</h3>
        <span class="pub-card__tag">em breve</span>

        <p>Este post ainda está sendo escrito.</p>
      </article>
      

      <article class="game-sheet" id="sheet-post-3" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← Todos os posts</span>
        </button>

        <h3 class="art-title">Game Design</h3>
        <span class="pub-card__tag">em breve</span>

        <p>Este post ainda está sendo escrito.</p>
      </article>


      <article class="game-sheet" id="sheet-post-4" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← Todos os posts</span>
        </button>

        <h3 class="art-title">Pesquisa & VR</h3>
        <span class="pub-card__tag">em breve</span>

        <p>Este post ainda está sendo escrito.</p>
      </article>

      <article class="game-sheet" id="sheet-post-5" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← Todos os posts</span>
        </button>

        <h3 class="art-title">Arte & 3D</h3>
        <span class="pub-card__tag">em breve</span>

        <p>Este post ainda está sendo escrito.</p>
      </article>
    `
  }
];

/* ============================================================
   SLOTS — posição fixa de cada carta nas páginas do livro
   (3 na página esquerda, 2 na direita), como um glossário.
   x/y em % da área útil (.fan); tilt = leve inclinação individual.
   ============================================================ */
const SLOTS = [
  { x: 12, y: 30, tilt: -6 },
  { x: 35, y: 28, tilt: 4 },
  { x: 23, y: 68, tilt: -3 },
  { x: 64, y: 42, tilt: 5 },
  { x: 88, y: 40, tilt: -4 }
];

/* ============================================================
   ESTADO
   ============================================================ */
let discovered = new Set();   // ids já descobertos (pra barra de progresso)
let activeCard = null;        // carta atualmente flipada no leque

/* ============================================================
   ELEMENTOS
   ============================================================ */
const fanEl = document.getElementById("fan");
const clothEl = document.getElementById("cloth");
const infoEl = document.getElementById("info");
const bubbleTextEl = document.getElementById("bubbleText");
const enterBtn = document.getElementById("enterBtn");
const closeBtn = document.getElementById("closeBtn");
const backBtn = document.getElementById("backBtn");

const tableView = document.getElementById("table-view");
const sectionView = document.getElementById("section-view");

/* ============================================================
   SOM — hover nas cartas (clique.wav) e efeito mágico durante a
   animação de virar (flip.mp3). Cada um clona o Audio a cada
   toque, pra permitir sons em sequência rápida sem cortar o anterior.
   ============================================================ */
const hoverSound = new Audio("assets/sfx/click.wav");
hoverSound.volume = 0.5;
function playHover(){
  const s = hoverSound.cloneNode();
  s.volume = hoverSound.volume;
  s.play().catch(() => {}); // navegador pode bloquear autoplay antes da 1ª interação
}

const flipSound = new Audio("assets/sfx/flip.mp3");
flipSound.volume = 0.6;
function playFlip(){
  const s = flipSound.cloneNode();
  s.volume = flipSound.volume;
  s.play().catch(() => {});
}

// som mágico ao clicar na placa do título, e miado ao clicar no gato
const titleClickSound = new Audio("assets/sfx/title-click-short.mp3");
titleClickSound.volume = 0.6;
function playTitleClick(){
  const s = titleClickSound.cloneNode();
  s.volume = titleClickSound.volume;
  s.play().catch(() => {});
}

const meowSound = new Audio("assets/sfx/meow-09.mp3");
meowSound.volume = 0.7;
function playMeow(){
  const s = meowSound.cloneNode();
  s.volume = meowSound.volume;
  s.play().catch(() => {});
}

const progressDots = document.getElementById("progressDots");
const progressLabel = document.getElementById("progressLabel");

const familiarEl = document.getElementById("familiar");
const skyBgEl = document.getElementById("skyBg");

/* ============================================================
   BALÃO DE FALA — texto muda conforme a pessoa interage com as cartas
   ============================================================ */
const BUBBLE_IDLE = "Olá, seja bem-vindo(a) ao Grimório da Kathe! Escolha uma carta para saber mais.";

function setBubble(text){
  bubbleTextEl.textContent = text;
}

/* ============================================================
   FAMILIAR — anima o spritesheet witchKitty_curiousIdleBreaker
   (grade 3 colunas x 4 linhas = 12 frames). O tamanho do frame
   exibido é lido do próprio CSS, então funciona em qualquer breakpoint.
   ============================================================ */
const FAMILIAR_COLS = 3;
const FAMILIAR_ROWS = 4;
let familiarFrame = 0;

function tickFamiliar(){
  const size = familiarEl.clientWidth;
  const col = familiarFrame % FAMILIAR_COLS;
  const row = Math.floor(familiarFrame / FAMILIAR_COLS) % FAMILIAR_ROWS;
  familiarEl.style.backgroundPosition = `-${col * size}px -${row * size}px`;
  familiarFrame = (familiarFrame + 1) % (FAMILIAR_COLS * FAMILIAR_ROWS);
}

/* ============================================================
   CÉU — alterna sozinho entre as variações de luz (dia, entardecer,
   noite...) com crossfade suave, em loop
   ============================================================ */
let skyIndex = 0;
let skyLayers = [];

function tickSky(){
  if (!skyLayers.length) return;
  skyLayers[skyIndex].classList.remove("is-active");
  skyIndex = (skyIndex + 1) % skyLayers.length;
  skyLayers[skyIndex].classList.add("is-active");
}

/* ============================================================
   CARTAS — 5 cartas sempre visíveis, viradas pra baixo,
   cada uma num slot fixo das páginas do livro (glossário)
   ============================================================ */
function renderFan(){
  fanEl.innerHTML = "";

  CARDS.forEach((card, i) => {
    const slot = SLOTS[i] || SLOTS[SLOTS.length - 1];

    const el = document.createElement("div");
    el.className = "fan-card" + (discovered.has(card.id) ? " is-discovered" : "");
    el.style.setProperty("--sx", `${slot.x}%`);
    el.style.setProperty("--sy", `${slot.y}%`);
    el.style.setProperty("--tilt", `${slot.tilt}deg`);
    el.style.zIndex = i;
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", `Virar a carta ${card.name}`);
    el.innerHTML = `
      <div class="fan-card__inner">
        <div class="fan-card__face fan-card__face--back"></div>
        <div class="fan-card__face fan-card__face--front">
          <img src="${card.img}" alt="${card.name}">
        </div>
      </div>
    `;

    el.addEventListener("click", () => selectCard(card, el));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") selectCard(card, el);
    });
    el.addEventListener("mouseenter", () => {
      if (!activeCard) playHover();
    });

    fanEl.appendChild(el);
  });
}

/* ============================================================
   PROGRESSO
   ============================================================ */
function renderProgress(){
  progressDots.innerHTML = "";
  CARDS.forEach(card => {
    const dot = document.createElement("span");
    dot.className = "progress__dot" + (discovered.has(card.id) ? " is-done" : "");
    progressDots.appendChild(dot);
  });
  progressLabel.textContent = `${discovered.size} de ${CARDS.length} cartas descobertas`;
}

/* ============================================================
   SELECIONAR / FECHAR CARTA DO LEQUE
   ============================================================ */
function selectCard(card, el){
  if (activeCard && activeCard.id === card.id) return;

  activeCard = card;
  fanEl.querySelectorAll(".fan-card").forEach(c => c.classList.remove("is-active", "is-flipped"));
  infoEl.classList.remove("is-visible");

  el.classList.add("is-active");
  fanEl.classList.add("has-active");

  // pequeno delay pra carta "chegar" ao centro antes de virar
  setTimeout(() => {
    playFlip(); // toca junto com o início do flip, dura enquanto a animação acontece
    el.classList.add("is-flipped");
    el.classList.add("is-discovered");
    discovered.add(card.id);
    renderProgress();

    setBubble(`${card.number} — ${card.name}: ${card.meaning}`);
    setTimeout(() => infoEl.classList.add("is-visible"), 350);
  }, 300);
}

function closeActive(){
  activeCard = null;
  fanEl.querySelectorAll(".fan-card").forEach(c => c.classList.remove("is-active", "is-flipped"));
  fanEl.classList.remove("has-active");
  infoEl.classList.remove("is-visible");
  setBubble(BUBBLE_IDLE);
}

/* ============================================================
   FUNDO DA PÁGINA DE SEÇÃO — um círculo de invocação grande e
   único abre no centro da tela (sem ladrilhar, então sem o
   "piscar" de várias cópias pequenas ao mesmo tempo). Ao terminar,
   ele dá lugar, com fade, ao padrão ladrilhado estático (última
   imagem do frame). Uma cor diferente por carta.
   ============================================================ */
const sectionBgEl = document.getElementById("sectionBg");

const SECTION_BG_FRAME_COUNT = {
  blue: 36,
  purple: 78,
  orange: 54,
  green: 31,
};

// uma cor por carta (imperatriz e roda repetem o azul, já que só
// existem 4 cores de círculo disponíveis pras 5 cartas)
const SECTION_BG_COLOR = {
  imperatriz: "blue",   // Quem sou eu
  estrela: "purple",    // Arte & desenhos
  mago: "orange",       // Projetos de jogos
  mundo: "green",       // Publicações acadêmicas
  roda: "blue",         // Currículo & contato
};

let sectionBgTimer = null;

function sectionBgFrameUrl(color, i){
  return `url('assets/section-bg/${color}-${String(i).padStart(2, "0")}.png')`;
}

function playSectionBgIntro(card){
  if (!sectionBgEl) return;
  if (sectionBgTimer) clearInterval(sectionBgTimer);

  const color = SECTION_BG_COLOR[card.id] || "blue";
  const total = SECTION_BG_FRAME_COUNT[color] || 36;

  let frame = 20;
  sectionBgEl.style.backgroundImage = sectionBgFrameUrl(color, frame);

  sectionBgTimer = setInterval(() => {
    frame++;
    if (frame >= total) {
      frame = total - 1;
      sectionBgEl.style.backgroundImage = sectionBgFrameUrl(color, frame);
      clearInterval(sectionBgTimer);
      sectionBgTimer = null;
      return;
    }
    sectionBgEl.style.backgroundImage = sectionBgFrameUrl(color, frame);
  }, 55);
}

/* ============================================================
   NAVEGAÇÃO ENTRE VIEWS
   ============================================================ */
function goToSection(card){
  document.getElementById("sectionSymbol").innerHTML = `<img src="${card.img}" alt="${card.name}">`;
  document.getElementById("sectionEyebrow").textContent = card.eyebrow;
  document.getElementById("sectionTitle").textContent = card.title;
  playSectionBgIntro(card);
  document.getElementById("sectionBody").innerHTML = card.body;

  tableView.classList.remove("view--active");
  sectionView.classList.add("view--active");
  window.scrollTo(0, 0);
}

function goToTable(){
  sectionView.classList.remove("view--active");
  tableView.classList.add("view--active");
  closeActive();
}

/* ============================================================
   EVENTOS
   ============================================================ */
enterBtn.addEventListener("click", () => {
  if (activeCard) goToSection(activeCard);
});

closeBtn.addEventListener("click", closeActive);

// clique no tapete (fora de uma carta) fecha a carta ativa
clothEl.addEventListener("click", (e) => {
  if (e.target === clothEl) closeActive();
});

backBtn.addEventListener("click", goToTable);


// som mágico ao clicar na placa do título, miado ao clicar no gato
const titleEl = document.querySelector(".title");
if (titleEl) titleEl.addEventListener("click", playTitleClick);
if (familiarEl) familiarEl.addEventListener("click", playMeow);

/* ============================================================
   INIT
   ============================================================ */
renderFan();
renderProgress();
setBubble(BUBBLE_IDLE);
tickFamiliar();
setInterval(tickFamiliar, 130);

if (skyBgEl) {
  skyLayers = Array.from(skyBgEl.querySelectorAll(".sky-bg__layer"));
  skyIndex = skyLayers.findIndex(el => el.classList.contains("is-active"));
  if (skyIndex < 0) skyIndex = 0;
  setInterval(tickSky, 14000);
}

document.getElementById("sectionBody").addEventListener("click", (e) => {
  const tile = e.target.closest(".game-tile[data-game]");
  const back = e.target.closest("[data-back]");
  const grid = document.getElementById("gamesGrid");
  if (tile) {
    grid.hidden = true;
    document.getElementById("sheet-" + tile.dataset.game).hidden = false;
  } else if (back) {
    back.closest(".game-sheet").hidden = true;
    grid.hidden = false;
  }
});


/* ===== LIGHTBOX: clicar numa imagem abre ela inteira no centro ===== */
(function(){
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const cap = document.getElementById("lightboxCaption");
  const body = document.getElementById("sectionBody");
  let group = [];
  let index = 0;

  function show(i){
    index = (i + group.length) % group.length;
    const el = group[index];
    img.src = el.src;
    img.alt = el.alt || "";
    const fig = el.closest("figure");
    const text = fig && fig.querySelector("figcaption");
    cap.textContent = text ? text.textContent : "";
    document.getElementById("lightboxPrev").style.visibility = group.length > 1 ? "visible" : "hidden";
    document.getElementById("lightboxNext").style.visibility = group.length > 1 ? "visible" : "hidden";
  }
  function open(el){
    const container = el.closest(".gallery, .sheet-shots") || body;
    group = Array.from(container.querySelectorAll(".gallery__item > img, .sheet-shots img"));    show(group.indexOf(el));
    box.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function close(){
    box.hidden = true;
    img.src = "";
    document.body.style.overflow = "";
  }

  body.addEventListener("click", (e) => {
    const target = e.target.closest(".gallery__item > img, .sheet-shots img");
    if (target) open(target);
  });
  box.addEventListener("click", (e) => {
    if (e.target === box) close();
  });
  document.getElementById("lightboxClose").addEventListener("click", close);
  document.getElementById("lightboxPrev").addEventListener("click", () => show(index - 1));
  document.getElementById("lightboxNext").addEventListener("click", () => show(index + 1));
  document.addEventListener("keydown", (e) => {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
})();
