/* ============================================================
   IDIOMAS (PT / EN)
   - UI: textos fixos do index.html e mensagens do script.js
   - CARDS_EN: versão em inglês de cada carta (name, meaning,
     eyebrow, title, body). O português continua no CARDS do
     script.js. Se uma carta não tiver versão EN, mostra o PT.
   >>> Ao editar um texto de uma carta, lembre de editar nos
       DOIS lugares (script.js = PT, i18n.js = EN).
   ============================================================ */
const UI = {
  pt: {
    docTitle: "Kathe Beserra — Portfólio",
    bubbleIdle: "Olá, seja bem-vindo(a) ao Grimório da Kathe! Escolha uma carta para saber mais.",
    enter: "entrar",
    close: "fechar",
    back: "← início do site",
    flipCard: "Virar a carta",
    langLabel: "Mudar idioma para inglês",
    prev: "anterior",
    next: "próxima",
    resume: "Currículo",
    progress: (n, total) => `${n} de ${total} cartas descobertas`,
    aboutMini: "Game designer e desenvolvedora com formação em Engenharia da Computação e mestranda em ciência da computação. Tenho experiência com Unity 2D/3D, entre código, desenho e jogos, busco criar experiências marcantes e únicas."
  },
  en: {
    docTitle: "Kathe Beserra — Portfolio",
    bubbleIdle: "Hello, welcome to Kathe's Grimoire! Pick a card to learn more.",
    enter: "enter",
    close: "close",
    back: "← back to home",
    flipCard: "Flip the card",
    langLabel: "Switch language to Portuguese",
    prev: "previous",
    next: "next",
    resume: "Resume",
    progress: (n, total) => `${n} of ${total} cards discovered`,
    aboutMini: "Game designer and developer with a degree in Computer Engineering and a master's student in Computer Science. I have experience with Unity 2D/3D, mixing code, drawing and games, and I aim to create memorable, unique experiences."
  }
};

const CARDS_EN = {};

CARDS_EN.imperatriz = {
  name: "The Empress",
  meaning: "my personal arcana",
  eyebrow: "about me",
  title: "Kathe Beserra",
  body: `

    <p>I'm an independent <span class="hl hl--rose">Game Designer</span> and <span class="hl hl--rose">developer</span>,
    passionate about creating memorable, unique experiences through games.</p>

    <p>I have experience in <strong>programming</strong>
    (<img class="tech-icon" src="assets/portfolio/skills/csharp.png" alt="C#">,
    <img class="tech-icon" src="assets/portfolio/skills/python.png" alt="Python">,
    <img class="tech-icon" src="assets/portfolio/skills/javascript.png" alt="JavaScript">),
    <strong>2D/3D game development</strong> in
    <img class="tech-icon" src="assets/portfolio/skills/unity.png" alt="Unity">Unity,
    <strong>3D modeling and animation</strong> with
    <img class="tech-icon" src="assets/portfolio/skills/blender.png" alt="Blender">Blender,
    <strong>digital illustration</strong> in
    <img class="tech-icon" src="assets/portfolio/skills/photoshop.png" alt="Photoshop"> Adobe Photoshop,
    and <strong>advanced English</strong> with certifications.</p>

    <p>I worked professionally on the game <a class="hl hl--blue" href="https://play.google.com/store/apps/details?id=bibiugames.magicards&pli=1" target="_blank" rel="noopener">MagiCards</a>,
    where I handled <strong>game design</strong>, <strong>narrative design & worldbuilding</strong>, <strong>character & creature design</strong>, <strong>item design</strong> and <strong>environment concept development</strong>. It is a dungeon crawler and collectible card game released for Android.</p>

    <p>I also contributed as <strong>game designer</strong>, <strong>developer</strong> and <strong>3D artist</strong>
    on <a class="hl hl--blue" href="https://katheisabelle.itch.io/tnt-party-game" target="_blank" rel="noopener">TNT Party Game</a>:
    a local multiplayer game with five minigames, made during the <a class="hl hl--blue" href="https://soulcode.com" target="_blank" rel="noopener">SoulCode Academy</a> bootcamp and sponsored by TNT Energy Drink.</p>

    <p>I'm currently doing a <strong>master's degree</strong> at UFPel and I'm part of the research group
    <a class="hl hl--blue" href="https://lups.inf.ufpel.edu.br/about/doku.php?id=start" target="_blank" rel="noopener">LUPS</a>
    (Ubiquitous and Parallel Systems Laboratory), where I'm developing <span class="hl hl--rose">HandWriting VR</span>, a <strong>virtual reality</strong> application for Meta Quest.
    Its goal is to help children learning to write by hand, making the process engaging.
    This work was published at <a class="hl hl--blue" href="https://svr.sbc.org.br/2026/" target="_blank" rel="noopener">SVR</a>
    (Symposium on Virtual and Augmented Reality), Brazil's main VR/AR event, organized by the Special Committee on Virtual and Augmented Reality (CERV) of the Brazilian Computer Society (SBC) — a Qualis A3 event.</p>

    <p>I also hold a degree in <strong>computer engineering</strong> from the same university, and my undergraduate thesis was
    <a class="hl hl--rose" href="https://katheisabelle.itch.io/odisseia-2d" target="_blank" rel="noopener">Odisseia 2D</a>, an <strong>educational puzzle game</strong> about digital circuits developed in
    Unity. This work was published at the <a class="hl hl--blue" href="https://sol.sbc.org.br/index.php/sbie/article/view/31298" target="_blank" rel="noopener">Brazilian Symposium on Computers in Education (SBIE)</a> — another Qualis A3 event.</p>



    <div class="about-links-box">
    <p class="about-links-box__title">✦My links & resume:✦</p>
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
      <a class="icon-btn" href="https://drive.google.com/file/d/1XQMn1mp_J-I52Tkbost6bdA48JsdXqvA/view?usp=sharing" target="_blank" rel="noopener" aria-label="Resume">
        <img src="assets/portfolio/icons/cv.png" alt="Resume">
      </a>
      </div>
    </div>

    `
};

