import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

export function createGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="card">
    <a class="card__link" href="${largeImageURL}">
      <img class="card__img" src="${webformatURL}" alt="${tags}" />
    </a>
    <div class="card__info">
      <div class="card__info-item">
        <span class="label">Likes</span>
        <span class="value">${likes}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Views</span>
        <span class="value">${views}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Comments</span>
        <span class="value">${comments}</span>
      </div>
      <div class="card__info-item">
        <span class="label">Downloads</span>
        <span class="value">${downloads}</span>
      </div>
    </div>
  </li>
`).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    loader.classList.add('active');
}

export function hideLoader() {
    loader.classList.remove('active');
}
export function showLoadMoreButton(){
  loadMoreBtn.classList.remove('is-hidden');
}
export function hideLoadMoreButton(){
  loadMoreBtn.classList.add('is-hidden');
}