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


 it('should set the auth token and update local storage and axios headers during setAuthToken', () => {
  // Act
  authStore.setAuthToken('newToken');

  // Assert
  expect(authStore.token).toBe('newToken');
  expect(localStorage.getItem('token')).toBe('newToken');
  expect(axios.defaults.headers.common['Authorization']).toBe(`Bearer newToken`);
 });

 it('should empty local storage and axios headers during logout()', () => {
  //Arrange
  authStore.setAuthToken('newToken');
  //act
  authStore.logout();
  // Assert
  expect(authStore.token).toBe('');
  expect(localStorage.getItem('token')).toBeNull();
  expect(axios.defaults.headers.common['Authorization']).toBeUndefined;
 });

 afterEach(() => {
  localStorage.clear();
 });
});
