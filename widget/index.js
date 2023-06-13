// Paramètres du rectangle blanc
const coinHautGauche = { x: 400, y: 210 };
const coinBasDroit = { x: 1900, y: 1060 };

const rectangleBlanc = document.getElementById('rectangle-blanc');

rectangleBlanc.style.left = `${coinHautGauche.x}px`;
rectangleBlanc.style.top = `${coinHautGauche.y}px`;
rectangleBlanc.style.width = `${coinBasDroit.x - coinHautGauche.x}px`;
rectangleBlanc.style.height = `${coinBasDroit.y - coinHautGauche.y}px`;

// Positions des carrés blancs
const positionsCarres = [
  { x: 500, y: 40 },
  { x: 700, y: 40 },
  { x: 900, y: 40 },
  { x: 1100, y: 40 },
  { x: 1300, y: 40 },
  { x: 1500, y: 40 },
  { x: 1700, y: 40 },
];

// Dimensions des carrés blancs (ex. 50px x 50px)
const tailleCarre = 120;

// Appliquer les positions et les dimensions aux carrés blancs
positionsCarres.forEach((position, index) => {
  const carre = document.getElementById(`carre${index + 1}`);
  carre.style.left = `${position.x}px`;
  carre.style.top = `${position.y}px`;
  carre.style.width = `${tailleCarre}px`;
  carre.style.height = `${tailleCarre}px`;
});