/* 
function printChecks(id_etiqueta,events) {
    let container = document.querySelector(id_etiqueta)
    events = events.map(each=> {
        return `
        <fieldset>
            <label class="contact-label" for="${each}">${each}</label>
            <input onclick="captureData()" class="class_checks contact-input" type="checkbox" value="${each}" name="tipo" id="${each}">
        </fieldset>
        `
    })
    events.push(`<input onkeyup="captureData()" id="id_search" class="contact-input" type="text" name="texto" placeholder="search">`)
    container.innerHTML = events.join('')
}
printChecks('#table_checks',category)


//ESTE ERA MI BOTON. NO SE BORRA POR LAS DUDAS
  <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Type anything" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>

*/

//aca ya guarde las categorias 
let categories= []
datos.events.forEach(element => {
    if(!categories.includes(element.category)){
        categories.push(element.category)
    }
console.log(categories)
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