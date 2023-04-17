// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line
const ulGallery = document.querySelector('.gallery');

function renderItem(item) {
  ulGallery.insertAdjacentHTML(
    'afterbegin',
    `<li class="gallery__item">
<a class="gallery__link" href= "${item.original}">
    <img
        title = "${item.description}"
        class="gallery__image"
        src= "${item.preview}"
        alt="${item.description}"
    />
</a>
</li>`
  );
}

galleryItems.forEach(item => {
  renderItem(item);
});

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

