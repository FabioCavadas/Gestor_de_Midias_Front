import httpClient from '../core/http-client';

export default {
  getAllMedia() {
    return httpClient.get('/media');
  }
};