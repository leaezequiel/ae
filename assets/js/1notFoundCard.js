//carddeigna
function notFound(idEvent) {
    let container = document.querySelector(idEvent)
    container.innerHTML = `
    <div class="card m-2 card-box">
        <div class="card-body d-flex flex-column align-items-center">
            <h3 class="card-title d-flex flex-column align-items-center justify-center">Evento no encontrado</h3>
        </div>
    </div>
    `
}