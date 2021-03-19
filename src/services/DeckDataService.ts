import http from '../data/http-common';
import { Deck } from '../store/interfaces';

class DeckDataService {
  getAll() {
    return http.get('/decks');
  }

  get(id: string) {
    return http.get(`/decks/${id}`);
  }

  /*getByUserId(userId: string) {
    return http.get(`/decks/${id}`);
  }*/

  create(data: Deck) {
    return http.post('/decks', data);
  }

  update(id: string, data: Deck) {
    return http.put(`/decks/${id}`, data);
  }

  delete(id: string) {
    return http.delete(`/decks/${id}`);
  }

  deleteAll() {
    return http.delete(`/decks`);
  }

  findByName(name: string) {
    return http.get(`/decks?name=${name}`);
  }
}

export default new DeckDataService();
