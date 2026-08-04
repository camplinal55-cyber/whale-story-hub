// Mock content for Free The Whales replica.
// This mirrors the reference site content. Will be replaced by backend (MongoDB) later.

const BASE = "https://ftw-hub-h2hk6a5h.manus.space/manus-storage";

export const content = {
  kickstarterUrl: "https://www.kickstarter.com/",
  logo: `${BASE}/ftw-logo_14a21b59_5a044585.png`,
  hero: {
    bg: `${BASE}/ftw-hero-real_732e0ab4_204e430c.webp`,
    presents: "Beach Avenue Media Presents",
    titleTop: "FREE THE",
    titleBottom: "WHALES",
    tagline: "Too Young to Die",
  },
  directorsVision: {
    label: "// DIRECTOR'S VISION",
    title: "The Cost of Indifference",
    paragraphs: [
      "The inherent angst of young adulthood was the initial attitude of Free The Whales. Walking on the frigid streets of Frankfurt after another soulless day as an international finance intern, surrounded by gothic architecture and gloomy skies, I encountered a street painter recreating the famous painting \"Landscape With the Fall of Icarus.\" The canvas brilliantly displayed the distraction of life at every depth of the frame\u2014the farmer, the fisherman, the trading ships, the bustling port city. And in the bottom right corner: an angel who violently crashes into the sea.",
      "Icarus flew too close to the sun and he failed. Guess what? No one cares. Everyone is too busy with the responsibility of life to notice the tragedy of a divine being. But once he reaches the impossible objective, everyone will turn from their plow, their rod, their ship, and see the man who touched the sun.",
      "I realized the importance of my perspective and how I was wasting my talents and passions for nothing. Nihilism was the origin, but the absurdist inside myself was born. I was consumed with being somebody instead of just being\u2014and I had to make a fuss about it that could last in perpetuity.",
      "Free The Whales was written for my twin sister\u2014a total badass who has persevered through some of the darkest situations imaginable. She has always had a big heart for the misfits and a fierce desire to fight for the misunderstood. She is a saint who is secretly lonely, afraid to face the truth of her buried pain, but she is a liberator, a lover, and a warrior. I wanted to watch her become a hero on screen while witnessing the furious wrath that is capable of the most pure-hearted person I could ever know.",
      "\"In essence, Elwood, we're on a mission from God.\"",
      "Every impossible problem that came up in production had miraculous solutions jumping at us. Free The Whales does not mean Fuck the World at all. It means something far more profound: the power of seeing, the cost of indifference, and the possibility of redemption.",
    ],
    attribution: "\u2014 Antonio Abellan, Writer & Director, M\u00e9tis Nation British Columbia",
  },
  premise: {
    label: "// THE PREMISE",
    quote:
      "\"When a reckless young man, tasked by his corrupt cop uncle to deliver an old English sports car, ignores a simple set of rules, he unwittingly sets off a nightmarish chain of events\u2014plunging himself, his best friend, and his girlfriend into a world of crime, betrayal, and deadly consequences.\"",
    credit: "A Film by Antonio Abellan",
  },
  story: {
    labelA: "// IT AIN'T ABOUT THE WHALES",
    titleAWhite: "HE BROKE THE RULES.",
    titleARed: "THE RULES BROKE HIM.",
    paragraphsA: [
      "Tony, 25, is coasting through life in Vancouver, directionless and impulsive. Under a DUI suspension and still on probation for a petty crime, he struggles with responsibility\u2014until his uncle Julian, a corrupt cop, offers him an easy payday.",
      "Deliver an old English sports car. Follow three simple rules. Drive the car only once. Deliver it to Julian's associate. Don't open the trunk.",
      "But Tony is not one to follow rules.",
    ],
    rules: [
      { n: 1, label: "RULE 01", text: "DRIVE ONCE ONLY", img: `${BASE}/ftw-tony-real_42392ac2_7548dd11.webp`, alt: "Tony with red bandana by the car" },
      { n: 2, label: "RULE 02", text: "DELIVER TO JULIAN'S ASSOCIATE", img: `${BASE}/ftw-gwen-real_f15c5f4d_d782700b.webp`, alt: "Tony and Gwen together in the car" },
      { n: 3, label: "RULE 03", text: "DON'T OPEN THE TRUNK", img: `${BASE}/ftw-night-real_18d620f8_e814c522.webp`, alt: "Tony driving alone at night" },
    ],
    labelB: "// AS PARANOIA GRIPS HIM",
    titleB: "LYING NEVER PAYS",
    paragraphsB: [
      "Tony turns to his best friend Louis, a well-intentioned but equally reckless companion. Meanwhile, his girlfriend Gwen\u2014a free-spirited idealist haunted by her past\u2014becomes an unintended casualty of Tony's poor choices.",
      "Lured into the den of a violent sex trafficking ring, Gwen must confront the darkness she's always feared\u2014and find the strength she never knew she had.",
    ],
    labelC: "// DESPERATE TO FIX HIS MISTAKES",
    titleC: "ACTIONS HAVE CONSEQUENCES",
    paragraphsC: [
      "Tony makes one bad decision after another, drawing the attention of a washed-up radio host turned wannabe private investigator and a ruthless criminal underworld.",
      "As the night unfolds, the weight of Tony's actions\u2014and his defiance of the Golden Rule\u2014tightens around him like a noose.",
    ],
  },
  mmiw: {
    label: "// THE UNSEEN",
    titleWhite: "Missing and Murdered",
    titleRed: "Indigenous Women",
    intro:
      "Free The Whales features an unnamed Indigenous girl\u2014an enigma representing the whole of missing Indigenous women. She appears twice in the film, bookending the narrative with a haunting mirror of collective indifference.",
    beats: [
      { head: "Opening:", body: "A truck stop backroom. Women are held captive for sex trafficking. The film opens with this horror\u2014the foreshadowing of what is to come." },
      { head: "The Moment of Indifference:", body: "At Gwen's homeless shelter, the Indigenous girl appears\u2014gaunt, hollow-eyed, in desperate need. She makes eye contact with Gwen and Tony. They see her. And they do nothing. She walks back into the darkness." },
      { head: "The Reckoning:", body: "The film returns to that same truck stop backroom. The Indigenous girl is among the women being held. Gwen, now understanding the cost of indifference, liberates them all. But the question remains: what if Tony and Gwen had helped her at the shelter?" },
    ],
    resourcesTitle: "Get Involved",
    resourcesIntro:
      "The disappearance and murder of Indigenous women and girls is a crisis. If you or someone you know needs help, or if you want to support these organizations, please reach out.",
    resources: [
      { name: "Native Women's Association of Canada (NWAC)", url: "https://www.nwac.ca/" },
      { name: "RCMP Missing and Murdered Indigenous Women Database", url: "https://www.rcmp-grc.gc.ca/en/missing-murdered-indigenous-women" },
      { name: "Stolen Sisters Campaign", url: "https://www.amnesty.ca/our-work/issues/stolen-sisters" },
      { name: "BC Missing Indigenous Women & Girls Task Force", url: "https://www2.gov.bc.ca/gov/content/safety/crime-prevention/missing-persons/missing-indigenous-women-girls" },
    ],
  },
  goldenRule: {
    img: `${BASE}/ftw-golden-rule_967a99ed_f24aad9b.jpg`,
    label: "// AT ITS CORE",
    titleWhite: "THE GOLDEN RULE",
    titleRed: "IS LAW",
    body:
      "Free The Whales is a cautionary tale about self-destruction and redemption. With a pulsing rock-and-roll soundtrack, stylized dialogue, and darkly poetic storytelling, the film forces audiences to confront the cost of selfishness, the fragility of life, and the devastating consequences of indifference.",
    slogan: "FTW = F**K THE WORLD = FREE THE WHALES",
  },
  cast: {
    label: "// THE PLAYERS",
    titleWhite: "OUR",
    titleRed: "AMAZING CAST",
    members: [
      { character: "TONY", actor: "ANTONIO ABELLAN", tagline: "Reckless. Impulsive. Too young to die.", img: `${BASE}/ftw-cast-tony_c0db1f68_3942a932.jpg` },
      { character: "GWEN", actor: "SILVIANA URSU", tagline: "Free-spirited. Haunted. Unbreakable.", img: `${BASE}/ftw-cast-gwen_bfcf18a6_26b5a770.jpg` },
      { character: "LOUIS", actor: "QUINN NELSON", tagline: "Loyal. Well-intentioned. Equally doomed.", img: `${BASE}/ftw-cast-louis_854a5991_0910d91d.jpg` },
      { character: "JULIAN", actor: "JOSH PANAGIOTOU", tagline: "Corrupt. Calculating. Uncle from hell.", img: `${BASE}/ftw-cast-julian_6e321ebc_5ace5dd8.jpg` },
      { character: "SULLY", actor: "AL CAMPLIN", tagline: "Julian's associate. Dangerous.", img: `${BASE}/ftw-cast-sully_409a7e9a_8c1d0b9c.jpg` },
      { character: "MAURICE", actor: "JAROD CAMPBELL", tagline: "Washed-up radio host. Wannabe PI.", img: `${BASE}/ftw-cast-maurice_421e06e8_be1dfbdf.jpg` },
    ],
    credit: "Written & Directed by ANTONIO ABELLAN \u2022 Produced by AL CAMPLIN",
  },
  filmmakers: {
    label: "// THE VISION",
    titleWhite: "Meet the",
    titleRed: "Filmmakers",
    people: [
      {
        name: "Al Camplin",
        role: "Producer | Executive Producer | Co-Founder, FTW Productions Inc.",
        bio: [
          "Al Camplin is a Canadian producer, entrepreneur, and commercial airline captain with over five decades of aviation experience and an accomplished career spanning aviation, business, and independent filmmaking.",
          "Beginning his flying career in 1975, Al became a Boeing 747 Captain with Cathay Pacific Airways, where he served for nearly twenty years, including as a Line Training and Check Captain. He currently flies as a Captain with Flair Airlines.",
          "Beyond aviation, Al has founded and led several successful business ventures, including Checkmate Geosynthetics Inc. and Beach Avenue Media Inc. He is also the co-creator of NodOrNot, a global opinion and decision-making platform designed to measure public sentiment through structured voting.",
          "Driven by a passion for meaningful storytelling, Al co-founded FTW Productions Inc. and produced its debut feature film, Free The Whales. His producing philosophy combines disciplined project management with a commitment to telling emotionally powerful stories that resonate with audiences while maintaining high production values despite independent budgets.",
        ],
      },
      {
        name: "Antonio (Tony) Abellan",
        role: "Writer | Director | Editor | Co-Founder, FTW Productions Inc.",
        bio: [
          "Antonio \"Tony\" Abellan is a Canadian writer, director, editor, and filmmaker whose work combines emotionally driven storytelling with visually distinctive cinematic style. As co-founder of FTW Productions Inc., he serves as the company's primary creative force, overseeing writing, directing, editorial development, and post-production.",
          "Tony made his feature directorial debut with Free The Whales, a Vancouver-set neo-noir crime drama exploring themes of temptation, family, moral consequence, redemption, and the difficult choices that define character. The project reflects his commitment to creating character-driven stories that challenge audiences while remaining accessible and entertaining.",
          "A citizen of the M\u00e9tis Nation British Columbia, Tony brings an Indigenous perspective to his creative work while focusing on universal stories that examine justice, identity, responsibility, and hope. His approach to filmmaking emphasizes authentic performances, visual storytelling, and emotionally grounded narratives.",
          "Working closely with producer Al Camplin, Tony is committed to elevating independent Canadian filmmaking through projects designed for both festival audiences and international distribution. He continues to develop feature films and original media properties that blend commercial appeal with meaningful storytelling.",
        ],
      },
    ],
  },
  philosophy: {
    label: "// THE PHILOSOPHY",
    title: "WHY THIS STORY MATTERS",
    paragraphs: [
      "There is a core principle that is the foundation of our story: the Golden Rule. Treat others as you'd like to be treated. Don't put yourself ahead of your community or family. Don't consider others to be beneath you.",
      "Tony seems to have everything but he missed out on three essential character traits: integrity, good judgment, and truthfulness. He thinks he's too good for societal norms and that he's above the law. He's giving the metaphorical finger to the world.",
      "What would happen if you gave the finger to some of the guard rails of life? Fate will find itself tested as we watch Tony poorly navigate ensuing turning points, creating an ever-tightening vortex of events that will spit him out on a collision course with death.",
    ],
    closingA: "A story for all generations.",
    closingB: "Exploring timeless themes of consequence and redemption.",
  },
  pressKit: {
    label: "// PRESS & MEDIA",
    title: "PRESS KIT",
    intro:
      "Behind-the-scenes stills and production imagery for press, festivals, and distributors. Download the press kit or reach out for high-resolution assets.",
    cta: "Download Press Kit",
    photos: [
      { url: "https://customer-assets-eiarnc6j.emergentagent.net/job_whale-story-hub/artifacts/0ytg4587_image.png", caption: "On location \u2014 principal photography" },
      { url: "https://customer-assets-eiarnc6j.emergentagent.net/job_whale-story-hub/artifacts/3iemzg10_image.png", caption: "Camera department rigging a scene" },
      { url: "https://customer-assets-eiarnc6j.emergentagent.net/job_whale-story-hub/artifacts/mw1r6c92_image.png", caption: "The convertible \u2014 a character in itself" },
      { url: "https://customer-assets-eiarnc6j.emergentagent.net/job_whale-story-hub/artifacts/qpxfbtuf_image.png", caption: "Night exterior \u2014 cast & crew" },
      { url: "https://customer-assets-eiarnc6j.emergentagent.net/job_whale-story-hub/artifacts/2twjtzz4_8288DE4C-4D19-4F6D-ABD7-C1A7C1165436_4_5005_c.jpeg", caption: "Character on set" },
    ],
  },
  trailer: {
    label: "// OFFICIAL TRAILER",
    title: "WATCH THE TRAILER",
    // Real trailer provided by user.
    youtubeId: "W6EwrZegJQ8",
    poster: `${BASE}/ftw-night-real_18d620f8_e814c522.webp`,
    caption: "FREE THE WHALES IS NOT ABOUT WHALES.",
  },
  fund: {
    label: "// HELP US FINISH THIS FILM",
    title: "FUND THIS FILM",
    body:
      "Free The Whales is in post-production and we need your help to cross the finish line. Back us on Kickstarter and be part of bringing this story to life.",
    cta: "Back Us on Kickstarter",
    footnote: "EVERY DOLLAR COUNTS. EVERY BACKER MATTERS.",
  },
};

export default content;
