
let events = datos.events;

function createTemplate() {
  //variable que se almacenan los datos del array para renderizar cards
  let templates = [];

  //recorre cada evento y renderiza
  for (let one of events) {
    let newCard = defineCard(one)
    templates.push(newCard)
  }
  let selector = document.getElementById("cardContainer");
  selector.innerHTML = templates.join(" ");
}

//reateTemplate(); 

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

//-------------------------------------------------------

/* //categias:
let elementsTypes= []
datos.array.forEach(element => {
    if(!elementsTypes.includes(each.category)){
        elementsTypes.push(each.category)
    }
    
}); */

let selector = document.getElementById("cardContainer");
//selector.innerHTML = templates.join(" ");

