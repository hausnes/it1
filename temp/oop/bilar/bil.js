class Bil {

    constructor(bilmerke, modell, farge, 
        toppfart, fart) {
        this.bilmerke = bilmerke,
        this.modell = modell,
        this.farge = farge,
        this.toppfart = toppfart,
        this.fart = fart
    }
    
    presenter() {
        return `Denne bilen er en ${this.farge} ${this.bilmerke} ${this.modell}, \
        med en toppfart på ${this.toppfart} km/h. \
        Akkurat nå har den en fart på ${this.fart} km/h.`
    }
    
    giGass() {
        if (this.fart + 2 <= this.toppfart) {
            this.fart = this.fart + 2;
        }
    }
    
  }
      
  class Elbil extends Bil {
  
    constructor(bilmerke, modell, farge, toppfart, 
        fart, batterikapasitet, batteristatus) {

        super(bilmerke, modell, farge, toppfart, fart);
        this.batterikapasitet = batterikapasitet;
        this.batteristatus = batteristatus;
      
    }
    
    presenter() {
        return `Denne bilen er en ${this.farge} ${this.bilmerke} ${this.modell}, \
        med en toppfart på ${this.toppfart} km/h og batterikapasitet på ${this.batterikapasitet} kWh. \
        Akkurat nå har den en fart på ${this.fart} km/h, og batteriet er ladet ${this.batteristatus}%.`
    }
    
    lading() {
        this.batteristatus = this.batteristatus + 10;
    }
    
}

export { Bil, Elbil };    