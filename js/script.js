function goToNextSlide(){

    if (itemActive < imagesArray.length -1) {

        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove(`active`);
    
        itemActive++;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add(`active`);
    
        }
    
        else {
    
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove(`active`);

        itemActive = 0;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add(`active`);
    
        }

}

//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = ``;
let itemsThumbsnails = ``;

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`;

    itemsThumbsnails += `<div class="thumb"><img src="./img/${imagesArray[i]}">
    </div>`;
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

const thumbnailsPreview = document.querySelector(`.thumbnails`);
thumbnailsPreview.innerHTML = itemsThumbsnails;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const thumbnails = document.getElementsByClassName(`thumb`)
thumbnails[itemActive].classList.add(`active`);

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// **********************************************

next.addEventListener('click', function(){

    goToNextSlide();
 
});

// ***************************************************

prev.addEventListener('click', function(){

    if (itemActive > 0){

        //verifico l'elemento attivo (itemActive)
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove(`active`);

        //decremento il suo valore di 1
        itemActive--;

        //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
        //stessa cosa per i cerchi
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add(`active`);

    }

    else{

        //verifico l'elemento attivo (itemActive)
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove(`active`);

        //decremento il suo valore di 1
        itemActive = imagesArray.length -1;

        //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
        //stessa cosa per i cerchi
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add(`active`);

    }

})

// creo un set interval e al suo interno ci metto IF next per scorrere le img automaticamente

setInterval(function(){

    goToNextSlide();

},1000);
