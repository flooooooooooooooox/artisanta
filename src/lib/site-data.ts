export const siteConfig = {
  name: "Propre Éclat",
  tagline: "La différence de propreté",
  sector: "Nettoyage professionnel et particulier",
  phone: "07 68 12 93 19",
  phoneHref: "tel:+33768129319",
  email: "Propreeclat@gmail.com",
  serviceArea: "Caen et alentours (+20 km)",
  // Horaires d'ouverture (identiques 7j/7)
  hours: {
    display: "Tous les jours · 8h30 – 19h00",
    short: "7j/7 · 8h30–19h00",
    opens: "08:30",
    closes: "19:00",
  },
  // Localisation (niveau ville — l'adresse exacte du siège reste à compléter dans les mentions légales)
  city: "Caen",
  postalCode: "14000",
  region: "Normandie",
  country: "FR",
  geo: { lat: 49.1829, lng: -0.3707 },
  // Rayon d'intervention en km autour de Caen (utilisé pour la carte et les données structurées)
  serviceRadiusKm: 20,
  // Année de création de l'entreprise
  foundingYear: "2023",
  // Communes couvertes dans le rayon de 20 km (SEO local)
  areaServed: [
    "Caen",
    "Hérouville-Saint-Clair",
    "Ifs",
    "Mondeville",
    "Colombelles",
    "Ouistreham",
    "Bretteville-sur-Odon",
    "Fleury-sur-Orne",
    "Giberville",
    "Cormelles-le-Royal",
    "Épron",
    "Douvres-la-Délivrande",
  ],
  // URL de production (domaine definitif)
  url: "https://www.propre-eclat.fr",
  // Note moyenne affichée sur la fiche Google (reviewCount à compléter si connu)
  googleRating: 4.8,
  googleReviewCount: null as number | null,
  facebookUrl:
    "https://www.facebook.com/p/La-touche-brico-et-Propre-Eclat-services-100064082501529/",
  googleReviewsUrl:
    "https://www.google.com/search?sa=X&sca_esv=9a055b7939c8dc0b&hl=fr-FR&sxsrf=APpeQnuOEFcBMERQ-aPknSLoohdzAXknnA:1783983854821&q=Propre+Eclat+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NjcyMzE2MzIzNja3NDUxNjA13MDI-IpRMKAov6AoVcE1OSexRMGxLLN4ESumGADk2IVuQgAAAA&rldimm=3726436263379543051&tbm=lcl&ved=2ahUKEwjumc7f4dCVAxX7TaQEHWd7OdgQ9fQKegQIRRAG&biw=1536&bih=730&dpr=1.25#lkt=LocalPoiReviews",
};

export const services = [
  {
    slug: "nettoyage-vitres",
    title: "Nettoyage des vitres",
    description:
      "Vitres, baies vitrées et surfaces vitrées nettoyées sans traces, pour un intérieur toujours lumineux.",
  },
  {
    slug: "nettoyage-bureaux",
    title: "Nettoyage des bureaux",
    description:
      "Entretien régulier de vos locaux professionnels : bureaux, sols, sanitaires et espaces communs.",
  },
  {
    slug: "nettoyage-copropriete",
    title: "Nettoyage de copropriété",
    description:
      "Parties communes, halls d'entrée, escaliers et abords d'immeubles entretenus avec rigueur.",
  },
  {
    slug: "nettoyage-fin-de-chantier",
    title: "Nettoyage de fin de chantier",
    description:
      "Remise en état complète après travaux : poussière, résidus et traces éliminés avant livraison.",
  },
];

