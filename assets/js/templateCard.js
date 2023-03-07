let events = datos.events;

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
        <li class="list-group-item text-end"><a class="btn btn-outline-primary" href="./detail.html?id=${one.id}">See more</a></li>
      </ul>
      </div>
  `
}

//EL MAP QUE TRANSFORMA
let newCards = datos.map((each)=> templateCard(one))

//for each para categorias
let tipos= []
datos.array.forEach(element => {
    if(!tipos.includes(each.category)){
        tipos.push(each.category)
    }
    
});

//find datos.filter(each =>)