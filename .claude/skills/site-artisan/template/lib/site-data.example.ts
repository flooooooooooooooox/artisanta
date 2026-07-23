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
  // Rayon d'intervention en km (carte + données structurées GEO)
  serviceRadiusKm: 20,
  // Année de création de l'entreprise (GEO / autorité) — [à compléter]
  foundingYear: "2023",
  // Communes couvertes dans le rayon (SEO local + GEO)
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
  // URL de production — à mettre à jour dès que le nom de domaine est connu
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
      "Nous adaptons notre matériel et nos produits à chaque surface (tissus, vitres, sols, bois…) afin d'obtenir un résultat impeccable tout en préservant vos équipements.",
  },
];

export const beforeAfterGallery = [
  {
    title: "Banquette en tissu",
    before: "/images/chantier/banquette-tissu-avant.webp",
    after: "/images/chantier/banquette-tissu-apres.webp",
  },
  {
    title: "Accoudoir de canapé",
    before: "/images/chantier/accoudoir-tissu-avant.webp",
    after: "/images/chantier/accoudoir-tissu-apres.webp",
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
  {
    title: "Intérieur de véhicule",
    before: "/images/chantier/voiture-interieur-avant.webp",
    after: "/images/chantier/voiture-interieur-apres.webp",
  },
  {
    title: "Canapé d'angle en tissu",
    before: "/images/chantier/canape-tissu-avant.webp",
    after: "/images/chantier/canape-gris-avant.webp",
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
    name: "Agathe P.",
    context: "Voiture & canapés",
    date: "Août 2023",
    rating: 5,
    quote:
      "Superbe prestation effectuée par l'équipe. J'ai contacté l'entreprise pour nettoyer l'intérieur de ma voiture et mes canapés usés par le temps. Ma voiture n'a jamais été aussi propre et mon canapé est comme neuf ! Toutes les taches ont disparu. Le matériel utilisé nettoie tout en prenant soin des tissus !",
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
    name: "Chloé Guillou",
    context: "Nettoyage de canapé",
    date: "Mai 2023",
    rating: 5,
    quote:
      "Propre Éclat est intervenu en nettoyant mon canapé comme neuf alors que mon chat avait uriné. Les auréoles et les odeurs se sont complètement enlevées. Je suis incroyablement surprise de leur travail. Une équipe très professionnelle. Rien à dire, continuez comme ça !",
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
    name: "Sylvie Lesage",
    context: "Canapés",
    date: "Juin 2023",
    rating: 5,
    quote:
      "Équipe très professionnelle et très sympathique. Ils sont intervenus chez ma sœur et moi. Résultat de l'intervention sur nos canapés juste magnifique ! Merci encore à vous et n'hésitez pas à les solliciter car ils ont d'autres compétences : canapés, matelas, façades, etc. Un énorme merci.",
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
    name: "Amélie",
    context: "Intérieur de voiture",
    date: "Août 2023",
    rating: 5,
    quote:
      "Merci pour votre professionnalisme, ma voiture est comme neuve. Contente du résultat de l'intérieur, impressionnant ! Une entreprise à l'écoute et engagée.",
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
    name: "Linghou Valdania",
    context: "Nettoyage de canapé",
    date: "Mai 2023",
    rating: 5,
    quote:
      "Merci d'avoir apporté de la valeur à mon canapé, il était vraiment taché. Votre personnel est vraiment organisé, en 1h mon canapé était nettoyé et il a séché en 2h seulement. Une équipe très compétente et aimable. Super rapport qualité-prix, je recommande les yeux fermés !",
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
  legalForm: "[Forme juridique à compléter]",
  siren: "[Numéro SIREN à compléter]",
  siret: "[Numéro SIRET à compléter]",
  vatNumber: "[N° TVA intracommunautaire à compléter]",
  rcs: "[Ville et numéro RCS à compléter]",
  headOffice: "[Adresse du siège social à compléter]",
  insurance: "[Référence assurance décennale / RC Pro à compléter]",
  publicationDirector: "[Nom du responsable de publication à compléter]",
  host: "[Nom et adresse de l'hébergeur du site à compléter]",
};