// Communes couvertes avec un contexte réel (SEO local).
// Contenu volontairement différencié : pas de pages « portes d'entrée » dupliquées,
// une seule page /zones-intervention qui décrit honnêtement chaque secteur.
export const zones = [
  { name: "Caen", cp: "14000", km: 0, note: "Notre base : centre-ville, Vaucelles, Chemin-Vert, Saint-Jean. Bureaux, commerces, copropriétés et fins de chantier." },
  { name: "Hérouville-Saint-Clair", cp: "14200", km: 4, note: "Zone d'activités et grands ensembles résidentiels : entretien de parties communes et de locaux professionnels." },
  { name: "Mondeville", cp: "14120", km: 5, note: "Secteur commercial et industriel, avec de nombreux locaux et surfaces vitrées à entretenir." },
  { name: "Ifs", cp: "14123", km: 5, note: "Résidentiel et zones commerciales du sud de Caen : vitres, bureaux et remises en état après travaux." },
  { name: "Fleury-sur-Orne", cp: "14123", km: 5, note: "Communes pavillonnaires et petites copropriétés, interventions ponctuelles ou régulières." },
  { name: "Cormelles-le-Royal", cp: "14123", km: 5, note: "Zone d'entreprises : entretien de bureaux, sanitaires et espaces communs." },
  { name: "Bretteville-sur-Odon", cp: "14760", km: 6, note: "Ouest de Caen, secteur commercial : vitrines, bureaux et fins de chantier." },
  { name: "Colombelles", cp: "14460", km: 6, note: "Quartiers récents et locaux d'activité, souvent en fin de chantier ou en entretien régulier." },
  { name: "Giberville", cp: "14730", km: 7, note: "Résidentiel et petites entreprises, à l'est de l'agglomération caennaise." },
  { name: "Épron", cp: "14610", km: 7, note: "Commune résidentielle au nord de Caen : vitres, maisons et copropriétés." },
  { name: "Douvres-la-Délivrande", cp: "14440", km: 14, note: "Axe vers la côte : commerces, résidences et locaux professionnels." },
  { name: "Ouistreham", cp: "14150", km: 15, note: "Station balnéaire : vitrines de commerces, résidences secondaires et locations." },
];

// Suffixe des pages d'atterrissage locales (SEO local) : /nettoyage-vitres-caen, etc.
export const localSuffix = "caen";

// Contenu détaillé des pages « prestation à Caen » (SEO local — une page par service)
// Clé = slug du service. Chaque page a un contenu unique (pas de duplication).
export const servicePages: Record<
  string,
  {
    h1: string;
    metaTitle: string;
    metaDescription: string;
    lead: string;
    included: string[];
    forWho: string;
    faq: { question: string; answer: string }[];
    photo?: { src: string; alt: string };
  }
