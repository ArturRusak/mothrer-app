import axios from 'axios';

import { API } from '../../constants';

export const getArticles = () => axios.get(`${API}/articles`);
