//TODO: Práctica Eventos

document.addEventListener('DOMContentLoaded', () => {

//*** VARIABLES ***//

const fragment = document.createDocumentFragment();
const urlBase = 'assets/'


//** Array **//
const arrayFotos = [
    ['viajes-1.jpg', 'Viaje 1', 'Foto de viaje 1'],
    ['viajes-2.jpg', 'Viaje 2', 'Foto de viaje 2'],
    ['viajes-3.jpg', 'Viaje 3', 'Foto de viaje 3'],
    ['viajes-4.jpg', 'Viaje 4', 'Foto de viaje 4'],
    ['viajes-5.jpg', 'Viaje 5', 'Foto de viaje 5'],
    ['viajes-6.jpg', 'Viaje 6', 'Foto de viaje 6'],
    ['viajes-7.jpg', 'Viaje 7', 'Foto de viaje 7']
];

//** Capturas **//
const capBotones = document.querySelector('#botones');
const capBtnMostrar = document.querySelector('#btn-mostrar');
const capBtnOcultar = document.querySelector('#btn-ocultar');
const capDivFotos = document.querySelector('#box-fotos');



//*** EVENTOS ***//

capBotones.addEventListener('click', ({target}) => {
    if(target.matches('#btn-mostrar')){
        pintarFotos();
    }

    if(target.matches('#btn-ocultar')){
        capDivFotos.innerHTML = '';
    }

}); //!EVENTO



//*** FUNCIONES ***//

const pintarFotos = () => {

    capDivFotos.innerHTML = '';

    arrayFotos.forEach((item) => {
        const elementoImg = document.createElement('IMG');
        elementoImg.src = urlBase + item[0];
        elementoImg.alt = item[2];
        elementoImg.title= item[2];
        const elementTitle = document.createElement('H3');
        elementTitle.textContent = item[1];

        fragment.append(elementoImg, elementTitle);

    });

    capDivFotos.append(fragment);

}; //!FUNC-PINTARFOTOS


}); //!LOAD