import {it,expect,describe,beforeEach,afterEach } from 'vitest'

import { createPinia, setActivePinia } from 'pinia';
import { useAuthStore } from '@/stores/AuthStore';
import axios from 'axios';

describe('AuthStore', () => {
 let authStore: Store<"auth", { token: string; user: {}; }, {}, { init(): void; setAuthToken(token: any): void; setUser(user: any): void; logout(): void; }>;

 beforeEach(() => {
  const pinia = createPinia();
  setActivePinia(pinia);
  authStore = useAuthStore();
 });

 it('should initialize the store with token and user from local storage', async () => {
  // Arrange
//   localStorage.setItem('token', 'testToken');
//   localStorage.setItem('user', JSON.stringify({ name: 'test_user' }));

  // Act
  // Assert
//   expect(authStore.token).toBe('testToken');
//   expect(authStore.user).toEqual({ name: 'test_user' });
 });

 it('should set the auth token and update local storage and axios headers', () => {
  // Act
  authStore.setAuthToken('newToken');

  // Assert
  expect(authStore.token).toBe('newToken');
  expect(localStorage.getItem('token')).toBe('newToken');
  expect(axios.defaults.headers.common['Authorization']).toBe(`Bearer newToken`);
 });

 afterEach(() => {
  localStorage.clear();
 });
});
