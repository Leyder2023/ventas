let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 8;

loadMoreBtn.onclick = () => {
      let boxes = [...document.querySelectorAll('.box-container .box')];
      for (var i = currentItem; i < currentItem + 4; i++){
        boxes[i].style.display = 'inline-block';
      }
      currentItem += 4;
      if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none'
      }
}

//carrito
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById(´lista-1);
const lista = document.querySelector('#lista-carrito tbody');
const vaciarcarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click' comprarElemento);
    carrito.addEventListener('click' eliminarElemento);
    vaciarcarritoBtn.addEventListener('click' vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if(e.taget.classList.container('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento = {
        Image: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio. elemento.querySelector('.precio').textContent;
        id: elemento.querySelector('a').getAtribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
        <img src="${elemento.imagen}" width=100 heigth=150px >
    </td>
    <td>
         ${elemento.titulo}
     </td>
      <td>
         ${elemento.precio}
       </td>
        <td>
          <a  herf="#" class=" data id="${elemento.id}" >x</a>
         </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento (e) {
    e.preventDefault();
    let elemento,
    elementoId;

    if(e.taget.classList.contains('borrar')) {
        e.taget.parentElement.parentElement.remove();
        elemento = e.taget.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAtribute('data-id');
    }
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}

