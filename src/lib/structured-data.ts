import { faq, legalMentions, services, siteConfig } from "./site-data";

/**
 * Fiche entreprise (LocalBusiness / CleaningService).
 * Pas de balisage d'avis : Google interdit les avis « auto-hébergés » sur son propre site.
 * Enrichie pour le GEO (moteurs de réponse IA) : date de création, zone géographique
 * précise (GeoCircle), domaines d'expertise et identifiants légaux.
 */
export function getLocalBusinessSchema() {
  // Zone d'intervention : cercle géographique précis + communes nommées
  const geoMidpoint = {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.lat,
    longitude: siteConfig.geo.lng,
  };

  return {
    "@context": "https://schema.org",
    "@type": ["CleaningService", "LocalBusiness", "Organization"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description:
      "Entreprise de nettoyage à Caen et alentours (Calvados, Normandie), pour les particuliers et les professionnels : nettoyage de vitres, de bureaux et locaux professionnels, de copropriétés et de fin de chantier. Créée en 2023. La différence de propreté.",
    slogan: siteConfig.tagline,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    image: `${siteConfig.url}/icon.png`,
    logo: `${siteConfig.url}/icon.png`,
    foundingDate: siteConfig.foundingYear,
    foundingLocation: {
      "@type": "Place",
      name: `${siteConfig.city}, ${siteConfig.region}, France`,
    },
    priceRange: "€€",
    currenciesAccepted: "EUR",
    knowsLanguage: "fr-FR",
    legalName: legalMentions.companyName,
    vatID: legalMentions.vatNumber,
    identifier: [
      { "@type": "PropertyValue", propertyID: "SIREN", value: legalMentions.siren },
      { "@type": "PropertyValue", propertyID: "SIRET", value: legalMentions.siret },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      postalCode: siteConfig.postalCode,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    geo: geoMidpoint,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: siteConfig.hours.opens,
      closes: siteConfig.hours.closes,
    },
    // GeoCircle (rayon précis) + communes couvertes : aide les IA à répondre par proximité
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint,
        geoRadius: String(siteConfig.serviceRadiusKm * 1000),
        description: `${siteConfig.serviceRadiusKm} km autour de ${siteConfig.city}`,
      },
      ...siteConfig.areaServed.map((city) => ({
        "@type": "City",
        name: city,
      })),
    ],
    // Domaines d'expertise explicites — repris par les moteurs de réponse
    knowsAbout: [
      "nettoyage professionnel",
      "nettoyage de vitres",
      "nettoyage de bureaux et locaux professionnels",
      "nettoyage de copropriété et parties communes",
      "nettoyage de fin de chantier",
      "entretien de locaux à Caen et en Normandie",
    ],
    serviceType: services.map((s) => s.title),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint,
          geoRadius: String(siteConfig.serviceRadiusKm * 1000),
        },
        provider: { "@id": `${siteConfig.url}/#business` },
      },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations de nettoyage",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
    sameAs: [siteConfig.facebookUrl, siteConfig.googleReviewsUrl],
  };
}

/**
 * Nœud Organization autonome.
 * La fiche entreprise porte déjà le type Organization par héritage, mais de
 * nombreux outils et LLM ne savent pas lire un `@type` en tableau : un nœud
 * explicite garantit que l'identité et le propriétaire du site sont reconnus.
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: legalMentions.companyName,
    alternateName: "Propre Eclat",
    description:
      "Entreprise de nettoyage à Caen et alentours : bureaux et locaux professionnels, vitres, parties communes de copropriété et fin de chantier.",
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/icon.png`,
      caption: `Logo ${siteConfig.name}`,
    },
    image: `${siteConfig.url}/icon.png`,
    email: siteConfig.email,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    foundingDate: siteConfig.foundingYear,
    vatID: legalMentions.vatNumber,
    taxID: legalMentions.siret,
    address: {
      "@type": "PostalAddress",
      streetAddress: "7 rue des Prémontrés",
      addressLocality: "Saint-Germain-la-Blanche-Herbe",
      postalCode: "14280",
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: siteConfig.phoneHref.replace("tel:", ""),
      email: siteConfig.email,
      areaServed: "FR",
      availableLanguage: ["French"],
    },
    sameAs: [siteConfig.facebookUrl, siteConfig.googleReviewsUrl],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "fr-FR",
    publisher: { "@id": `${siteConfig.url}/#business` },
    // Fraîcheur du contenu : renseignée à chaque publication du site
    dateModified: new Date().toISOString().slice(0, 10),
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
