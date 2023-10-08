// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
let images = galleryItems
  .map(image => `
  <li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
  </li>`)
  .join('');

let ul = document.querySelector('ul.gallery');
ul.insertAdjacentHTML('beforeend', images);

document.querySelectorAll("a.gallery__link").forEach(link => link.addEventListener("click", function(event) {
    event.preventDefault()
}));


document.querySelectorAll("li.gallery__item").forEach(li => li.addEventListener("click", function(event) {
    let imageUrl = li.firstElementChild.getAttribute("href");
    const instance = basicLightbox.create(`
        <img src="${imageUrl}" width="800" height="600">
    `)

    instance.show()    
}));


