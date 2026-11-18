/* =====================================================================
   CONTENU DU SITE — fichier à modifier par George
   ---------------------------------------------------------------------
   - Pour changer un prix : modifiez le nombre entre guillemets.
   - Pour ajouter un miel : copiez un bloc { ... }, collez-le à la suite
     (n'oubliez pas la virgule entre deux blocs) et changez le texte.
   - Pour retirer un miel temporairement : mettez  dispo: false
   - "icone" = illustration du parfum (liste dans icones.js).
   - "couleur" = teinte du miel (fond de l'illustration).
   - "intensite" = de 1 (très doux) à 5 (très corsé).
   ===================================================================== */

const CONTACT = {
  nom: "La Ferme Sources de Vie",
  responsable: "George Stoica",
  telephone: "06 62 10 80 48",
  email: "lafermesourcesdevie@gmail.com",
  adresse: "85 impasse de la Boutrais",
  ville: "61370 Saint-Pierre-des-Loges",
  siret: "791 904 204 00025",
};

/* Prix pour les particuliers (TTC) */
/* Photos de pots autour du titre « Nos miels » (dossier img/).
   La première va à gauche, la seconde à droite. */
const PHOTOS_MIELS = [
  { fichier: "pot-paille.jpg", texte: "Miel du Bocage Normand" },
  { fichier: "pot-ronces.jpg", texte: "Au cœur du bocage" },
];

const PRIX = {
  pot250: "7,50 €",
  pot400: "10 €",
  pot1kg: "20 €",
  coffret: "20 €",
  bougie: "7,50 €",
  // Les petits prix : miel de Colza et miel de Printemps
  promo250: "6 €",
  promo400: "8 €",
  promo1kg: "15 €",
};

const MIELS = [
  // ---------- Miels de récolte ----------
  {
    nom: "Miel de Printemps", icone: "aubepine",
    bio: false, promo: true, gamme: "recolte", intensite: 1,
    couleur: "#F2DC9B",
    origine: "Aubépines et arbres fruitiers",
    texte: "Les premières fleurs de l'année. Un miel clair, crémeux et tout doux, que les enfants adorent sur leurs tartines.",
  },
  {
    nom: "Miel de Colza", icone: "colza",
    bio: false, promo: true, gamme: "recolte", intensite: 1,
    couleur: "#F6EBC6",
    origine: "Champs de colza normands",
    texte: "Presque blanc, d'une texture fine et fondante. Un goût léger qui se marie avec tout, du petit-déjeuner au yaourt.",
  },
  {
    nom: "Miel de Pommier", icone: "pomme",
    bio: true, gamme: "recolte", intensite: 2,
    couleur: "#EFC566",
    origine: "Verger cidricole, Pays d'Auge",
    texte: "Récolté au milieu des pommiers à cidre. Un miel délicat et fruité, très normand.",
  },
  {
    nom: "Miel de Tilleul", icone: "tilleul",
    bio: true, gamme: "recolte", intensite: 2,
    couleur: "#E8D27E",
    origine: "Forêt de Chaumont, au nord de Gacé",
    texte: "Frais, avec une pointe légèrement mentholée. Parfait pour sucrer une infusion du soir.",
  },
  {
    nom: "Miel du Bocage Normand", icone: "sapin",
    bio: true, phare: true, gamme: "recolte", intensite: 3,
    couleur: "#C9790F",
    origine: "Vallée de la Risle, en bordure d'une forêt de sapins",
    texte: "Le miel phare de la ferme. Une fin de bouche légèrement résineuse, qui va aussi bien avec un fromage qu'avec des crêpes ou une pâtisserie.",
  },
  {
    nom: "Miel d'Été", icone: "soleil",
    bio: true, gamme: "recolte", intensite: 2,
    couleur: "#E6A73A",
    origine: "Près d'un château normand",
    texte: "Nos abeilles « châtelaines » y butinent une très large palette de fleurs. Le résultat : un miel rond et bien doux.",
  },
  {
    nom: "Miel de Prairie", icone: "prairie",
    bio: true, gamme: "recolte", intensite: 2,
    couleur: "#E0AE48",
    origine: "Prairies d'un éleveur voisin",
    texte: "Luzerne, trèfle blanc, genêt… Une saveur douce et rustique, comme une balade dans les herbages.",
  },
  {
    nom: "Miel de Forêt", icone: "chene",
    bio: true, gamme: "recolte", intensite: 4,
    couleur: "#7B3E12",
    origine: "Forêt de Saint-Évroult",
    texte: "La dernière récolte de l'année. Des notes de fruits confits, de chêne, de châtaignier et de mûres sauvages. Un miel de caractère, idéal avec le fromage.",
  },
  {
    nom: "Miel de Châtaignier", icone: "chataigne",
    bio: true, gamme: "recolte", intensite: 5,
    couleur: "#6A3311",
    origine: "Forêt de L'Aigle",
    texte: "Puissant, avec sa petite amertume caractéristique. Pour les amateurs de goûts francs : sur un chèvre, dans un pain d'épices.",
  },
  {
    nom: "Miel de Ronce", icone: "ronce",
    bio: true, gamme: "recolte", intensite: 3,
    couleur: "#B2661C",
    origine: "Forêt de Chaumont, au nord de Gacé",
    texte: "Aussi appelé miel de mûrier. Très parfumé, à l'image d'une nature sauvage. Une cuillère dans une boisson chaude, l'hiver.",
  },
  {
    nom: "Miel de Fleurs Sauvages", icone: "sauvages",
    bio: true, gamme: "recolte", intensite: 4,
    couleur: "#9B5519",
    origine: "Haies et sous-bois normands",
    texte: "Un miel corsé et très parfumé, avec une fine note de châtaignier.",
  },
  {
    nom: "Miel de Trèfle", icone: "trefle",
    bio: true, gamme: "recolte", intensite: 1,
    couleur: "#F1E2AE",
    origine: "Prairies de trèfle",
    texte: "Une douceur délicate, une note florale discrète et une pointe fruitée en fin de bouche. Le miel idéal pour ceux qui découvrent.",
  },

  // ---------- Miels gourmands ----------
  {
    nom: "Miel à la Vanille de Madagascar", icone: "vanille",
    bio: false, gamme: "gourmand",
    couleur: "#EED596",
    origine: "Miel de printemps crémeux & vanille",
    texte: "Un miel de Normandie crémeux, marié à la vanille de Madagascar. Un petit voyage à chaque cuillère.",
  },
  {
    nom: "Miel à la Cannelle de Ceylan", icone: "cannelle",
    bio: true, gamme: "gourmand",
    couleur: "#D8A465",
    origine: "Miel de printemps & cannelle",
    texte: "Pour les amateurs de cookies, de pommes au four et de boissons chaudes épicées.",
  },
  {
    nom: "Miel aux Noisettes", icone: "noisette",
    bio: false, gamme: "gourmand",
    couleur: "#8A5530",
    origine: "Pâte à tartiner",
    texte: "Une pâte à tartiner au miel et aux noisettes, toute simple. Le goûter des grands et des petits.",
  },
  {
    nom: "Miel au Gingembre de la Réunion", icone: "gingembre",
    bio: false, nouveau: true, gamme: "gourmand",
    couleur: "#E3B04B",
    origine: "Miel & gingembre",
    texte: "La nouveauté de l'année. Pour réveiller une infusion, accompagner un plat exotique ou simplement à la cuillère.",
  },
];
