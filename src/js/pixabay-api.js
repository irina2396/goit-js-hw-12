import axios from 'axios';

const API_KEY = '50359122-c0461bb177b5f80fbb401fd3b';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
    };

        const response = await axios.get(BASE_URL, { params });
        return response.data;
}