> = {
  "nettoyage-vitres": {
    h1: "Nettoyage de vitres à Caen",
    metaTitle: "Nettoyage de vitres à Caen — sans traces | Propre Éclat",
    metaDescription:
      "Nettoyage de vitres à Caen et dans un rayon de 20 km : baies vitrées, vitrines, verrières, sans traces. Devis gratuit au 07 68 12 93 19.",
    lead: "Des vitres impeccables changent tout : plus de lumière, une meilleure image et un intérieur qui respire. Propre Éclat nettoie vos vitres à Caen et alentours, en intérieur comme en extérieur, sans traces ni auréoles.",
    photo: {
      src: "/images/equipe/agent-vitres.webp",
      alt: "Agent Propre Éclat nettoyant une vitre à la raclette dans un bureau à Caen",
    },
    included: [
      "Vitres, fenêtres et baies vitrées (intérieur et extérieur)",
      "Vitrines et devantures de commerces",
      "Verrières, vérandas et surfaces vitrées difficiles d'accès",
      "Encadrements, rebords et rails nettoyés au passage",
      "Matériel et produits adaptés pour un résultat sans traces",
    ],
    forWho:
      "Pour les particuliers (maisons, appartements, vérandas) comme pour les professionnels (commerces, vitrines, bureaux) qui veulent des surfaces vitrées nettes toute l'année.",
    faq: [
      {
        question: "Nettoyez-vous les vitres en hauteur ou difficiles d'accès à Caen ?",
        answer:
          "Oui, nous adaptons notre matériel aux vitrages en hauteur, vérandas et verrières. Décrivez-nous votre configuration et nous vous proposons la solution adaptée.",
      },
      {
        question: "À quelle fréquence faire nettoyer ses vitres ?",
        answer:
          "Pour un commerce avec vitrine, un passage régulier (hebdomadaire ou mensuel) est idéal. Pour un particulier, 2 à 4 fois par an suffisent généralement. Nous proposons des interventions ponctuelles ou régulières.",
      },
    ],
  },
  "nettoyage-bureaux": {
    h1: "Nettoyage de bureaux à Caen",
    metaTitle: "Nettoyage de bureaux et locaux pro à Caen | Propre Éclat",
    metaDescription:
      "Entretien de bureaux et locaux pro à Caen : sols, sanitaires, espaces communs. Interventions régulières ou ponctuelles. Devis gratuit au 07 68 12 93 19.",
    lead: "Un bureau propre, c'est une meilleure image pour vos clients et un cadre plus sain pour vos équipes. Propre Éclat assure l'entretien de vos locaux professionnels à Caen, en journée ou en dehors des heures d'ouverture.",
    photo: {
      src: "/images/equipe/agent-bureaux.webp",
      alt: "Agent Propre Éclat désinfectant les bureaux d'un open-space à Caen",
    },
    included: [
      "Bureaux, open-spaces, salles de réunion et accueil",
      "Sols (aspiration, lavage) adaptés à chaque revêtement",
      "Sanitaires désinfectés et réapprovisionnés",
      "Espaces communs, cuisines et points de convivialité",
      "Vidage des corbeilles et dépoussiérage des surfaces",
    ],
    forWho:
      "Pour les entreprises, cabinets, commerces et professions libérales de Caen qui souhaitent un entretien fiable et régulier de leurs locaux, avec un interlocuteur unique.",
    faq: [
      {
        question: "Intervenez-vous en dehors des heures de bureau à Caen ?",
        answer:
          "Oui, nous nous adaptons à vos horaires : tôt le matin, en soirée ou le week-end, pour ne pas gêner votre activité. Nous intervenons 7j/7 de 8h30 à 19h00.",
      },
      {
        question: "Proposez-vous un entretien régulier ou seulement ponctuel ?",
        answer:
          "Les deux. Nous mettons en place un planning régulier (quotidien, hebdomadaire, mensuel) ou intervenons ponctuellement selon vos besoins, avec un devis clair et sans engagement.",
      },
    ],
  },
  "nettoyage-copropriete": {
    h1: "Nettoyage de copropriété à Caen",
    metaTitle: "Nettoyage de copropriété et parties communes à Caen | Propre Éclat",
    metaDescription:
      "Entretien des parties communes d'immeubles à Caen : halls, escaliers, ascenseurs, abords. Pour syndics et gestionnaires. Devis gratuit au 07 68 12 93 19.",
    lead: "Des parties communes bien entretenues valorisent l'immeuble et le confort des résidents. Propre Éclat assure le nettoyage des copropriétés à Caen et alentours, avec régularité et rigueur, pour les syndics et gestionnaires.",
    photo: {
      src: "/images/equipe/agent-sol-couloir.webp",
      alt: "Agent Propre Éclat lustrant le sol d'un hall d'immeuble à Caen",
    },
    included: [
      "Halls d'entrée, couloirs et paliers",
      "Escaliers, rampes et ascenseurs",
      "Vitrages des parties communes et boîtes aux lettres",
      "Abords, locaux poubelles et zones de tri",
      "Sortie et rentrée des conteneurs (sur demande)",
    ],
    forWho:
      "Pour les syndics de copropriété, bailleurs et gestionnaires d'immeubles de Caen qui recherchent un prestataire fiable et régulier pour l'entretien des parties communes.",
    faq: [
      {
        question: "Travaillez-vous avec les syndics et gestionnaires à Caen ?",
        answer:
          "Oui, nous accompagnons les syndics, bailleurs et gestionnaires d'immeubles avec des contrats d'entretien réguliers des parties communes, adaptés à chaque copropriété.",
      },
      {
        question: "Gérez-vous la sortie des poubelles ?",
        answer:
          "Sur demande, nous prenons en charge la sortie et la rentrée des conteneurs selon le calendrier de collecte de la commune, en complément du nettoyage des parties communes.",
      },
    ],
  },
  "nettoyage-fin-de-chantier": {
    h1: "Nettoyage de fin de chantier à Caen",
    metaTitle: "Nettoyage de fin de chantier à Caen | Propre Éclat",
    metaDescription:
      "Remise en état après travaux à Caen : poussière, résidus, traces éliminés. Un chantier propre et prêt à l'emploi. Devis gratuit au 07 68 12 93 19.",
    lead: "Après des travaux, il reste toujours poussière, résidus et traces. Propre Éclat réalise le nettoyage de fin de chantier à Caen pour vous livrer un espace impeccable, prêt à être habité ou utilisé.",
    included: [
      "Élimination des poussières fines sur toutes les surfaces",
      "Décollage des résidus (peinture, colle, plâtre, adhésifs)",
      "Nettoyage des vitres et menuiseries neuves",
      "Sols nettoyés selon le revêtement (carrelage, parquet, béton)",
      "Sanitaires, cuisines et finitions prêts à l'emploi",
    ],
    forWho:
      "Pour les particuliers en fin de rénovation, les artisans du bâtiment et les professionnels qui doivent livrer ou récupérer un chantier propre à Caen et dans un rayon de 20 km.",
    faq: [
      {
        question: "Intervenez-vous juste avant la livraison du chantier ?",
        answer:
          "Oui, nous intervenons en fin de chantier, une fois les travaux terminés, pour livrer un espace propre et prêt à l'emploi. Prévenez-nous quelques jours à l'avance pour caler l'intervention.",
      },
      {
        question: "Enlevez-vous les traces de peinture et de colle ?",
        answer:
          "Oui, le nettoyage de fin de chantier comprend le retrait des résidus de peinture, colle, plâtre et adhésifs sur les vitres, sols et surfaces, avec un matériel adapté à chaque support.",
      },
    ],
  },
};

