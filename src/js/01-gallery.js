// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line
const ulGallery = document.querySelector('.gallery');

let arrIt = [];

galleryItems.forEach(item => {
  let li = `<li class="gallery__item">
<a class="gallery__link" href= "${item.original}">
    <img
        title = "${item.description}"
        class="gallery__image"
        src= "${item.preview}"
        alt="${item.description}"
    />
</a>
</li>`
     arrIt.push(li) 
});
    
console.log(arrIt);

ulGallery.insertAdjacentHTML('afterbegin', arrIt.join(''));

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});

