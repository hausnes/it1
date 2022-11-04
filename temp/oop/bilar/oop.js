class Bil{
    constructor(bilmerke, modell, farge, toppfart, fart) {
      this.bilmerke = bilmerke;
      this.modell = modell;
      this.farge = farge;
      this.toppfart = toppfart;
      this.fart = fart;
    }

    presenter() {
        return `Denne bilen er en ${this.farge} ${this.bilmerke} ${this.modell},\
        med en toppfart på ${this.toppfart} km/h.\
        Akkurat nå har den en fart på ${this.fart} km/h.`
        //Vi bruker linjeskift i koden for å forbedre lesbarheten.
        //Backslash \ brukes for å unngå at det blir linjeskift i utskriften.
    }

    giGass() {
        if (this.fart + 2 <= this.toppfart) {
            this.fart = this.fart + 2;
        }
    }
}

class Elbil extends Bil {
    constructor(bilmerke, modell, farge, toppfart, fart, batterikapasitet, batteristatus) {
        super(bilmerke, modell, farge, toppfart, fart);
        this.batterikapasitet = batterikapasitet;
        this.batteristatus = batteristatus;
    }
    
    lading() {
        this.batteristatus = this.batteristatus + 10;
    }

    presenter() { // Legg merke til at denne "vinn" over presenter-funksjonen frå superklassen Bil
        return `Denne bilen er en ${this.farge} ${this.bilmerke} ${this.modell}, \
    med en toppfart på ${this.toppfart} km/h og \
    batterikapasitet på ${this.batterikapasitet} kWh. \
    Akkurat nå har den en fart på ${this.fart} km/h, \
    og batteriet er ladet ${this.batteristatus} %.`
    //Vi bruker linjeskift i koden for å forbedre lesbarheten.
    //Backslash \ brukes for å unngå at det blir linjeskift i utskriften.
    }
    
}

let bilJBH = new Bil("Mitsubishi","Outlander","svart",220,0);

const biler = [];
biler.push( new Bil("Porsche", "911", "svart", 290, 0) );
biler.push( new Bil("Ferrari", "F8 Spider", "rød", 340, 0) );
biler.push( new Bil("Ford", "Mustang Mach 1", "blå", 270, 0) );
biler.push(bilJBH);

biler.push(new Elbil("Ford", "Mustang Mach e", "grå", 180, 0, 68, 100) );
biler.push(new Elbil("Tesla", "Model 3", "hvit", 260, 0, 50, 70) );

console.log(bilJBH);
console.log(bilJBH.presenter());

// Skrive ut info om alle bilane vha. løkke
console.log("\nInfo om alle bilane:");
for(let bil of biler) {
    console.log(bil.presenter());
}