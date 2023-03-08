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
        <fieldset>
            <label class="contact-label" for="${each}">${each}</label>
            <input onclick="captureData()" class="class_checks contact-input" type="checkbox" value="${each}" name="category" id="${each}">
        </fieldset>
        `
    })
    eventsCategories.push(`<input onkeyup="captureData()" id="id_search" class="contact-input" type="text" name="texto" placeholder="search">`)
    container.innerHTML = eventsCategories.join('')
}
printChecks('#table_checks',categories)