
let events = datos.events;

function createTemplate() {
  //variable que se almacenan los datos del array para renderizar cards
  let templates = [];

  for (let one of events) {
    let card = `
    

        <div class="card h-100">
          <img src="${one.image}" class="card-img-top img-fit" alt="...">
          <div class="card-body">
            <h5 class="card-title">${one.name}</h5>
            <p class="card-text">${one.description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Category:${one.category}</li>
            <li class="list-group-item">Price:  usd</li>
      
      
            
            <li class="list-group-item text-end"><a class="btn btn-outline-primary" href="./card.html">See more</a></li>
          </ul>
          </div>
      
      
      `;
    templates.push(card);
  }
  let selector = document.getElementById("cardContainer");
  selector.innerHTML = templates.join(" ");
}

createTemplate();
