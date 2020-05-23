import axios from 'axios';
import { API } from '../../constants';

export const logIn = (data) => axios.post(`${API}/users/login`, data);
export const signUp = (data) => axios.post(`${API}/users`, data);
