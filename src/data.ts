import { Destination, Testimonial, ExperienceFeature } from "./types";

export const AGENCY_NAME = "AURA ÉVASIONS";
export const AGENCY_SLOGAN = "L'art du voyage sur-mesure";

// High-end optimized travel images from Unsplash
export const HERO_IMAGE = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=90"; // High-end luxury villa pool overlooking sunset
export const SIGNATURE_IMAGE = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"; // Overwater pool luxury lounge

export const DESTINATIONS: Destination[] = [
  {
    id: "positano-amalfi",
    title: "Côte Amalfitaine",
    subtitle: "Douceur de vivre italienne",
    region: "Italie",
    description: "Naviguez le long des falaises escarpées de Positano à bord d'un yacht privé, séjournez dans une ancienne résidence de doges suspendue entre ciel et mer, et dégustez la haute gastronomie de Campanie. Accueil VIP dédié au départ de Bamako.",
    image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=1200&q=80",
    priceFrom: "5 120 000 FCFA",
    duration: "8 Jours",
    tags: ["Yacht Privé", "Salon d'Honneur", "Gastronomie"]
  },
  {
    id: "kyoto-serenity",
    title: "Kyoto Impérial",
    subtitle: "Sagesse & Temples secrets",
    region: "Japon",
    description: "Une immersion spirituelle exclusive. Accompagné par un moine zen, méditez dans des temples inaccessibles au public, assistez à une cérémonie du thé privée et logez dans un Ryokan de prestige légendaire. Formalités de visa gérées à Bamako.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    priceFrom: "8 200 000 FCFA",
    duration: "10 Jours",
    tags: ["Spiritualité", "Service d'Exception", "Ryokan"]
  },
  {
    id: "bora-bora-retreat",
    title: "Bora Bora Privé",
    subtitle: "L'atoll au bout du monde",
    region: "Polynésie Française",
    description: "Vivez l'expérience ultime de la déconnexion. Une villa sur pilotis exclusive de 300m² avec piscine à débordement privée s'ouvrant sur un lagon turquoise cristallin. Transfert en jet privé disponible depuis l'aéroport de Bamako-Sénou.",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    priceFrom: "9 970 000 FCFA",
    duration: "12 Jours",
    tags: ["Lagon Privé", "Jet Privé", "Héliport"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Une expérience hors du temps. De notre accueil privilégié au salon d'honneur de l'aéroport de Bamako-Sénou jusqu'aux dîners privés sous les étoiles à Bora Bora, chaque détail était orchestré avec une précision et une élégance rare.",
    author: "Ousmane & Fatoumata T.",
    role: "Membres Club Élite Bamako",
    destination: "Évasion Bora Bora",
    rating: 5
  },
  {
    id: "test-2",
    quote: "La promesse du sur-mesure de l'équipe d'AURA Bamako est pleinement tenue. Pouvoir visiter le temple de Saiho-ji à Kyoto en totale intimité avec un guide historien restera à jamais gravé dans notre mémoire familiale.",
    author: "Mamadou K.",
    role: "Entrepreneur, ACI 2000",
    destination: "Kyoto Impérial",
    rating: 5
  },
  {
    id: "test-3",
    quote: "AURA a su capter exactement nos aspirations de silence, de discrétion et de raffinement absolu. L'affrètement du yacht sur la côte Amalfitaine a dépassé tout ce que nous avions connu en matière de service haut de gamme.",
    author: "Aïssata D.",
    role: "Propriétaire de Galerie, Quartier du Fleuve",
    destination: "Côte Amalfitaine",
    rating: 5
  }
];

export const EXPERIENCE_FEATURES: ExperienceFeature[] = [
  {
    title: "Une Conception Haute Couture",
    description: "Chaque itinéraire est cousu main, dessiné à partir d'une page blanche pour épouser vos rythmes, vos passions et vos moindres désirs d'exclusivité."
  },
  {
    title: "Conciergerie Particulière 24/7",
    description: "Un interlocuteur unique, discret et hautement qualifié, veille sur chaque instant de votre voyage pour parer à l'imprévu ou réaliser vos envies immédiates."
  },
  {
    title: "Adresses Introuvables",
    description: "Un accès réservé à des domaines privatifs, des îles confidentielles et des résidences historiques qui n'ouvrent leurs portes qu'à nos convives."
  }
];
