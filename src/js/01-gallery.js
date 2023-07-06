// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const imageEl = createImageGallery(galleryItems);



function createImageGallery (items) {
    return items.map(
        ({preview, original, description}) => {
            return `<li class="gallery__item"><a class = "gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}"
            data-source="${original}"
            alt="${description}"/>
            </a></li>
            `;
        }).join("")
}
galleryEl.insertAdjacentHTML('beforeend', imageEl);
// galleryEl.addEventListener('click', onClick);

var lightbox = new SimpleLightbox('.gallery a', { 
    captionDelay: 250, 
    captionsData: "alt",

});

console.log(galleryItems);
