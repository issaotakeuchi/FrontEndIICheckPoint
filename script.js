
function addNewCard(){
    let exampleInputTitle = document.getElementById('exampleInputTitle').value;
    let exampleInputDescription = document.getElementById('exampleInputDescription').value;
    let exampleInputURL = document.getElementById('exampleInputURL').value;

    let sectionToInclude = document.getElementById('cards')
    let newCardToInsert = document.createElement('div');
    newCardToInsert.innerHTML = 
    `<div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card">
            <img src="${exampleInputURL}" id="imageURL" class="card-imagem card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title" id="cardTitle">${exampleInputTitle}</h5>
              <p class="card-text" id="cardDescription">${exampleInputDescription}</p>
              <a href="#" class="card-button btn btn-primary">Detalhes</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    sectionToInclude.appendChild(newCardToInsert); 
}


document.getElementById('sendNewCard').addEventListener('click', (event) => {
    event.preventDefault()
})


