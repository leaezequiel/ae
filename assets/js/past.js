
let events = datos.events;

let currentDate = datos.currentDate

function createTemplate() {
    //variable que se almacenan los datos del array para renderizar cards
    let templates = []; 
    for (let one of events) {
      let card = `
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
      
      

              <li class="list-group-item text-end"><a class="btn btn-outline-primary" href="./detail.html?id=${one.id}">See more</a></li>
            </ul>
            </div>
        `;
        if(one.date<=currentDate){
            templates.push(card);
            console.log("funca")
        }
      
    }
    let selector = document.getElementById("cardContainer");
    selector.innerHTML = templates.join(" ");
  }
  
  createTemplate();
  