CARDS_EN.mago = {
  name: "The Magician",
  meaning: "manifestation",
  eyebrow: "digital library",
  title: "Game projects",
  body: `
      <div class="games-grid" id="gamesGrid">

        <button class="game-tile" data-game="magicards">
        <img class="game-tile__cover" src="assets/portfolio/games/cardgame.svg" alt="">
        <span class="game-tile__title">MagiCards</span>
        <span class="game-tile__meta">2026 · Google Play · Card Game</span>
        </button>

        <button class="game-tile" data-game="odisseia">
          <img class="game-tile__cover" src="assets/portfolio/games/odisseia.svg" alt="">
          <span class="game-tile__title">Odisseia 2D</span>
          <span class="game-tile__meta">2025 · Educational Puzzle</span>
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
        <span class="game-tile__meta">2024 · 2D Top-down Action [WIP]</span>
      </button>

      <button class="game-tile" data-game="darkness">
      <img class="game-tile__cover" src="assets/portfolio/games/adventure-of-darkness.svg" alt="">
      <span class="game-tile__wip">WIP</span>
      <span class="game-tile__title">Adventure of Darkness</span>
      <span class="game-tile__meta">2024 · 2D Platformer Action [WIP]</span>
    </button>


      </div>

        <article class="game-sheet" id="sheet-magicards" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <img src="assets/halloween/spell_book.png" alt="">
          <span>← Game Gallery</span>
        </button>

        <div class="game-sheet__top">
          <div class="game__video">
            <iframe src="https://www.youtube.com/embed/ksJn1VwlFUc?rel=0" title="MagiCards" allowfullscreen loading="lazy"></iframe>
          </div>
          <div class="game-sheet__head">
            <h3>MagiCards</h3>
            <p class="game-sheet__status">Professional project · Bibiu Games · freelance 2024–2025 · released in 2026</p>
            <ul class="chips">
              <li><img src="assets/halloween/magic_wand.png" alt=""><b>Genre</b>Dungeon Crawler and Collectible Card Game</li>
              <li><img src="assets/halloween/cauldron.png" alt=""><b>Engine</b>Unity</li>
              <li><img src="assets/halloween/bat.png" alt=""><b>Platform</b> Android (Google Play, free)</li>
              <li><img src="assets/halloween/witch_hat.png" alt=""><b>Team</b> Bibiu Games development team</li>
            </ul>
          </div>
        </div>

        <h4 class="sheet-h"><img src="assets/halloween/jack_o_lantern_happy.png" alt="">My role</h4>
        <p class="role-chips">
          <span>Narrative</span><span>Game Designer</span><span>Monster Design</span>
          <span>Environment Design</span><span>Item Design</span><span>PET Design</span>
        </p>

        <h4 class="sheet-h"><img src="assets/halloween/spell_book.png" alt="">About</h4>
        <p>Gather your cards, enter the dungeon and shape your destiny. MagiCards is a dungeon crawler and collectible card game where every card counts: in turn-based battles you play attacks, spells and buffs, chain combos and face over 200 monsters across the Forest, the Desert and the Ice.</p>
        <p>Between matches, you grow your deck: summon new cards at the Temple, evolve your powers, forge equipment, brew potions and bring pets along as companions.</p>

        <div class="sheet-shots">
        <figure>
          <img src="assets/portfolio/games/magicCard-1.webp" alt="NPC" loading="lazy">
          <figcaption><b>1. NPCs & Events</b></figcaption>
        </figure>
        <figure>
          <img src="assets/portfolio/games/magicCard-2.webp" alt="Build deck" loading="lazy">
          <figcaption><b>2. Build Your Custom Deck</b></figcaption>
        </figure>
        <figure>
          <img src="assets/portfolio/games/magicCard-3.webp" alt="Collect" loading="lazy">
          <figcaption><b>3. Collect Cards & Monsters</b></figcaption>
        </figure>
         <figure>
          <img src="assets/portfolio/games/magicCard-4.webp" alt="Equipment" loading="lazy">
          <figcaption><b>4. Forge Legendary Equipment</b></figcaption>
        </figure>
        <figure>
          <img src="assets/portfolio/games/magicCard-5.webp" alt="PETS" loading="lazy">
          <figcaption><b>5. Recruit Powerful PETs</b></figcaption>
        </figure>
        <figure>
          <img src="assets/portfolio/games/magicCard-6.webp" alt="Preparation" loading="lazy">
          <figcaption><b>6. Organize Your Resources</b></figcaption>
        </figure>
        <figure>
          <img src="assets/portfolio/games/magicCard-7.webp" alt="Enemies" loading="lazy">
          <figcaption><b>7. Face Powerful Enemies</b></figcaption>
        </figure>
      </div>


        <h4 class="sheet-h"><img src="assets/halloween/candelabra.png" alt="">Highlights</h4>
        <ul class="sheet-list">
          <li>Over 400 levels, 200 monsters and 200 cards, with 500+ evolutions and 1,100+ items.</li>
          <li>Turn-based combat with mana and card chains: matching colors grants bonuses.</li>
          <li>Equipment forging (helmet, armor, shield, amulet and boots), potions and an attribute tree to craft your build.</li>
          <li>30 pets that carry items, level up and unlock abilities.</li>
          <li>Live events such as World Boss, Dragon Tower and Victory Stack, with rankings.</li>
        </ul>

        <div class="sheet-links">
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://play.google.com/store/apps/details?id=bibiugames.magicards" target="_blank" rel="noopener">get it on Play Store</a>
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://www.bibiugames.com/magicards/wiki/" target="_blank" rel="noopener">game wiki</a>
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://www.bibiugames.com" target="_blank" rel="noopener">Bibiu Games</a>
        </div>

      </article>



      <article class="game-sheet" id="sheet-odisseia" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← Game Gallery</span>
        </button>

        <div class="game-sheet__top">
          <div class="game__video">
            <iframe src="https://www.youtube.com/embed/2xZFekYdR78?rel=0" title="Odisseia 2D" allowfullscreen loading="lazy"></iframe>
          </div>
          <div class="game-sheet__head">
            <h3>Odisseia 2D: Exploring Logical Paths</h3>
            <p class="game-sheet__status">Undergraduate thesis · UFPel · defended on Aug 13, 2025</p>
            <ul class="chips">
              <li><img src="assets/halloween/magic_wand.png" alt=""><b>Genre</b> Educational 2D puzzle + Combat, Top-down, Single Player</li>
              <li><img src="assets/halloween/cauldron.png" alt=""><b>Engine</b> Unity</li>
              <li><img src="assets/halloween/bat.png" alt=""><b>Platform</b> Windows</li>
              <li><img src="assets/halloween/witch_hat.png" alt=""><b>Team</b> solo (advisor: Prof. Dr. Leomar Jr. | co-advisor: M.Sc. Henrique Kessler)</li>
            </ul>
          </div>
        </div>

        <h4 class="sheet-h"><img src="assets/halloween/jack_o_lantern_happy.png" alt="">My role</h4>
        <p class="role-chips">
          <span>Game Designer</span><span>Level Designer</span>
          <span>Game Dev</span><span>Writer</span><span>Tester</span></p>


        <h4 class="sheet-h"><img src="assets/halloween/spell_book.png" alt="">About</h4>
        <p>Embark on an immersive <strong>2D</strong> adventure with a <strong>top-down</strong> camera and a <strong>puzzle RPG</strong> genre.
        Explore an electric, challenging world where each level poses riddles based on Digital Techniques and Circuits.</p>

        <p>You are the protagonist: a young human who, by accident, was transported to a nanometric, completely unknown world.
        To get home, you'll have to investigate this universe full of secrets and overcome challenges set by a mysterious figure who
        knows more about you than you imagine.</p>

        <p>Unravel the mysteries of a vast network of transistors, learning about signal propagation, solving puzzles and fighting
        challenging enemies. Level up and gain knowledge and new abilities with every achievement!</p>


      <div class="sheet-shots">
        <figure>
          <img src="assets/portfolio/games/odisseia-mundo.gif" alt="World" loading="lazy">
          <figcaption><b>1. The world</b><br>Where the story begins.</figcaption>
        </figure>
        <figure>
          <img src="assets/portfolio/games/odisseia-combate.gif" alt="Combat" loading="lazy">
          <figcaption><b>2. Combat</b><br>Face enemies before each puzzle.</figcaption>
        </figure>
        <figure>
          <img src="assets/portfolio/games/odisseia-puzzles.gif" alt="Puzzles" loading="lazy">
          <figcaption><b>3. The 4 transistor networks</b><br>Solve the puzzles and collect tokens to advance.</figcaption>
        </figure>
      </div>

        <h4 class="sheet-h"><img src="assets/halloween/candelabra.png" alt="">Highlights</h4>
        <ul class="sheet-list">
          <li>Puzzles that map Boolean functions onto CMOS pull-up/pull-down networks.</li>
          <li>4 combats, 4 puzzles and 12 coins, with cutscenes and a tutorial.</li>
          <li>Tested with 24 students (undergraduate and master's): correct answers rose on 4 of 5 questions, from 15–19 to 18–22.</li>
          <li>UX evaluation: most answered "strongly agree" on design, immersion, controls and content relevance.</li>
          <li>Published at SBIE (Qualis A3) and a highlight at SIIEPE.</li>
        </ul>

        <div class="sheet-links">
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://katheisabelle.itch.io/odisseia-2d" target="_blank" rel="noopener">play on itch.io</a>
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://sol.sbc.org.br/index.php/sbie/article/view/31298" target="_blank" rel="noopener">paper (SBIE)</a>
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://canva.link/xnmkssbari42h1a" target="_blank" rel="noopener">Presentation (UFPEL thesis)</a>
          </div>
      </article>


      <article class="game-sheet" id="sheet-tnt" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← Game Gallery</span>
        </button>

        <div class="game-sheet__top">
          <div class="game__video">
            <iframe src="https://www.youtube.com/embed/MGeESugYH6k?rel=0" title="TNT Party Game" allowfullscreen loading="lazy"></iframe>
          </div>
          <div class="game-sheet__head">
            <h3>TNT Party Game</h3>
            <p class="game-sheet__status">Final project · Game Developer Bootcamp · Soulcode Academy</p>
            <ul class="chips">
              <li><img src="assets/halloween/magic_wand.png" alt=""><b>Genre</b> 3D Party Game, Multiplayer (4 players)</li>
              <li><img src="assets/halloween/cauldron.png" alt=""><b>Engine</b> Unity</li>
              <li><img src="assets/halloween/bat.png" alt=""><b>Platform</b> Windows · gamepad (joystick)</li>
              <li><img src="assets/halloween/witch_hat.png" alt=""><b>Team</b> 8 people · TNT Energy Drink sponsorship</li>
            </ul>
          </div>
        </div>

        <h4 class="sheet-h"><img src="assets/halloween/jack_o_lantern_happy.png" alt="">My role</h4>
        <p class="role-chips">
          <span>Game Designer</span><span>Game Dev</span><span>Level Designer</span>
          <span>UI Designer</span><span>3D Artist</span><span>Tester</span>
        </p>

        <h4 class="sheet-h"><img src="assets/halloween/spell_book.png" alt="">About</h4>
         <p>In TNT's universe of fun, <strong>four competitors</strong> face a series of <strong>challenges</strong> in Sci-fi environments,
        playing five types of <strong>mini-games</strong>.</p>

        <p>These games were planned and developed for a special event called "Energy Dynamics". Players compete intensely,
        earning points through their performance and by collecting cans scattered around the scene. The goal is to win the
        victory and the TNT prize, awarded to whoever shows the most talent and becomes the event's grand champion.</p>

      <h4 class="sheet-h"><img src="assets/halloween/candelabra.png" alt="">The 5 minigames</h4>
      <ul class="mini-list">
        <li>
          <img src="assets/portfolio/games/tnt-mg1.PNG" alt="False Floor Collection">
          <div><b>False Floor Collection</b><span>Platforming with jumping and reaction time to collect cans without falling.</span></div>
        </li>
        <li>
          <img src="assets/portfolio/games/tnt-mg2.PNG" alt="Chase the Energy">
          <div><b>Chase the Energy</b><span>Split-screen chase and evasion, holding the can for as long as possible.</span></div>
        </li>
        <li>
          <img src="assets/portfolio/games/tnt-mg3.PNG" alt="Energy Circle">
          <div><b>Energy Circle</b><span>Collecting cans on platforms that spin in opposite directions.</span></div>
        </li>
        <li>
          <img src="assets/portfolio/games/tnt-mg4.PNG" alt="Energy Race">
          <div><b>Energy Race</b><span>Random button sequence, where every correct press turns into meters.</span></div>
        </li>
        <li>
          <img src="assets/portfolio/games/tnt-mg5.PNG" alt="Energized Path">
          <div><b>Energized Path</b><span>Racing and collecting, dodging obstacles all the way to the finish.</span></div>
        </li>
      </ul>


        <h4 class="sheet-h"><img src="assets/halloween/cobweb.png" alt="">Highlights</h4>
        <ul class="sheet-list">
          <li>Level design tailored to the dynamics of each minigame.</li>
          <li>Low-poly 3D art with the TNT palette and a neon look.</li>
          <li>Generic, customizable character, with TNT palette colors and helmets with the brand's logo and symbols.</li>
          <li>Menu, rules screen before each match, level select and a podium cutscene at the end.</li>
        </ul>

        <div class="sheet-links">
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://katheisabelle.itch.io/tnt-party-game" target="_blank" rel="noopener">play on itch.io</a>
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://soulcode.com" target="_blank" rel="noopener">Soulcode Academy</a>
        </div>
      </article>



      <article class="game-sheet" id="sheet-knight" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← Game Gallery</span>
        </button>

        <div class="game-sheet__top">
          <div class="game__video">
            <iframe src="https://www.youtube.com/embed/Cniqsc9QfDo?rel=0" title="The Lonely Knight 2D" allowfullscreen loading="lazy"></iframe>
          </div>
          <div class="game-sheet__head">
            <h3>The Lonely Knight 2D</h3>
            <p class="game-sheet__status">Personal project · 2024 · In development</p>
            <ul class="chips">
              <li><img src="assets/halloween/magic_wand.png" alt=""><b>Genre</b> 2D Action-Adventure, Top-down, Single Player</li>
              <li><img src="assets/halloween/cauldron.png" alt=""><b>Engine</b> Unity</li>
              <li><img src="assets/halloween/bat.png" alt=""><b>Platform</b> Windows</li>
              <li><img src="assets/halloween/witch_hat.png" alt=""><b>Team</b> solo</li>
            </ul>
          </div>
        </div>

        <h4 class="sheet-h"><img src="assets/halloween/jack_o_lantern_happy.png" alt="">My role</h4>
        <p class="role-chips">
          <span>Game Designer</span><span>Game Dev</span><span>Level Designer</span>
          <span>Tester</span>
        </p>

        <h4 class="sheet-h"><img src="assets/halloween/spell_book.png" alt="">About</h4>
        <p>A <strong>2D top-down</strong> game where you play a lonely knight in an unknown world,
        fighting assorted creatures and building your own home amid the chaos.</p>
        <p>An experience that mixes survival, introspection and the search for peace in a vast universe.</p>

         <div class="sheet-shots">
          <figure><img src="assets/portfolio/games/knight-1.png" alt="Forest and enemies" loading="lazy"></figure>
          <figure><img src="assets/portfolio/games/knight-2.png" alt="Village" loading="lazy"></figure>
        </div>

        <h4 class="sheet-h"><img src="assets/halloween/candelabra.png" alt="">Highlights</h4>
        <ul class="sheet-list">
          <li>Basic combat against enemies.</li>
          <li>New mechanics in development.</li>
        </ul>


        <div class="sheet-links">
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://katheisabelle.itch.io/the-knight" target="_blank" rel="noopener">play on itch.io</a>
        </div>
      </article>



      <article class="game-sheet" id="sheet-darkness" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← Game Gallery</span>
        </button>

        <div class="game-sheet__top">
          <div class="game__video">
            <iframe src="https://www.youtube.com/embed/SEU_ID_DO_VIDEO?rel=0" title="Adventure of Darkness" allowfullscreen loading="lazy"></iframe>
          </div>
          <div class="game-sheet__head">
            <h3>Adventure of Darkness</h3>
            <p class="game-sheet__status">Personal project · in development</p>
            <ul class="chips">
              <li><img src="assets/halloween/magic_wand.png" alt=""><b>Genre</b> 2D Action, Platformer, Single Player</li>
              <li><img src="assets/halloween/cauldron.png" alt=""><b>Engine</b> Unity</li>
              <li><img src="assets/halloween/bat.png" alt=""><b>Platform</b> Windows</li>
              <li><img src="assets/halloween/witch_hat.png" alt=""><b>Team</b> solo</li>
            </ul>
          </div>
        </div>

        <h4 class="sheet-h"><img src="assets/halloween/jack_o_lantern_happy.png" alt="">My role</h4>
        <p class="role-chips">
          <span>Game Designer</span><span>Game Dev</span><span>Level Designer</span>
          <span>Tester</span>
        </p>

        <h4 class="sheet-h"><img src="assets/halloween/spell_book.png" alt="">About</h4>
        <p>In this <strong>2D platformer</strong>, take on the role of the hero and set out on an epic mission to hunt down and capture DarkSkull,
        a demon bent on spreading chaos across his homeland.</p>
        <p>Face your corrupted allies, explore dark, terrifying scenery, and fight for
        your life while trying to save your world from destruction!</p>


        <div class="sheet-shots">
          <figure><img src="assets/portfolio/games/dark-1.png" alt="Forest and enemies" loading="lazy"></figure>
          <figure><img src="assets/portfolio/games/dark-2.png" alt="Village" loading="lazy"></figure>
        </div>

        <h4 class="sheet-h"><img src="assets/halloween/candelabra.png" alt="">Current status</h4>
        <ul class="sheet-list">
          <li>Basic combat against enemies.</li>
          <li>New mechanics in development.</li>
        </ul>

        <div class="sheet-links">
          <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://katheisabelle.itch.io/adventureofdarkness" target="_blank" rel="noopener">see on itch.io</a>
        </div>
      </article>

    `
};

