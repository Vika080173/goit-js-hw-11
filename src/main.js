import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { requestPixabay } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import { gallery } from './js/render-functions';
import { lightbox } from './js/render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

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
