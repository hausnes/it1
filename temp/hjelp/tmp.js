let deltakarar = [
    { 
        navn: "Ola Nordmann",
        aktivitet1: 10,
        aktivitet2: 4,
        aktivitet3: 10,
        totalPoengsum: function() {
            return this.aktivitet1 + this.aktivitet2 + this.aktivitet3;
        }
    },
    {
        navn: "Kari Nordmann",
        aktivitet1: 8,
        aktivitet2: 6,
        aktivitet3: 8,
        totalPoengsum: function() {
            return this.aktivitet1 + this.aktivitet2 + this.aktivitet3;
        }
    }
];

console.log(deltakarar[1].totalPoengsum());

function reknUtTotalSum(deltaker) {
    return deltaker.aktivitet1 + deltaker.aktivitet2 + deltaker.aktivitet3;
}

console.log("Alternativ: " + reknUtTotalSum(deltakarar[0]));