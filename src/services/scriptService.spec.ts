import { axios } from 'axios';
import { vi, describe, expect, it, beforeEach, afterEach } from 'vitest';
import ScriptService from './ScriptService';

describe('ScriptService', () => {
 const { mockAxiosPost } = vi.hoisted(() => {
 return { mockAxiosPost: vi.fn() };
 });

 beforeEach(async () => {
 const actualAxios = await vi.importActual('axios');
 vi.mock('axios', () => ({
   ...actualAxios,
   post: mockAxiosPost,
 }));
 });

 it('should create a new script successfully', async () => {
 const script = {}; // replace with actual script data
 const response = {}; // replace with actual response data
 mockAxiosPost.mockResolvedValue(response);

 const result = await ScriptService.createNewScript(script);
 expect(result).toBe(response);
 expect(mockAxiosPost).toHaveBeenCalledWith('/api/scripts', script);
 });

 it('should handle errors when creating a new script', async () => {
 const script = {}; // replace with actual script data
 const error = new Error('Network error');
 mockAxiosPost.mockRejectedValue(error);

 try {
   await ScriptService.createNewScript(script);
 } catch (e) {
   expect(e).toBe(error);
   expect(mockAxiosPost).toHaveBeenCalledWith('/api/scripts', script);
 }
 });

 afterEach(() => {
 mockAxiosPost.mockReset();
 });
});