CARDS_EN.mundo = {
  name: "The World",
  meaning: "delivered to the world",
  eyebrow: "library of scrolls",
  title: "Scientific publications",
  body: `

      <div class="pub-grid">

        <article class="pub-card">
          <header class="pub-card__head">
            <h4>SVR 2026</h4>
            <div class="pub-card__logos">
              <img src="assets/portfolio/pubs/logo-ufpel2.png" alt="UFPel" title="Federal University of Pelotas">
              <img src="assets/portfolio/pubs/logo-capes.png" alt="CAPES" title="CAPES">
            </div>
          </header>

          <a class="pub-card__cover" href="https://svr.sbc.org.br/2026/" target="_blank" rel="noopener">
            <img src="assets/portfolio/pubs/logo-svr.png" alt="SVR 2026 paper cover" loading="lazy">
          </a>

          <div class="pub-card__info">
            <span class="pub-card__tag pub-card__tag--qualis">⭐ 2026 · Qualis A3 · Master's</span>
            <p class="pub-card__title">Characterizing Differences Between VR-Based and Paper-Based Handwriting Assessment: A Pilot Study</p>
            <p class="pub-card__authors">BESERRA, Kathe Isabelle; TORCHELSEN, Rafael Piccin</p>
            <p class="pub-card__desc">Symposium on Virtual and Augmented Reality, Brazil's main virtual and augmented reality conference, organized by the Special Committee on Virtual Reality (CERV) of the Brazilian Computer Society (SBC). In 2026, from Sep 29 to Oct 2, in Goiânia (GO), together with SBGames and SIBGRAPI/ICAT.</p>

            <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="assets/portfolio/pubs/32059.pdf" target="_blank" rel="noopener">
              <img src="assets/halloween/cursed_scroll.png" alt="">
              <span>read paper</span>
            </a>
          </div>
        </article>

        <article class="pub-card">
          <header class="pub-card__head">
            <h4>CBIE — SBIE</h4>
            <div class="pub-card__logos">
              <img src="assets/portfolio/pubs/logo-ufpel2.png" alt="UFPel" title="Federal University of Pelotas">
            </div>
          </header>

          <a class="pub-card__cover" href="https://cbie.sbc.org.br/2026/" target="_blank" rel="noopener">
            <img src="assets/portfolio/pubs/pub-6.png" alt="SBIE paper cover" loading="lazy">
          </a>

          <div class="pub-card__info">
            <span class="pub-card__tag pub-card__tag--qualis">⭐ 2024 · Qualis A3 · Undergraduate</span>
            <p class="pub-card__title">Odisseia 2D: Exploring Logical Paths</p>
            <p class="pub-card__authors">BESERRA, Kathe Isabelle; KESSLER, Henrique; JUNIOR, Leomar Soares Da Rosa</p>
            <p class="pub-card__desc">The Brazilian Congress on Computers in Education (CBIE) is an annual event of the Brazilian Computer Society (SBC) that promotes the exchange of experiences among the scientific, professional, government and business communities in the field of Computers in Education. SBIE (Brazilian Symposium on Computers in Education) is the scientific symposium that is part of the congress.</p>
            <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://sol.sbc.org.br/index.php/sbie/article/view/31298" target="_blank" rel="noopener">
              <img src="assets/halloween/cursed_scroll.png" alt="">
              <span>read paper (in Portuguese)</span>
            </a>
          </div>
        </article>

        <article class="pub-card">
          <header class="pub-card__head">
            <h4>ComIng — UFSM</h4>
            <div class="pub-card__logos">
              <img src="assets/portfolio/pubs/logo-ufpel2.png" alt="UFPel" title="Federal University of Pelotas">
            </div>
          </header>

          <a class="pub-card__cover" href="https://periodicos.ufsm.br/coming/article/view/85263" target="_blank" rel="noopener">
            <img src="assets/portfolio/pubs/pub-4.png" alt="ComIng paper cover" loading="lazy">
          </a>

          <div class="pub-card__info">
            <span class="pub-card__tag">🎓 2023 · Journal · Undergraduate </span>
            <p class="pub-card__title">Qualifying Academic Practices - Digital Inclusion and Diversity at UFPel</p>
            <p class="pub-card__authors"> BESERRA, Kathe; LORENZONI, Maria Júlia; BEZERRA, Louise Queiroz; MACKEDANZ, Tiago; ROCHA, Gabriel; MARTINEZ, Santiago; GUTTIER, Rogéria; JURDINA, Laura Quevedo; ROSA, Leomar Soares da</p>
            <p class="pub-card__desc">Communications and Innovations Gazette (ComIng), UFSM's open-access, continuous-publication scientific journal, with original, peer-reviewed work in computer science, information systems and computer engineering.</p>
            <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://periodicos.ufsm.br/coming/article/view/85263" target="_blank" rel="noopener">
              <img src="assets/halloween/cursed_scroll.png" alt="">
              <span>read paper (in Portuguese)</span>
            </a>
          </div>
        </article>

        <article class="pub-card">
          <header class="pub-card__head">
            <h4>ComIng — UFSM</h4>
            <div class="pub-card__logos">
              <img src="assets/portfolio/pubs/logo-ufpel2.png" alt="UFPel" title="Federal University of Pelotas">
            </div>
          </header>

          <a class="pub-card__cover" href="https://periodicos.ufsm.br/coming/index" target="_blank" rel="noopener">
            <img src="assets/portfolio/pubs/pub-4.png" alt="ComIng paper cover" loading="lazy">
          </a>

          <div class="pub-card__info">
            <span class="pub-card__tag">🎓 2023 · Journal · Undergraduate</span>
            <p class="pub-card__title">Gurias da Comp: Women's Retention in Undergraduate Computer Science and Computer Engineering Programs</p>
            <p class="pub-card__authors">LORENZONI, Maria Júlia; BESERRA, Kathe; BEZERRA, Louise Queiroz; JURDINA, Laura Quevedo; ROSA, Leomar Soares da</p>
            <p class="pub-card__desc">Communications and Innovations Gazette (ComIng), UFSM's open-access, continuous-publication scientific journal, with original, peer-reviewed work in computer science, information systems and computer engineering.</p>
            <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://periodicos.ufsm.br/coming/article/view/85264" target="_blank" rel="noopener">
              <img src="assets/halloween/cursed_scroll.png" alt="">
              <span>read paper (in Portuguese)</span>
            </a>
          </div>
        </article>



        <article class="pub-card">
          <header class="pub-card__head">
            <h4>SIIEPE — CIC</h4>
            <div class="pub-card__logos">
              <img src="assets/portfolio/pubs/logo-ufpel2.png" alt="UFPel" title="Federal University of Pelotas">
              <img src="assets/portfolio/pubs/logo-cnpq.png" alt="CNPq" title="CNPq">
              <img src="assets/portfolio/pubs/logo-capes.png" alt="CAPES" title="CAPES">
            </div>
          </header>

          <a class="pub-card__cover" href="https://wp.ufpel.edu.br/siiepe/" target="_blank" rel="noopener">
            <img src="assets/portfolio/pubs/pub-2.png" alt="SIIEPE CIC paper cover" loading="lazy">
          </a>

          <div class="pub-card__info">
            <span class="pub-card__tag pub-card__tag--award">🏆 2023 · Session Highlight · Undergraduate</span>
            <p class="pub-card__title">The Odyssey of Transistor Networks: Exploring Logical Paths</p>
            <p class="pub-card__authors">BESERRA, Kathe Isabelle; KESSLER, Henrique; JUNIOR, Leomar Soares Da Rosa</p>
            <p class="pub-card__desc">UFPel's Scientific Initiation Congress (CIC), part of SIIEPE (Integrated Week of Innovation, Teaching, Research and Extension). UFPel's largest scientific event, bringing together students and professors from many different fields and from numerous teaching and research institutions in Brazil and abroad.</p>
            <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://anais-siiepe.ufpel.edu.br/2023/CE_04120.pdf" target="_blank" rel="noopener">
              <img src="assets/halloween/cursed_scroll.png" alt="">
              <span>read paper (in Portuguese)</span>
            </a>
          </div>
        </article>

        <article class="pub-card">
          <header class="pub-card__head">
            <h4>SIIEPE — CEG</h4>
            <div class="pub-card__logos">
              <img src="assets/portfolio/pubs/logo-ufpel2.png" alt="UFPel" title="Federal University of Pelotas">
              <img src="assets/portfolio/pubs/logo-cnpq.png" alt="CNPq" title="CNPq">
              <img src="assets/portfolio/pubs/logo-capes.png" alt="CAPES" title="CAPES">
            </div>
          </header>

          <a class="pub-card__cover" href="https://wp.ufpel.edu.br/siiepe/" target="_blank" rel="noopener">
            <img src="assets/portfolio/pubs/pub-2.png" alt="SIIEPE CEG paper cover" loading="lazy">
          </a>

          <div class="pub-card__info">
            <span class="pub-card__tag">🎓 2023 · Published Paper · Undergraduate</span>
            <p class="pub-card__title">Gurias da Comp: Women's Retention in Undergraduate Computing Programs</p>
            <p class="pub-card__authors">LORENZONI, Maria Júlia; BESERRA, Kathe; BEZERRA, Louise Queiroz; JURDINA, Laura Quevedo; ROSA, Leomar Soares da</p>
            <p class="pub-card__desc">UFPel's Undergraduate Teaching Congress (CEG), part of SIIEPE (Integrated Week of Innovation, Teaching, Research and Extension). Promoted by the Dean's Office for Teaching, a space to share work and experiences in undergraduate teaching.</p>
            <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://anais-siiepe.ufpel.edu.br/2023/G1_06127.pdf" target="_blank" rel="noopener">
              <img src="assets/halloween/cursed_scroll.png" alt="">
              <span>read paper (in Portuguese)</span>
            </a>
          </div>
        </article>



        <article class="pub-card">
          <header class="pub-card__head">
            <h4>SIIEPE — CEG</h4>
            <div class="pub-card__logos">
              <img src="assets/portfolio/pubs/logo-ufpel2.png" alt="UFPel" title="Federal University of Pelotas">
              <img src="assets/portfolio/pubs/logo-cnpq.png" alt="CNPq" title="CNPq">
              <img src="assets/portfolio/pubs/logo-capes.png" alt="CAPES" title="CAPES">
            </div>
          </header>

          <a class="pub-card__cover" href="https://wp.ufpel.edu.br/siiepe/" target="_blank" rel="noopener">
            <img src="assets/portfolio/pubs/pub-2.png" alt="SIIEPE CEG paper cover" loading="lazy">
          </a>

          <div class="pub-card__info">
            <span class="pub-card__tag pub-card__tag--award">🏆 2023 · Session Highlight · Undergraduate</span>
            <p class="pub-card__title">Qualifying Academic Practices: Digital Inclusion and Diversity at UFPel</p>
            <p class="pub-card__authors">BESERRA, Kathe; LORENZONI, Maria Julia; BEZERRA, Louise Queiroz; MACKEDANZ, Tiago; ROCHA, Gabriel; JURGINA, Laura Q.; JÚNIOR, Leomar Soares Da Rosa</p>
            <p class="pub-card__desc">UFPel's Undergraduate Teaching Congress (CEG), part of SIIEPE (Integrated Week of Innovation, Teaching, Research and Extension). Promoted by the Dean's Office for Teaching, a space to share work and experiences in undergraduate teaching.</p>
            <a class="px-btn px-btn--wide px-btn--small pub-card__btn" href="https://anais-siiepe.ufpel.edu.br/2023/G2_05582.pdf" target="_blank" rel="noopener">
              <img src="assets/halloween/cursed_scroll.png" alt="">
              <span>read paper (in Portuguese)</span>
            </a>
          </div>
        </article>

      </div>
    `
};

