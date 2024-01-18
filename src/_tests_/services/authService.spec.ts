import axios from 'axios';
import authService from '../../services/authService';
import { vi, test, describe, expect, it, beforeEach, afterEach } from 'vitest';


describe('AuthService', () => {
    const { mockAxiosPost } = vi.hoisted(() => {
      return { mockAxiosPost: vi.fn() };
    });

beforeEach(async () => {
 vi.mock('axios', async () => {
   const actual = await vi.importActual('axios');
   return {
     ...actual,
     default: {
       post: mockAxiosPost,
     },
   };
 });
});

it('login should log in a user', async () => {
 const user = {username: 'testuser',password:'password'};
 const response = {};
 mockAxiosPost.mockResolvedValue(response);

 const result = await authService.login(user);
 expect(result).toBe(response);
 expect(mockAxiosPost).toHaveBeenCalledWith('api/auth/login', user);
});

it('should handle errors when logging in a user', async () => {
 const user = {};
 const error = new Error('Network error');
 mockAxiosPost.mockRejectedValue(error);

 try {
   await authService.login(user);
 } catch (e) {
   expect(e).toBe(error);
   expect(mockAxiosPost).toHaveBeenCalledWith('api/auth/login', user);
 }
});

it('Register should register a new user', async () => {
  const newUser = {username: 'newguy3', email: 'newguy3@gmail.com', password: 'newguy3'};
  const response = {};
  mockAxiosPost.mockResolvedValue(response);

  const result = await authService.register(newUser);
  expect(result).toBe(response);
  expect(mockAxiosPost).toHaveBeenCalledWith('api/auth/register', newUser);
});

it('Register should handle errors when failing to register', async () => {
  const newUser = {};
  const error = new Error('Network Error');
  mockAxiosPost.mockRejectedValue(error);

  try {
    await authService.register(newUser);
  } catch (e) {
    expect(e).toBe(error);
    expect(mockAxiosPost).toHaveBeenCalledWith('api/auth/register', newUser);
  }
});

afterEach(() => {
 mockAxiosPost.mockReset();
}); 
});
