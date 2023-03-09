
//aca ya guarde las categorias 
let categories= []
datos.events.forEach(element => {
    if(!categories.includes(element.category)){
        categories.push(element.category)
    }
}); 


function printChecks(id_etiqueta,eventsCategories) {
    let container = document.querySelector(id_etiqueta)
    eventsCategories = eventsCategories.map(each=> {
        return `

        <li class="nav-item btn btn-secondary">
        <div class="form-check">
          <input onclick="captureData()" class="class_checks contact-input" type="checkbox" value="${each}" name="category" id="${each}">
          <label class="contact-label" for="${each}">${each}</label>
        </div>
        </li>

        `
    })
    eventsCategories.push(`<input onkeyup="captureData()" id="id_search" class="contact-input" type="text" name="texto" placeholder="search">`)
    container.innerHTML = eventsCategories.join('')
}

printChecks('#table_checks',categories)


function captureData() {
    let texto = document.getElementById('id_search').value
    let checks = Array.from(document.querySelectorAll('.class_checks:checked')).map(each => each.value)
    let filtro = datos.events.filter(each => {
        return (each.name.includes(texto)) && (checks.length === 0 || checks.includes(each.category))
    })
    console.log(filtro)
    if (filtro.length>0) {
        createTemplate(filtro)
    
        
    } else {
        //notFound('#cardContainer') -> esto funciona pero NO CAPTURA LOS
    }
} 

function printTemplates(idEvent) {
    let container = document.querySelector("#event_container")
    let one = events.find(each => each._id == idEvent)
    let details = defineCard(one)
    container.innerHTML = details 
  }
  




  //--------------------
  function createTemplate(parametro) {
    //variable que se almacenan los datos del array para renderizar cards
    let templates = [];
  
    //recorre cada evento y renderiza
    for (let one of parametro) {
      let newCard = defineCard(one)
      templates.push(newCard)
    }
    let selector = document.getElementById("cardContainer");
    selector.innerHTML = templates.join(" ");
  }
  
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
  