CARDS_EN.estrela = {
  name: "The Star",
  meaning: "inspiration & creation",
  eyebrow: "art studio",
  title: "Art & drawings",
  body: `

        <h3 class="art-title">Digital illustration 🎨</h3>

        <figure class="art-video">
          <div class="art-video__frame">
            <iframe src="https://www.youtube.com/embed/vqi48ETMxx8?rel=0" title="Käthe Kollwitz: Coincidences that intertwine" allowfullscreen loading="lazy"></iframe>
          </div>
          <figcaption>KÄTHE KOLLWITZ: Coincidences that intertwine [PART 1] <img class="cap-icon" src="assets/portfolio/icons/adobe-photoshop.png" alt="Photoshop" title="Photoshop"></figcaption>
        </figure>

        <div class="gallery">
          <figure class="gallery__item">
            <img src="assets/portfolio/art/venus.jpg" alt="Birth of Venus">
            <span class="game-tile__wip">WIP</span>
            <figcaption>THE BIRTH OF VENUS<img class="cap-icon" src="assets/portfolio/icons/adobe-photoshop.png" alt="Photoshop" title="Photoshop"></figcaption>
          </figure>
          <figure class="gallery__item">
            <img src="assets/portfolio/art/god.jpg" alt="You're God">
            <span class="game-tile__wip">WIP</span>
            <figcaption>UI SKETCH: YOU'RE GOD<img class="cap-icon" src="assets/portfolio/icons/adobe-photoshop.png" alt="Photoshop" title="Photoshop"></figcaption>
          </figure>
          <figure class="gallery__item">
            <img src="assets/portfolio/art/personagem2.jpg" alt="Cartoon character">
            <figcaption>CARTOON CHARACTER<img class="cap-icon" src="assets/portfolio/icons/adobe-photoshop.png" alt="Photoshop" title="Photoshop"></figcaption>
          </figure>
          <figure class="gallery__item">
            <img src="assets/portfolio/art/personagens.jpg" alt="Cartoon characters">
            <figcaption>CARTOON CHARACTERS<img class="cap-icon" src="assets/portfolio/icons/adobe-photoshop.png" alt="Photoshop" title="Photoshop"></figcaption>
          </figure>
          <figure class="gallery__item">
            <img src="assets/portfolio/art/wally.jpg" alt="Wally sketch">
            <span class="game-tile__wip">WIP</span>
            <figcaption>WALLY SKETCH<img class="cap-icon" src="assets/portfolio/icons/adobe-photoshop.png" alt="Photoshop" title="Photoshop"></figcaption>
          </figure>
        </div>

        <h3 class="art-title">3D modeling 🗿</h3>
        <div class="gallery">
          <figure class="gallery__item">
            <img src="assets/portfolio/art/modeling3.jpg" alt="Character made of basic shapes">
            <figcaption>CHARACTER FROM BASIC SHAPES<img class="cap-icon" src="assets/portfolio/icons/Blender.png" alt="Blender" title="Blender"></figcaption>
          </figure>
          <figure class="gallery__item">
            <img src="assets/portfolio/art/modeling1.jpg" alt="Characters with hair particles">
            <figcaption>CHARACTERS WITH PARTICLES<img class="cap-icon" src="assets/portfolio/icons/Blender.png" alt="Blender" title="Blender"></figcaption>
          </figure>
          <figure class="gallery__item">
            <img src="assets/portfolio/art/modeling2.jpg" alt="Modeling in progress">
            <span class="game-tile__wip">WIP</span>
            <figcaption>CHARACTER IN SCULPT MODE<img class="cap-icon" src="assets/portfolio/icons/Blender.png" alt="Blender" title="Blender"></figcaption>
          </figure>
          <figure class="gallery__item">
            <img src="assets/portfolio/art/shield.jpg" alt="Rendered shield">
            <figcaption>SHADERS AND PAINTING<img class="cap-icon" src="assets/portfolio/icons/Blender.png" alt="Blender" title="Blender"></figcaption>
          </figure>
        </div>
    `
};

