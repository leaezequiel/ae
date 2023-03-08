
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
        printTemplates('#cardContainer',filtro)
        printTemplates(filtro)
        defineCard(filtro)

        filtro.map(each => createTemplate(each))
        //let newCards = events.map((each)=> createTemplate(each))

    } else {
        notFound('#cardContainer')
    }
} 

function printTemplates(idEvent) {
    let container = document.querySelector("#event_container")
    let one = events.find(each => each._id == idEvent)
    let details = defineCard(one)
    container.innerHTML = details 
  }
  