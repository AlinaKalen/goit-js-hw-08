// Add imports above this line
import { galleryItems } from './gallery-items';

// Described in documentation;
import SimpleLightbox from "simplelightbox";
// Additional styles import
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
let images = galleryItems
  .map(image => `
  <li class="gallery__item" style="list-style: none">
  <a class="gallery__link" href="${image.original}">
     <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
  </a>
  </li>`)
  .join('');

let ul = document.querySelector('ul.gallery');
ul.insertAdjacentHTML('beforeend', images); 
var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

