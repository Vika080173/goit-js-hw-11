import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import { requestPixabay } from './js/pixabay-api';
// import { createMarkup } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

// надсилання запиту - цю функцію робила за зразком Дмитра Кисліціна
function requestPixabay(quest) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '6410346f89264d6e919165208231505';

  const params = new URLSearchParams({
    key: API_KEY,
    q: names,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
  });
  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
//  цей блок зробила по аналогії з попередніми д/з, але вибір не відбувається,
// нічого не відображається
function createMarkup(names) {
  return names
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
        alt="${tags}"/>
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
gallery.insertAdjacentHTML('beforeend', createMarkup());

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
});

// це - біда, ліпила все, що бачила в завданні, але як сформувати
//  умову перевірки та розташувати всі умови поки що не розумію
function handleSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  loader.stule.opacity = 1; // не спрацьовує

  const names = event.currentTarget.elements;

  requestPixabay(names)
    .then(data => {
      if (data.names === '') {
      }
    })
    .catch(error => {
      iziToast.show({
        message: `❌ "Sorry, there are no images matching your search query. Please try again!"`,
        position: 'topRight',
        color: 'red',
        messageColor: 'with',
        messageSize: 12,
      });
    })
    .finally(() => {
      form.reset();
    });
}
