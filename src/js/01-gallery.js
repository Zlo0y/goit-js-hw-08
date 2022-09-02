// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

function galleryRender(gallary) {
    const renderingEl = gallary.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    }).join('');
    galleryContainer.innerHTML = renderingEl;
}

galleryRender(galleryItems);
new SimpleLightbox('.gallery a', { captions: true, captionDelay: 250 });
