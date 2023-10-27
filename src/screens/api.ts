import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com', // URL base da API
});

export const fetchProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar produtos da API');
  }
};