export const benefits = [
  {
    icon: "quote",
    title: "Devis gratuit & sans engagement",
    text: "Une réponse rapide et un tarif clair, adapté à votre besoin, sans aucune obligation.",
  },
  {
    icon: "sparkle",
    title: "Travail soigné & minutieux",
    text: "Le souci du détail à chaque intervention, jusqu'à la vérification finale du résultat.",
  },
  {
    icon: "users",
    title: "Particuliers & professionnels",
    text: "Maisons, bureaux, copropriétés, chantiers : une prestation adaptée à chaque contexte.",
  },
  {
    icon: "pin",
    title: "Local & réactif",
    text: "Basés à Caen, nous intervenons dans un rayon de 20 km avec disponibilité et ponctualité.",
  },
];

export const processSteps = [
  {
    title: "Vous nous contactez",
    text: "Par téléphone ou via le formulaire, décrivez-nous votre besoin en quelques mots.",
  },
  {
    title: "Devis gratuit",
    text: "Nous revenons vers vous rapidement avec un devis clair et adapté, sans engagement.",
  },
  {
    title: "Intervention",
    text: "Notre équipe intervient avec rigueur et vous laisse un espace impeccable.",
  },
];

export const faq = [
  {
    question: "Dans quelles villes intervenez-vous ?",
    answer:
      "Propre Éclat intervient à Caen et dans un rayon d'environ 20 km : Hérouville-Saint-Clair, Ifs, Mondeville, Colombelles, Ouistreham, Bretteville-sur-Odon et les communes alentour. Contactez-nous pour vérifier que votre adresse est couverte.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer:
      "Oui, l'établissement du devis est entièrement gratuit et sans engagement. Décrivez-nous votre besoin via le formulaire de contact ou par email, et nous vous répondons rapidement.",
  },
  {
    question: "Quels types de prestations proposez-vous ?",
    answer:
      "Nous réalisons le nettoyage des vitres, le nettoyage de bureaux et locaux professionnels, l'entretien des parties communes de copropriété et le nettoyage de fin de chantier. Nous intervenons aussi bien pour les particuliers que pour les professionnels.",
  },
  {
    question: "Travaillez-vous avec les particuliers et les professionnels ?",
    answer:
      "Oui. Nous accompagnons les particuliers comme les entreprises, syndics et gestionnaires d'immeubles, ainsi que les chantiers exceptionnels, avec une prestation adaptée à chaque contexte.",
  },
  {
    question: "Comment demander une intervention ?",
    answer:
      "Le plus simple est de remplir le formulaire de contact en indiquant votre email, votre téléphone, votre ville et votre code postal. Vous pouvez aussi nous écrire directement à Propreeclat@gmail.com.",
  },
  {
    question: "Utilisez-vous des produits respectueux des surfaces et de l'environnement ?",
    answer:
      "Nous adaptons notre matériel et nos produits à chaque surface (vitres, sols, bois, surfaces professionnelles…) afin d'obtenir un résultat impeccable tout en préservant vos locaux.",
  },
  {
    question: "Quelle entreprise de nettoyage choisir à Caen ?",
    answer:
      "Propre Éclat est une entreprise de nettoyage professionnelle basée à Caen (Calvados, Normandie), créée en 2023 et notée 4,8/5 sur Google. Elle intervient pour les particuliers et les professionnels dans un rayon de 20 km autour de Caen, avec un devis gratuit et sans engagement. Contact : 07 68 12 93 19.",
  },
  {
    question: "Faites-vous le nettoyage de fin de chantier près de Caen ?",
    answer:
      "Oui, le nettoyage de fin de chantier fait partie de nos spécialités. Après vos travaux, nous réalisons la remise en état complète des lieux (poussière, résidus, traces) avant livraison, à Caen et dans un rayon de 20 km. Demandez un devis gratuit au 07 68 12 93 19.",
  },
  {
    question: "Depuis quand Propre Éclat existe-t-elle ?",
    answer:
      "Propre Éclat a été créée en 2023 et s'est imposée comme un acteur reconnu du nettoyage professionnel sur le secteur de Caen, grâce aux recommandations de clients satisfaits et à une réputation fondée sur le sérieux. L'entreprise est aujourd'hui constituée en EURL.",
  },
];

