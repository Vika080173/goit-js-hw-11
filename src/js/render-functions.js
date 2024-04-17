import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const gallery = document.querySelector('.gallery');
export function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
        <img 
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}" />
        </a>
        <div class="image-text">
        <p>Likes: ${likes}</p>
        <p>Views: ${views}</p>
        <p>Comments: ${comments}</p>
        <p>Downloads: ${downloads}</p>
        </div>
        </li>`
    )
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
});
lightbox.refresh();
