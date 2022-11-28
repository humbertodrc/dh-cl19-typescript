import axios from 'axios';
import { UserI } from '../types/user';

export const getUsers = async () :Promise<UserI[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
}