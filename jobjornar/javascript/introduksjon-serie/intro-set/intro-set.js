// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

let navn = new Set();

navn.add("Jo Bjørnar");
navn.add("Jo Bjørnar");
navn.add("Jobis");

let obj = {
    navn: "Jo Bjørnar",
    alder: 40
}

navn.add(obj);
navn.add(obj);

console.log(navn);

console.log("Finnes 'Jo Bjørnar'? " + navn.has("Jo Bjørnar"));

console.log("Finnes objektet? " + navn.has(obj));
navn.delete(obj);
console.log("Finnes objektet? " + navn.has(obj));