//Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.



const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//richiamiamo dal DOM il container delle cards
const contenitore = document.querySelector(".d-flex");

//creo una variabile che contenga le carte nella pagina
let cards = "";

//ciclo for per scorrere l'array teamMembers
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  console.log(member);
  
  //per ogni elemento dell'array creo una card singola tramite la variabile contenitore (cards)
  cards+=`<div class="card mb-3 col-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${member.img}" class=" img-fluid rounded-start" alt="${member.nome}">
                </div>
            <div class="col-md-8 text-bg-dark">
            <div class="card-body">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-text">${member.role}</p>
                <p class="card-text text-info" "text-body-secondary">${member.email}</p>
            </div>
            </div>
        </div>
        </div>`;
}
//stamp in console per prova
// console.log(cards);

//stampa delle card in pagina complete di oggetti
contenitore.innerHTML = cards;