CARDS_EN.roda = {
  name: "The Wheel of Fortune",
  meaning: "ideas in motion",
  eyebrow: "blog",
  title: "Chronicles of the Wheel",
  body: `

      <p><strong>I'm reserving this area of the site for a personal blog. Here I'll write about
      topics I find interesting related to computing, games, artificial intelligence and art.
      The goal is to share useful tips, information and curiosities for anyone who wants to dive deeper into these topics.</strong></p>

      <div class="games-grid" id="gamesGrid">

        <button class="game-tile" data-game="post-1">
          <img class="game-tile__cover" src="assets/portfolio/blog/posts/dicas.png" alt="">
          <span class="game-tile__wip">WIP</span>
          <span class="game-tile__title">Game Tips</span>
          <span class="game-tile__meta">coming soon</span>
        </button>

        <button class="game-tile" data-game="post-2">
          <img class="game-tile__cover" src="assets/portfolio/blog/posts/IA.png" alt="">
          <span class="game-tile__wip">WIP</span>
          <span class="game-tile__title">Games & AI</span>
          <span class="game-tile__meta">coming soon</span>
        </button>

        <button class="game-tile" data-game="post-3">
          <img class="game-tile__cover" src="assets/portfolio/blog/posts/design.png" alt="">
          <span class="game-tile__wip">WIP</span>
          <span class="game-tile__title">Game Design</span>
          <span class="game-tile__meta">coming soon</span>
        </button>

        <button class="game-tile" data-game="post-4">
          <img class="game-tile__cover" src="assets/portfolio/blog/posts/pesquisa.png" alt="">
          <span class="game-tile__wip">WIP</span>
          <span class="game-tile__title">Research & VR</span>
          <span class="game-tile__meta">coming soon</span>
        </button>

        <button class="game-tile" data-game="post-5">
          <img class="game-tile__cover" src="assets/portfolio/blog/posts/arte.png" alt="">
          <span class="game-tile__wip">WIP</span>
          <span class="game-tile__title">Art & 3D</span>
          <span class="game-tile__meta">coming soon</span>
        </button>

      </div>

      <article class="game-sheet" id="sheet-post-1" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← All posts</span>
        </button>

        <h3 class="art-title">First post</h3>
        <span class="pub-card__tag">coming soon</span>

        <p>This post is still being written.</p>
      </article>

      <article class="game-sheet" id="sheet-post-2" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← All posts</span>
        </button>

        <h3 class="art-title">Games & AI</h3>
        <span class="pub-card__tag">coming soon</span>

        <p>This post is still being written.</p>
      </article>


      <article class="game-sheet" id="sheet-post-3" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← All posts</span>
        </button>

        <h3 class="art-title">Game Design</h3>
        <span class="pub-card__tag">coming soon</span>

        <p>This post is still being written.</p>
      </article>


      <article class="game-sheet" id="sheet-post-4" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← All posts</span>
        </button>

        <h3 class="art-title">Research & VR</h3>
        <span class="pub-card__tag">coming soon</span>

        <p>This post is still being written.</p>
      </article>

      <article class="game-sheet" id="sheet-post-5" hidden>
        <button class="px-btn px-btn--wide px-btn--small" data-back>
          <span>← All posts</span>
        </button>

        <h3 class="art-title">Art & 3D</h3>
        <span class="pub-card__tag">coming soon</span>

        <p>This post is still being written.</p>
      </article>
    `
};

