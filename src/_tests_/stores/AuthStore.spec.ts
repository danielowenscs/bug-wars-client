import { it, expect, describe, beforeEach, afterEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useAuthStore } from '@/stores/AuthStore';
import axios from 'axios';

describe('AuthStore', () => {
  let authStore: ReturnType<typeof useAuthStore>;

  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
    authStore = useAuthStore();
  });

  it('should set the auth token and update local storage and axios headers during setAuthToken', () => {
    authStore.setAuthToken('newToken');
    expect(authStore.token).toBe('newToken');
    expect(localStorage.getItem('token')).toBe('newToken');
    expect(axios.defaults.headers.common['Authorization']).toBe(`Bearer newToken`);
  });

  it('should empty local storage and axios headers during logout()', () => {
    authStore.setAuthToken('newToken');
    authStore.logout();
    expect(authStore.token).toBe('');
    expect(localStorage.getItem('token')).toBeNull();
    expect(axios.defaults.headers.common['Authorization']).toBeUndefined();
  });

  afterEach(() => {
    localStorage.clear();
  });
});
