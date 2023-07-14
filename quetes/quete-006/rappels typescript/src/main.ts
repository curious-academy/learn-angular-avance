import { Afficher } from './callbacks';
import { AvecNomEtPrenom, AvecPrenom, AvecPrenomOrUndefined, Parler, Wookiee, WookieeI } from './wookiee';
import { log } from './logger';

let wookie: any = {
    name: 'Chewbacca',
};

wookie = 1; 


function setName(wookiee: unknown): void {
    if (typeof wookiee === 'object') {
        // wookiee.name = 'Chewie';    
    }

    if (typeof wookiee === 'string') {
        wookiee.toUpperCase();
    }
    
}
setName(wookie);
setName(2);

// ------------------------
const myWookiee = new Wookiee('Chewbacca', 'Chewie');

const callback: Afficher<string> = (message: string) => {
    console.info(message);

    log({
        message,
        date: new Date(),
        test: ''   
    })
};
myWookiee.parle(callback);


const newWookiee: Wookiee = {
    name: 'Chewbacca',
    prenom: 'Chewie',   
    parle() {
        console.log(`${this.name} parle`);    
    },
}

function faireParler(wookiee: Parler): void {
    wookiee.parle();
}
// faireParler(newWookiee);

const ilParle = {
    name: 'Chewbacca',
    parle() {
        console.log('Je parle');
    }
};
faireParler(ilParle);


function afficherPrenom(prenom: AvecNomEtPrenom): void {
    if(prenom) {
        console.log(prenom.prenom);
    }
}

afficherPrenom({
    prenom: 'Chewie',
    nom: 'Chewbacca',
});

// ----------------------

function afficher(value: unknown): void {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
}
afficher('Chewie');

function afficherBis(value: string | number): void {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

function afficherWithEquality(value: string | number, value2: string | WookieeI): void {
    if (value === value2) {
        let char = value.charAt(0);
        let char2 = value2.charAt(0);
    }
}


type StormTrooper = { tirer: () => void };
type Sith = { utiliserForce: () => void };

function combattre(perso: StormTrooper | Sith): void {
    if ('tirer' in perso) {
        perso.tirer();
    } else {
        perso.utiliserForce();
    }
}

function isStormTrooper(perso: unknown): perso is StormTrooper {
    return (perso as StormTrooper).tirer !== undefined;
}

function attaquerBis(perso: StormTrooper | Sith): void {
    if (isStormTrooper(perso)) {
        perso.tirer();
    } else {
        perso.utiliserForce();
    }
}
