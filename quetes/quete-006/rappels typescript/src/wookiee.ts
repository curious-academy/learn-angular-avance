import { Afficher } from "./callbacks";

export class Wookiee {
    constructor(public name: string, public prenom: string) { }
    public parle(afficher: Afficher<string>) {
        afficher(`${this.name} parle`);
    }


}

export interface WookieeI extends Parler {
    name: string;
}

export interface Parler {
    parle(): void;
}

export type AvecPrenom = {
    prenom: string;
}

export type AvecPrenomOrUndefined = AvecPrenom | undefined;

export type AvecNomEtPrenom = AvecPrenom & {
    nom: string;
}

export type ListeHumeurs = 'content' | 'triste' | 'en colère';

export type AvecPrenomBis = AvecPrenom; // alias