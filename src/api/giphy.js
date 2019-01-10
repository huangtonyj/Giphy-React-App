import axios from 'axios';
import { GiphyAPIKey } from './keys';

export default axios.create({
  baseURL: 'http://api.giphy.com',
  params: {
    api_key: GiphyAPIKey,
    limit: 3
  }
})