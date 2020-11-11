
let nombreProducto = document.querySelector('.nombreProducto');
let carrito = document.querySelector('.productos');
carritoArray = [];
window.addEventListener('DOMContentLoaded', imprimirHTML);

let productos = [{
    nombre: 'celular',
    precio: '$200',
    descripcion: 'asdadssadsa',
    id: 1
},
{
    nombre: 'tablet',
    precio: '$400',
    descripcion: 'asdadssadsa',
    id: 2
},
{
    nombre: 'notebook',
    precio: '$100',
    descripcion: 'asdadssadsa',
    id: 3
}];


function imprimirHTML() {

    for (let i = 0; i < productos.length; i++) {

        let title = document.createElement('h3');
        title.textContent = "Producto: " + productos[i].nombre;

        let descripcion = document.createElement('li');
        descripcion.textContent = "Descripcion: " + productos[i].descripcion;

        let precio = document.createElement('li');
        precio.textContent = 'Precio: ' + productos[i].precio;

        let button = document.createElement('button');
        button.textContent = 'Añadir al carrito';
        button.classList.add('btn-comprar');
        button.id = productos[i].id;
        button.onclick = obtenerItem;


        nombreProducto.appendChild(title);
        nombreProducto.appendChild(descripcion);
        nombreProducto.appendChild(precio);
        nombreProducto.appendChild(button);


    }

}

function obtenerItem(event) {
    let idTarget = event.target.id;
    console.log(idTarget);

    //Comprarar los id para ver que producto traer, para agregarlo al carrito con un appendChild
    if (idTarget == 1) {
        cargarItem(productos[0].nombre, productos[0].precio, productos[0].descripcion);
    } else if (idTarget == 2) {
        cargarItem(productos[1].nombre, productos[1].precio, productos[1].descripcion);
    } else if (idTarget == 3) {
        cargarItem(productos[2].nombre, productos[2].precio, productos[2].descripcion);
    } else {
        return 'nada';
    }

}


function cargarItem(nombre, precio, descripcion) {
    carritoArray.push(nombre, precio, descripcion);
    console.log(carritoArray);

    let listaLoca = document.createElement('ul');
    let itemLista = document.createElement('li');



    carrito.textContent = carritoArray;
}
