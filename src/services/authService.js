import { isUniversityEmail } from '../utils/validation.js';

const STORAGE_KEY = 'studyhub_user';

// Тимчасова авторизація на клієнті (localStorage). Буде замінена запитами до бекенду.
export const authService = {
  getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch {
      return null;
    }
  },

  async login(email, password) {
    if (!isUniversityEmail(email)) {
      throw new Error('Використайте університетську пошту (@uzhnu.edu.ua)');
    }
    if (!password || password.length < 8) {
      throw new Error('Пароль має містити щонайменше 8 символів');
    }
    const user = { email, name: email.split('@')[0] };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  },

  async register({ name, email, password }) {
    const user = await this.login(email, password);
    const named = { ...user, name: name || user.name };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(named));
    return named;
  },

  logout() {
    localStorage.removeItem(STORAGE_KEY);
  },
};
