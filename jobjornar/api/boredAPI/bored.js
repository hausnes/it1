async function getTips() {
    const res = await fetch('https://www.boredapi.com/api/activity', { timeout : 30000 });
    const data = await res.json();
    
    // console.log("Are you bored?");
    // console.log("You can always " + data.activity);
    // console.log("This is a " + data.type + " activity");
    
    let aktivitet = document.createElement("h1");
    aktivitet.innerText = data.activity;
    document.body.appendChild(aktivitet);
    
    let type = document.createElement("p");
    type.innerText = "This is a " + data.type + " activity";
    document.body.appendChild(type);
}

getTips();