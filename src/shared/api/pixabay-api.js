import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

async function getImagesByName(value, page) {
  return axios.get(
    `?key=32082026-7518fe05ec696c0df051a22ed&image_type=photo&orientation=horizontal&per_page=12&q=${value}&page=${page}`
  );
}

const pixaBayApi = {
  getImagesByName,
};

export default pixaBayApi;
