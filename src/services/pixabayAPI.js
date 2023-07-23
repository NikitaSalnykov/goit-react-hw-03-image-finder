import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = `36868675-d04d7da5b1942ea7b304f9f1a`;

const defaultParams = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
};

export const getImages = (searchValue, page) => {
  return axios.get(BASE_URL, {
    params: {
      ...defaultParams,
      q: searchValue,
      per_page: 12 * page,
    },
  });
};
