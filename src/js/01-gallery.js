// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryArray = document.querySelector(`.gallery`);

const newImages = galleryItems
  .map(
    image =>
      `<li>
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
   
      alt="${image.description}"
    />
  </a>
</li>`
  )
  .join(' ');

galleryArray.style.listStyleType = 'none';

galleryArray.insertAdjacentHTML('beforeend', newImages);

console.log(galleryItems);

// kliknięcie w obrazki, otwieranie i zamykanie okna modalnego oraz przewijaniem obrazków za pomocą klawiatury.
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
