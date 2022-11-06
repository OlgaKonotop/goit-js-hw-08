// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');

//console.log(galleryBox)
const markup = galleryItems
  .map(
    ({ preview, original, description }) => ` 
<a class="gallery__item" href="${original}" > 
<img class="gallery__image" src="${preview}" alt="${description}" /> 
</a>`
  )
  .join('');
//console.log(markup);
galleryBox.insertAdjacentHTML('beforeend', markup);
//console.log(SimpleLightbox)

const gallerySimpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(gallerySimpleLightbox);