export const beforeAfterGallery = [
  {
    title: "Nettoyage de vitres — baie vitrée",
    before: "/images/chantier/baie-vitree-avant.webp",
    after: "/images/chantier/baie-vitree-apres.webp",
  },
  {
    title: "Hall de copropriété — sol carrelé",
    before: "/images/chantier/hall-sol-avant.webp",
    after: "/images/chantier/hall-sol-apres.webp",
  },
  {
    title: "Vitrine de boutique",
    before: "/images/chantier/vitrine-boutique-avant.webp",
    after: "/images/chantier/vitrine-boutique-apres.webp",
  },
  {
    title: "Local commercial — fin de chantier",
    before: "/images/chantier/boutique-chantier-avant.webp",
    after: "/images/chantier/boutique-chantier-apres.webp",
  },
  {
    title: "Vitres de bureaux",
    before: "/images/chantier/vitres-bureau-avant.webp",
    after: "/images/chantier/vitres-bureau-apres.webp",
  },
  {
    title: "Sanitaires remis à neuf",
    before: "/images/chantier/sanitaires-avant.webp",
    after: "/images/chantier/sanitaires-apres.webp",
  },
  {
    title: "Nettoyage de bureaux",
    before: "/images/chantier/bureau-avant.webp",
    after: "/images/chantier/bureau-apres.webp",
  },
  {
    title: "Sols — local commercial (fin de chantier)",
    before: "/images/chantier/local-commercial-avant.webp",
    after: "/images/chantier/local-commercial-apres.webp",
  },
  {
    title: "Hall de copropriété",
    before: "/images/chantier/hall-copropriete-avant.webp",
    after: "/images/chantier/hall-copropriete-apres.webp",
  },
  {
    title: "Vitrine de commerce",
    before: "/images/chantier/vitrine-commerce-avant.webp",
    after: "/images/chantier/vitrine-commerce-apres.webp",
  },
  {
    title: "Terrasse en bois",
    before: "/images/chantier/terrasse-bois-avant.webp",
    after: "/images/chantier/terrasse-bois-apres.webp",
  },
  {
    title: "Dallage extérieur",
    before: "/images/chantier/dallage-exterieur-avant.webp",
    after: "/images/chantier/dallage-exterieur-apres.webp",
  },
];

