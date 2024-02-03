import { vi, describe, expect, it, beforeEach, afterEach } from 'vitest';
import ScriptService from '../../services/scriptService';
import axios from 'axios';

describe('ScriptService', () => {
  const { mockAxiosPost } = vi.hoisted(() => {
    return { mockAxiosPost: vi.fn() };
  });

  const { mockAxiosGet } = vi.hoisted(() => {
    return { mockAxiosGet: vi.fn() };
  });

  const { mockAxiosPut } = vi.hoisted(() => {
    return { mockAxiosPut: vi.fn() };
  });

  const {mockAxiosDelete}= vi.hoisted(() => {
    return { mockAxiosDelete: vi.fn() };
  });

  beforeEach(async () => {
    vi.mock('axios', async () => {
      const actual = await vi.importActual('axios');
      return {
        ...actual,
        default: {
          post: mockAxiosPost,
          get: mockAxiosGet,
          put: mockAxiosPut,
          delete: mockAxiosDelete
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

  it('should get all scripts', async () => {
    const scripts = [{script_id: 1, name: "Script 1", body: "Test One"},{script_id: 2, name: "Script 2", body: "Test Two"},{script_id: 3, name: "Script 3", body: "Test Three"}]
    const response = { data: scripts, status: 200, statusText: '', headers: {}, config: {} as any };
    mockAxiosGet.mockResolvedValue(response);
   
    const result = await ScriptService.getAllScripts();
    expect(result).toBe(response);
    expect(mockAxiosGet).toHaveBeenCalledWith('/api/scripts');
   });
   
   it('should handle errors when getting all scripts', async () => {
    const error = new Error('Network error');
    mockAxiosGet.mockRejectedValue(error);
   
    try {
      await ScriptService.getAllScripts();
    } catch (e) {
      expect(e).toBe(error);
      expect(mockAxiosGet).toHaveBeenCalledWith('/api/scripts');
    }
   });
   
   it('should update a script', async () => {
    const script = { script_name: 'updated script', body: 'updated script body' };
    const scriptId = '1';
    const response = { data: script, status: 200, statusText: '', headers: {}, config: {} as any };
    mockAxiosPut.mockResolvedValue(response);
   
    const result = await ScriptService.updateScript(script, scriptId);
    expect(result).toBe(response);
    expect(mockAxiosPut).toHaveBeenCalledWith(`/api/scripts/${scriptId}`, script);
   });
   
   it('should handle errors when updating a script', async () => {
    const script = {};
    const scriptId = '1';
    const error = new Error('Network error');
    mockAxiosPut.mockRejectedValue(error);
   
    try {
      await ScriptService.updateScript(script, scriptId);
    } catch (e) {
      expect(e).toBe(error);
      expect(mockAxiosPut).toHaveBeenCalledWith(`/api/scripts/${scriptId}`, script);
    }
   });
   
   it('should delete a script by id', async () => {
    const scriptId = 1;
    const response = { data: {}, status: 204, statusText: '', headers: {}, config: {} as any };
    mockAxiosDelete.mockResolvedValue(response);
   
    const result = await ScriptService.deleteScriptById(scriptId);
    expect(result).toBe(response);
    expect(mockAxiosDelete).toHaveBeenCalledWith(`/api/scripts/${scriptId}`);
   });
   
   it('should handle errors when deleting a script by id', async () => {
    const scriptId = 1;
    const error = new Error('Network error');
    mockAxiosDelete.mockRejectedValue(error);
   
    try {
      await ScriptService.deleteScriptById(scriptId);
    } catch (e) {
      expect(e).toBe(error);
      expect(mockAxiosDelete).toHaveBeenCalledWith(`/api/scripts/${scriptId}`);
    }
   });
   

  afterEach(() => {
    mockAxiosPost.mockReset();
    mockAxiosGet.mockReset();
    mockAxiosPut.mockReset();
    mockAxiosDelete.mockReset();
  });
});
