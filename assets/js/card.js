let events = datos.events;

function createTemplate() {
  //variable que se almacenan los datos del array para renderizar cards
  let templates = [];
  for (let one of events) {
    let card = `
            <div class="container">
            <div class="presentation">
              <div class="card mb-3" style="max-width: 70vh;">
                <div class="row g-0">
                  <div class="col-md-6">
                    <img src="${one.image}" class="img-fluid" alt="cinema picture">
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <h5 class="card-title">${one.name}</h5>
                      <p class="card-text">${one.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Date: ${one.date}</li>
                      <li class="list-group-item">Descripcion: ${one.description}</li>
                      <li class="list-group-item">Category: ${one.category}</li>
                      <li class="list-group-item">Place: ${one.place}</li>
                      <li class="list-group-item">Capacity: ${one.capacity}</li>
                      <li class="list-group-item">Estimate: ${one.estimate}</li>
                      <li class="list-group-item">Price: ${one.price}.</li>
                    </ul>
      
                  </div>
                </div>
              </div>
            </div>
          </div>




        `;
        
    templates.push(card);
  }
  let selector = document.getElementById("cardDisplay");
  selector.innerHTML = templates.join(" ");
}

createTemplate();
