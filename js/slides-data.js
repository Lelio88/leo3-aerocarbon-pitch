/**
 * Notes du présentateur, affichées dans presenter.html (jamais sur l'écran public).
 *
 * Pour chaque slide : `title`, `speaker` (Lelio, Eloi ou Both), `notes` (notes[0] = ouverture,
 * notes[k] = ce qu'on dit quand la k-ième étape apparaît) et `qa` (questions probables, réponses
 * en anglais, prêtes à dire).
 *
 * Choix non évidents :
 *  - Le texte parlé est celui des auteurs, MOT POUR MOT (choix explicite : ne pas le corriger).
 *  - Les indications entre crochets [en français] sont des didascalies, pas du texte à dire.
 *    Tout ce qui est hors crochets se dit, et se dit en anglais.
 *
 * Invariant : l'ordre et le nombre de slides suivent index.html, et le nombre de lignes de
 * `notes` vaut 1 + le nombre d'étapes (data-step) de la slide.
 */
window.SLIDES = [
  {
    title: "Title",
    speaker: "Lelio",
    notes: [
      "Hello. We are Lelio and Eloi from AeroCarbon Solutions. Our project is a machine that captures carbon dioxide directly from the air and turns it into clean liquid fuel.",
    ],
  },
  {
    title: "The problem",
    speaker: "Lelio",
    notes: [
      "Today, we have a big problem with the green transition:",
      "we can electrify cars, sure,",
      "but we can’t put heavy batteries in helicopters, cargo ships, or big trucks.",
      "[Montrer le graphique] Look at this graph: per kilogram, liquid fuel stores about 50 times more energy than a battery.",
      "They still need liquid fuel. This is our solution. Eloi is going to explain what our product looks like and how it actually works.",
    ],
    qa: [
      { q: "Why not use hydrogen directly?", a: "Hydrogen is very hard to store and to transport, and it doesn't work in normal engines. Our liquid fuel works with the engines and the infrastructure we already have." },
    ],
  },
  {
    title: "How it works",
    speaker: "Eloi",
    notes: [
      "As Lelio just said, the concept is to use carbon dioxide and water to make our fuel. The chemistry behind this process is not as complicated that we could believe and is already knowed. The problem is that when you want to make a big quantity without using crazy amounts of electricity, everything becomes very complex.",
      "Our solution uses multiple extremely thin filters to extract CO2 and H2O from the air.",
      "We use electricity to make electrolyses which allow us to get hydrogen.",
      "The next step is to extract the carbon from the CO2 and to add the hydrogen using 5 different catalysts",
      "to produce an excellent quality fuel using only 30% more energy in electricity than the energy stocked in the liquid fuel.",
    ],
    qa: [
      { q: "What kind of fuel do you produce?", a: "A synthetic hydrocarbon fuel, very close to diesel or kerosene, so it works in normal engines without any modification." },
    ],
  },
  {
    title: "Our edge: efficiency",
    speaker: "Eloi",
    notes: [
      "As I just said, our technology is extremely efficient",
      "especially compared to what was made by other technologies before. [Ligne du haut] Today, they need about 200% more electricity than the energy in the fuel.",
      "[Ligne du bas] With AeroCarbon, we only need 30% more.",
      "Also, this solution doesn’t need a water tank because it is already extracted from the atmosphere.",
    ],
    qa: [
      { q: "Is +30% really possible?", a: "Go to backup slide 11. Today it is about +200%. Our ultra-thin filters and our five catalysts are the breakthrough, and the full-size machine will prove it." },
    ],
  },
  {
    title: "Market 1: the power grid",
    speaker: "Lelio",
    notes: [
      "Thanks, Eloi. So, who needs this? We actually see two main markets for our technology. First, at a large industrial scale, for cities and energy companies.",
      "As we shift towards more wind or solar power, it becomes harder to manage fluctuations in our electricity production.",
      "Since we can’t control the weather, we will face major peaks when production exceeds demand.",
      "[Montrer le graphique] For example, in California, the wind and solar power that is wasted every year more than doubled in just three years.",
      "With our system, we can absorb that excess electricity to capture carbon dioxide and produce fuel. So, in a way, our machine acts like a big liquid battery that helps stabilize the power grid, while making fuel that works in normal engines.",
    ],
    qa: [
      { q: "Why not just use big batteries for the grid?", a: "Batteries store electricity for a few hours. Fuel can be stored for months, transported anywhere, and used directly in heavy transport." },
      { q: "Where do your numbers come from?", a: "From the U.S. Energy Information Administration: California wasted 3.4 terawatt-hours of wind and solar power in 2024." },
    ],
  },
  {
    title: "Market 2: isolated places",
    speaker: "Lelio",
    notes: [
      "Second, on a much smaller scale, for isolated places.",
      "If you’re on a boat in the middle of the ocean",
      "or in a high-mountain refuge, delivering fuel is expensive and batteries are way too heavy.",
      "With a compact unit, they can just produce their own fuel on-site. Now, let’s talk about money. Eloi, how much do we need to launch this?",
    ],
    qa: [
      { q: "Where does a compact unit get its electricity?", a: "From local solar panels or wind turbines: the unit turns that electricity into fuel that can be stored." },
    ],
  },
  {
    title: "The ask",
    speaker: "Eloi",
    notes: [
      "To be able to finish our first version and to launch the production, we need a huge amount of money.",
      "That’s why we ask 5 millions USD to make Aerocarbon Solutions the future of energy storage.",
    ],
  },
  {
    title: "What you get",
    speaker: "Lelio",
    notes: [
      "I’m pretty sure there’s a question burning on your lips. What do you get if you invest with us today ?",
      "In exchange for 5 millions dollars, we are offering 10% of our company.",
      "Since we are still at an early stage, you’re getting in before we deploy our first pilot units.",
      "We plan to make money not just by selling the machines, but also through long-term maintenance contracts. It’s a concrete way to invest in a technology that solves the two biggest problems of humankind : energy storage and clean fuel for heavy transport. I will let Eloi tell you how we’re going to spend that money and finish up.",
    ],
    qa: [
      { q: "Why is your company worth $50 million?", a: "Because we have a breakthrough technology, two big markets, orders we have already received, and recurring revenue from maintenance contracts. And you get in before our first pilot units." },
    ],
  },
  {
    title: "Use of the money",
    speaker: "Eloi",
    notes: [
      "We believe in our project and we think that a lot of companies or even cities will want to buy and sign a contract with us,",
      "but first we need to build a full size machine to prove that it works perfectly as we announced",
      "and we need this money to produce the first commands that we already receive.",
      "After that we will get paid",
      "and have enough money to continue to produce on a bigger scale.",
    ],
    qa: [
      { q: "When will you be profitable?", a: "As soon as we deliver the first orders we have already received. After that, maintenance contracts bring regular revenue." },
    ],
  },
  {
    title: "Thank you / questions",
    speaker: "Both",
    notes: [
      "[Ensemble] Thank you for your attention. We are now ready to answer your questions. [Slides de réserve : 11 (+30 % réaliste ?) et 12 (concurrence). Taper le numéro au clavier pour y sauter.]",
    ],
    qa: [
      { q: "Is your fuel really clean? You still burn it.", a: "When it burns, it releases the CO2 we took from the air. So the cycle is almost carbon-neutral, as long as we use renewable electricity." },
      { q: "What is your biggest risk?", a: "Scaling up. That is exactly why the first step is a full-size machine, to prove the technology before mass production." },
      { q: "Who are your competitors?", a: "Go to backup slide 12." },
    ],
  },
  {
    title: "Backup: is +30% realistic?",
    speaker: "Both",
    notes: [
      "[Réserve : seulement en réponse à une question sur le rendement.]",
      "The chemistry is well known. The real challenge is to do it at a large scale with little electricity.",
      "Our ultra-thin filters capture CO2 and water using less energy.",
      "We use five specialised catalysts, so each step works in its best conditions.",
      "And the full-size machine is exactly what your money will prove.",
    ],
    qa: [
      { q: "And if you only reach +60%?", a: "We would still need about half the electricity of existing technologies, so we would still be very competitive." },
    ],
  },
  {
    title: "Backup: competition",
    speaker: "Both",
    notes: [
      "[Réserve : seulement en réponse à une question sur la concurrence.]",
      "Climeworks captures CO2 from the air, but it does not make fuel.",
      "HIF Global makes synthetic fuel, but in huge, fixed industrial plants.",
      "We do both in one machine, from grid scale to compact units for isolated places.",
    ],
  },
];