export const testimonials = [
  {
    name: "Vincent",
    context: "Responsable d'une salle de sport",
    date: "Novembre 2023",
    rating: 5,
    quote:
      "En tant que responsable d'une salle de sport, j'ai sollicité les services de la société de nettoyage Propre Éclat sur Caen et je ne peux qu'exprimer ma satisfaction. Leur équipe a délivré un nettoyage impeccable, dépassant toutes mes attentes. Professionnalisme, efficacité, et un résultat qui parle de lui-même. Une collaboration que je recommande vivement !",
  },
  {
    name: "Elias Taibi",
    date: "Avril 2024",
    rating: 5,
    quote:
      "Par quoi commencer. Ludovic est une personne serviable, dynamique et très pro. Le travail de fin de chantier d'une maison a été effectué à la perfection. Baie vitrée, fenêtres porte d'entrée de garage… sols. Tout a été nickel à la perfection. C'est quelqu'un de courageux, bravo à lui il est capable de faire le travail de 3 personnes.",
  },
  {
    name: "Gabrielle Cribier",
    date: "Janvier 2025",
    rating: 5,
    quote:
      "Je tiens à partager mon expérience avec l'entreprise Propre Éclat, qui a récemment nettoyé mon local. Le service a été impeccable ! L'équipe était professionnelle, ponctuelle et a fait un travail très minutieux. Je recommande vivement Propre Éclat pour tous vos besoins de nettoyage.",
  },
  {
    name: "Aly Diallo",
    date: "Septembre 2023",
    rating: 5,
    quote:
      "J'ai récemment fait appel à Propre Éclat pour ses services de nettoyage de vitres à Caen et je suis extrêmement satisfait du résultat. L'équipe a été professionnelle et efficace dès le début. Mes vitres étaient dans un état assez sale, mais elles sont maintenant impeccables, sans aucune trace. Le service a été rapide et le prix était très raisonnable. Merci pour un excellent travail.",
  },
  {
    name: "Morgane Lemaire",
    date: "Janvier 2025",
    rating: 5,
    quote:
      "Je suis très satisfaite des services de Propre Éclat pour le nettoyage de nos bureaux. L'équipe est professionnelle, ponctuelle et fait un travail vraiment soigné. Nos locaux sont toujours impeccables après leur passage, ce qui est agréable pour tout le monde. Ils sont aussi très réactifs en cas de besoin ou de demande particulière.",
  },
  {
    name: "Benjamin Valès",
    context: "Nettoyage de vitres",
    date: "Novembre 2023",
    rating: 5,
    quote:
      "Une satisfaction totale pour le nettoyage de mes vitres sur Caen ! L'équipe a délivré un service exceptionnel, avec une efficacité remarquable. Mes vitres brillent comme jamais. Une référence incontournable pour quiconque recherche un nettoyage de qualité.",
  },
  {
    name: "Coraline Savard",
    context: "Nettoyage de bureaux",
    date: "Octobre 2023",
    rating: 5,
    quote:
      "Nous sommes extrêmement satisfaits des services de nettoyage de bureaux fournis par Propre Éclat à Caen. Leur équipe est ponctuelle, fiable et toujours prête à aller au-delà de nos besoins. Leur souci du détail est véritablement impressionnant, ils ne laissent aucune zone non nettoyée. Nous les recommandons vivement.",
  },
  {
    name: "Alicia Cassiat",
    context: "Clinique de beauté",
    date: "Novembre 2023",
    rating: 5,
    quote:
      "Extrêmement satisfaite du nettoyage de ma clinique de beauté à Caen ! Un service exceptionnel, professionnel et minutieux. La propreté impeccable contribue à créer une atmosphère accueillante. Recommande vivement !",
  },
  {
    name: "Victor Lebeaut",
    context: "Restaurant à Cabourg",
    date: "Septembre 2023",
    rating: 5,
    quote:
      "Très satisfait de la prestation de Propre Éclat. Nous sommes un restaurant à Cabourg et la société nous entretient tous les vendredis matins l'intégralité des baies vitrées, le résultat est super. Une équipe sérieuse et régulière.",
  },
  {
    name: "Julie D.",
    context: "Nettoyage de vitres",
    date: "Septembre 2023",
    rating: 5,
    quote:
      "J'ai fait appel à la société de nettoyage Propre Éclat pour le nettoyage de l'ensemble de mes vitres à Caen, et il faut dire que l'équipe est très dynamique, organisée et rapide. Le nettoyage intérieur et extérieur ainsi que les encadrements de mes fenêtres était parfait. Le prix est vraiment abordable. Je recommande vivement.",
  },
  {
    name: "Fayona",
    context: "Vitres à domicile",
    date: "Décembre 2023",
    rating: 5,
    quote:
      "Je suis extrêmement satisfaite des services de nettoyage de vitres à domicile fournis par cette entreprise à Caen. Leur équipe professionnelle a dépassé mes attentes en assurant un service efficace et minutieux. Les résultats sont impeccables, et le personnel est courtois et ponctuel.",
  },
  {
    name: "Anaïs G.",
    context: "Nettoyage de vitres",
    date: "Novembre 2023",
    rating: 5,
    quote:
      "Extrêmement satisfaite du service de nettoyage de vitres complet (intérieur, extérieur ainsi que l'encadrement des vitres) effectué par l'entreprise Propre Éclat sur Caen. Le professionnalisme de l'équipe a été remarquable. Je recommande vivement leurs services.",
  },
  {
    name: "Amandine Marcadet",
    context: "Nettoyage de bureaux",
    date: "Février 2024",
    rating: 5,
    quote:
      "Je suis extrêmement satisfaite des services de nettoyage de bureaux fournis par Propre Éclat. Chaque recoin était méticuleusement nettoyé, et l'attention portée aux détails était impressionnante. Le personnel était également courtois et respectueux. Je recommande vivement.",
  },
  {
    name: "Dorcas Bonheur",
    context: "Nettoyage de vitres",
    date: "Novembre 2023",
    rating: 5,
    quote:
      "Éblouie par le service de nettoyage de vitres de l'équipe de Propre Éclat à Caen ! Mes fenêtres n'ont jamais été aussi éclatantes. Professionnalisme, ponctualité et des résultats qui brillent littéralement. Recommandation sans réserve !",
  },
  {
    name: "Stéphanie Bailleux",
    context: "Nettoyage de vitres",
    date: "Novembre 2023",
    rating: 5,
    quote:
      "Très bonne expérience avec cette entreprise. L'équipe travaille efficacement et rigoureusement. Appelé pour un nettoyage complet des vitres intérieur/extérieur et c'est nickel ! Je recommande vivement cette entreprise !",
  },
  {
    name: "Chloé",
    context: "Nettoyage de vitres",
    date: "Novembre 2023",
    rating: 5,
    quote:
      "Excellence en nettoyage de vitres ! Leur service à Caen est vraiment top. Des vitres étincelantes, un travail minutieux. Hautement recommandé pour un nettoyage de vitres impeccable !",
  },
];

export const legalMentions = {
  companyName: "Propre Éclat",
  legalForm: "EURL — entreprise unipersonnelle à responsabilité limitée",
  siren: "939 987 855",
  siret: "939 987 855 00011",
  vatNumber: "FR44939987855",
  rcs: "RCS Caen 939 987 855 (immatriculée le 23/01/2025)",
  headOffice:
    "Chez Madame Linghou, 7 rue des Prémontrés, 14280 Saint-Germain-la-Blanche-Herbe",
  insurance:
    "Propre Éclat est couverte par une assurance responsabilité civile professionnelle. Cette assurance couvre l’ensemble des dommages matériels ou immatériels qui pourraient être causés dans le cadre de nos interventions professionnelles, conformément aux garanties prévues par notre contrat d’assurance. Notre priorité est d’intervenir en toute sécurité et d’offrir à chacun de nos clients la sérénité d’un prestataire pleinement assuré et responsable.",
  publicationDirector: "Josslyn Linghou (gérant de Propre Éclat)",
  host: "Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA — vercel.com",
  mediator:
    "[Médiateur de la consommation à compléter — nom de l'organisme + site internet. Obligatoire pour les prestations aux particuliers (art. L.612-1 du Code de la consommation).]",
};
