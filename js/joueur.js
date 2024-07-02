import { Ressource } from './ressource.js'

export class Joueur {
  constructor(nom) {
    this.nom = nom;
    this.ressources = [];
  }
  async collecterRessource(ressource) {
    const ressourceCollectee = await ressource.collecter();
    this.ressources.push(ressourceCollectee);
    console.log(`${this.nom} a collecté : ${ressourceCollectee}`);
    this.afficherLog(`${this.nom} a collecté : ${ressourceCollectee}`);
  }

  afficherLog(message) {
    const logDiv = document.getElementById("log");
    const logEntry = document.createElement("p");
    logEntry.innerText = message;
    logDiv.appendChild(logEntry);
  }
}
