export class Ressource {
  constructor(nom, tempsDeCollecte) {
    this.nom = nom;
    this.tempsDeCollecte = tempsDeCollecte;
  }
  async collecter() {
    console.log(`Collecte de ${this.nom} commencée...`);
    await new Promise((resolve) => setTimeout(resolve, this.tempsDeCollecte));
    console.log(`Collecte de ${this.nom} terminée !`);
    return this.nom;
  }
}
