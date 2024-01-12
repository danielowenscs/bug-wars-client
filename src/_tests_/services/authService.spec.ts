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

afterEach(() => {
 mockAxiosPost.mockReset();
}); });
