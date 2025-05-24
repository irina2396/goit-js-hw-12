import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
let totalHits = 0;

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    query = e.target.elements['search-text'].value.trim();
    page = 1;

    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search term!',
            position: 'topRight',
        });
    return;
    }

    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;
    
    if (data.hits.length === 0) {
        iziToast.info({
            title: 'No Results',
            message: 'No images found for this query.',
            position: 'topRight',
        });
        return;
    }

    createGallery(data.hits);
    if(totalHits > page * 15) {
        showLoadMoreButton();
    }
} catch (error) {
    iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
    });
    console.error(error);
    } finally {
        hideLoader();
    }
});

loadMoreBtn.addEventListener('click', async ()=> {
    page += 1;
    showLoader();

    try {
        const data = await getImagesByQuery(query, page);
        createGallery(data.hits);

        if (page * 15 >= totalHits){
            hideLoadMoreButton();
            iziToast.info({
                title: 'End of results',
                message: "We're sorry, but you've reached the end of search results.",
            });
        }

        scrollGallery();
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Failed to load more images.',
        });
    } finally{
        hideLoader();
    }
});

function scrollGallery(){
    const { height: cardHeight } = document
        .querySelector('.card')
        .getBoundingClientRect();
    
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}