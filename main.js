let otazka = document.getElementById("question");
let odpovedi = document.querySelectorAll("#answers>*");
let justOdpovedi = [];
let correctOdpoved = "";
let count = 0;
let counter = document.getElementById("counter");
let arrQaA = [
  ["Odkud se bere dřevo", "z lesa", "pod postelí", "fakt nevim", "z nebe"
  ],
  ["barva trávy", "zelená", "modrá", "žlutá", "červená"],
  ["kolik má zdravý pes nohou?", "čtyři", "jednu", "dvě", "tři"],
  ["Příjmení ředitele spsmb", "Bohata", "Nahota", "Novák", "Zimbawe"],
  ["Které zvíře mňouká?", "kočka", "ryba", "pes", "žirafa"],
  ["2+2=?", "4", "8", "15", "42"],
  [    "Kolik sekund uběhne v Africe za minutu?",
  "Šedesát",
  "patnáct",
  "Jedna",
  "třicet pět",],
  ["Je Země kulatá?", "ano", "ne", "možná", "je placatá"],
  [
    "Co řiká Teorie Kontinentálního Driftu?",
    "vznik Kontinentů",
    "AAAAAAA",
    "Nvm, zeptej se Tomáše",
    "Big Bang Theory©",
  ],
  [
    "Vzorec Pythagorovy věty",
    "c^2 = a^2 + b^2",
    "9+10=21",
    "(a+b)^2 = c",
    "ani jedno",
  ],
  [
    "Jak se jmenuje autor této stránky?",
    "Tadeáš",
    "Tadyáš",
    "Tadesus",
    "Tedeáš",
  ],
  ["Kolik bylo trpasliku?", "sedm", "tři", "osm", "šest"],
];
let victory = document.getElementById("victory");
let usedQaA = [100];
let activeQaA = [];
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
let generQaA = (num) => {
  for (let i = 0; i <= usedQaA.length; i++) {
    if (num == usedQaA[i]) {
      num = randomNum(1, 11);
      i = 0;
    }
  }
  for (let i = 0; i < 5; i++) {
    activeQaA[i] = arrQaA[num][i];
  }
  otazka.innerText = activeQaA[0];
  shuffle(activeQaA);
  for (let i = 0; i < 4; i++) {
    odpovedi[i].innerText = justOdpovedi[i];
  }
  usedQaA.push(num);
};
let shuffle = (arr) => {
  let k = 0;
  correctOdpoved = activeQaA[1];
  for (let i = 1; i < 5; i++, k++) {
    justOdpovedi[k] = activeQaA[i];
  }
  justOdpovedi.sort(() => Math.random() - 0.5);
};
let checkAnswer = (element) => {
  if (count >= 10) {
    victory.innerText = "Vyhrals!";
    count = 0;
    usedQaA = [100];
    setTimeout(function () {
      victory.innerText = "";
    }, 2000);
  }
  if (element == correctOdpoved) {
    
    count++;
    counter.innerText = count;

    generQaA(randomNum(1, 11));
    return;
  }
  count = 0;
  counter.innerText = count;
  usedQaA = [100];
  generQaA(randomNum(1, 11));
};
odpovedi.forEach((element) => {
  element.onclick = () => {
    checkAnswer(element.innerText);
  };
});
window.onload = generQaA(randomNum(1, 11));