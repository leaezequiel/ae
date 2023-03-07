
let events = datos.events;

let currentDate = datos.currentDate

function createTemplate() {
    //variable que se almacenan los datos del array para renderizar cards
    let templates = []; 
    for (let one of events) {
      let newCard = defineCard(one)
      
        if(one.date<=currentDate){
            templates.push(newCard);
        }
      
    }
    let selector = document.getElementById("cardContainer");
    selector.innerHTML = templates.join(" ");
  }
  
//createTemplate();
  
function defineCard(one){
  return `
  <div class="card h-100">
    <img src="${one.image}" class="card-img-top img-fit" alt="...">
    <div class="card-body">
      <h4 class="card-title">${one.name}</h4>
      <p class="card-text">${one.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Category: ${one.category}</li>
      <li class="list-group-item">Price: ${one.price}$</li>
      <li class="list-group-item">Date: ${one.date}</li>
      <li class="list-group-item text-end"><a class="btn btn-outline-primary" href="./detail.html?id=${one._id}">See more</a></li>
    </ul>
    </div>
`
}

let newCards = events.map((each)=> createTemplate(each))