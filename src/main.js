import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { requestPixabay } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

// function requestPixabay(quest) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '43059810-21766dfeafea29ca9c24ae0e2';

//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: quest,
//     image_type: `photo`,
//     orientation: `horizontal`,
//     safesearch: true,
//   });
//   const url = `${BASE_URL}?${params}`;
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => `
//         <li class="gallery-item">
//         <a class="gallery-link" href="${largeImageURL}">
//         <img
//         class="gallery-image"
//         src="${webformatURL}"
//         alt="${tags}"/>
//         </a>
//         <div class="image-text">
//         <p>Likes: ${likes}</p>
//         <p>Views: ${views}</p>
//         <p>Comments: ${comments}</p>
//         <p>Downloads: ${downloads}</p>
//         </div>
//         </li>`
//     )
//     .join('');
// }

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionDelay: 250,
//   captionPosition: 'bottom',
//   captionsData: 'alt',
// });

function handleSubmit(event) {
  event.preventDefault();
  loader.style.opacity = 1;
  gallery.innerHTML = '';

  const list = event.currentTarget.elements.searchImg.value;

  if (list === '') {
    iziToast.show({
      message: 'Please search for something',
      position: 'topRight',
      color: 'orang',
    });
    loader.style.opacity = 0;
    return;
  }

  requestPixabay(list)
    .then(data => {
      loader.style.opacity = 1;
      if (!data.hits.length) {
        iziToast.show({
          message: `❌ "Sorry, there are no images matching your search query. Please try again!"`,
          position: 'topRight',
          color: 'red',
        });

        return;
      }

      gallery.innerHTML = createMarkup(data.hits);
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.show({
        message: `Request completed`,
        position: 'topRight',
        color: 'green',
      });
      return;
    })

    .finally(() => {
      form.reset();
      loader.style.opacity = 0;
    });
}
