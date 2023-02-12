import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '32077090-c2128b2dfd2e1e6fab4ce371e',
    image_type: 'photo',
    pretty: true,
    per_page: 12,
  },
});

export const getImage = async (q, page = 1) => {
  const { data } = await instance.get('/', { params: { q, page } });
  return data;
};
