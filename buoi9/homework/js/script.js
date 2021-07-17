let hiep = {
  name: "Hiep",
  major: "language",
  country: "Vietnam",
  age: 24,
  isMarried: false,
  laptop: {
    brand: "macbook",
    model: "Pro 13 2015",
  },
};

let house = {
  address: "hanoi",
  floor: 4,
  isLarge: false,
  bedroom: {
    isBeautiful: true,
    color: "Ivory",
    library: true,
  },
};

let bruno = {
  name: "Fernandes",
  height: 179,
  born: "Portugal",
  number: 18,
  club: {
    name: "Manchester United",
    trophies: 20,
    address: "Manchester, England",
  },
};

console.log(hiep.major);
console.log(hiep["isMarried"]);
console.log(hiep["laptop"]["model"]);
console.log(bruno.club.trophies);
