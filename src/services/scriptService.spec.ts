import { vi, describe, expect, it, beforeEach, afterEach } from 'vitest';
import ScriptService from './scriptService';
import axios from 'axios';

describe('ScriptService', () => {
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

  it('should create a new script', async () => {
    const script = {script_name: 'test script', body: 'script body'};
    const response = {  data: {script_name: "test script",body:'script body'},
    status: 201,
    statusText: '',
    headers: {},
    config: {} as any,};
    mockAxiosPost.mockResolvedValue(response);

    const result = await ScriptService.createNewScript(script);
    expect(result).toBe(response);
    expect(mockAxiosPost).toHaveBeenCalledWith('/api/scripts', script);
  });

  it('should handle errors when creating a new script', async () => {
    const script = {};
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
