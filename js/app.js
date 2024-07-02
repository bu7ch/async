import { Joueur } from "./joueur.js";
import { Ressource } from "./ressource.js";

const joueur = new Joueur("Arthur");
const bois = new Ressource("bois", 2000);
const pierre = new Ressource("pierre", 3000);
const gold = new Ressource("Or", 10000)

document
  .getElementById("collect-wood-button")
  .addEventListener("click", () => {
    joueur.collecterRessource(bois);
  });
document
  .getElementById("collect-stone-button")
  .addEventListener("click", () => {
    joueur.collecterRessource(pierre);
  });
document
  .getElementById("collect-gold-button")
  .addEventListener("click", () => {
    joueur.collecterRessource(gold);
  });
