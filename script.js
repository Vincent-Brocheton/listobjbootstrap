obj = [{
        id: 1,
        nom: "Baudry",
        prenom: "Theo"
    },
    {
        id: 2,
        nom: "Bentabet",
        prenom: "Nawel"
    },
    {
        id: 3,
        nom: "Bouxin",
        prenom: "Cyril"
    },
    {
        id: 4,
        nom: "Brux",
        prenom: "Anthony"
    },
    {
        id: 5,
        nom: "Campanella",
        prenom: "Daniel"
    },
    {
        id: 6,
        nom: "Choquet",
        prenom: "Charles"
    },
    {
        id: 7,
        nom: "Delaire",
        prenom: "Jennifer"
    },
    {
        id: 8,
        nom: "Delgrange",
        prenom: "Stéphanie"
    },
    {
        id: 9,
        nom: "Derselle",
        prenom: "Alexandre"
    },
    {
        id: 10,
        nom: "Dufay",
        prenom: "Nicolas"
    },
    {
        id: 11,
        nom: "Edoumi",
        prenom: "Morad"
    },
    {
        id: 12,
        nom: "Lakhloufi",
        prenom: "Yasser"
    },
    {
        id: 13,
        nom: "Lemaire",
        prenom: "Amélie"
    },
    {
        id: 14,
        nom: "Rose",
        prenom: "Dany"
    },
    {
        id: 15,
        nom: "Saint-Jean",
        prenom: "Florian"
    }
];

for (let i = 0; i < obj.length; i++) {
    tr = document.createElement("tr");

    td = document.createElement("td");
    txt = document.createTextNode(obj[i].id);
    td.appendChild(txt);
    tr.appendChild(td);

    td2 = document.createElement("td");
    txt2 = document.createTextNode(obj[i].nom);
    td2.appendChild(txt2);
    tr.appendChild(td2);

    td3 = document.createElement("td");
    txt3 = document.createTextNode(obj[i].prenom);
    td3.appendChild(txt3);
    tr.appendChild(td3);

    document.getElementById('listing').appendChild(tr);
}