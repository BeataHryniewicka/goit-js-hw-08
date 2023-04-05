// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryArray = document.querySelector(`.gallery`);

const newImages = galleryItems
  .map(
    image =>
      //Link do oryginalnego obrazka powinien być przechowywany w atrybucie data source w elemencie <img>, oraz w href linku.
      `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`
  )
  .join(' ');

galleryArray.insertAdjacentHTML('beforeend', newImages);

galleryArray.addEventListener('click', ev => {
  //zablokowanie przekierowania na stronę
  ev.preventDefault();

  //Otworzenie okna modalnego po kliknięciu w element galerii.
  const instance = new SimpleLightbox(
    `<img src="${ev.target.dataset.source}  ">`
  );

  const close = document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      instance.close();
      document.removeEventListener(Object, close);
    }
  });

  instance.show();
});

console.log(galleryItems);
