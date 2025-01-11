import httpClient from "@/core/http-client";

export default {
  login(username, password) {
    return httpClient.post('/login', { username, password });
  },
  register(username, password) {
    return httpClient.post('/register', { username, password });
  }
};