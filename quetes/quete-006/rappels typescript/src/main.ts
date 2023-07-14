import { Wookiee } from './wookiee';

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
const myWookiee = new Wookiee('Chewbacca');

const newWookiee: Wookiee = {
    name: 'Chewbacca',
    parle() {
        console.log(`${this.name} parle`);    
    },
}

function faireParler(wookiee: Wookiee): void {
    wookiee.parle();
}
faireParler(newWookiee);