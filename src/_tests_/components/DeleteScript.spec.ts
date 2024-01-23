import { describe, expect, it,vi,beforeEach} from 'vitest';
import DeleteScript from '@/components/DeleteScript.vue';
import { useScriptStore } from '@/stores/ScriptStore';
import { createPinia,setActivePinia } from 'pinia';
import { mount } from '@vue/test-utils';
import {type AxiosResponse} from 'axios';
import { useRouter } from 'vue-router';
import scriptService from '@/services/scriptService';

let wrapper;
vi.mock('@/services/scriptService');

describe('DeleteScript.vue', () => {
    // Mock Vue Router
 vi.mock('vue-router', async () => {
    const actual = await vi.importActual('vue-router');
    return {
      ...actual,
      useRouter: vi.fn().mockReturnValue({
        push: vi.fn(),
      }),
    };
  });

    beforeEach(() => {
     sessionStorage.clear();
     setActivePinia(createPinia());
    
      });
      const mockScripts = [
        {
          scriptId: 1,
          name: 'Script One',
          body: 'Testing One Script',
        },
        {
          scriptId: 2,
          name: 'Script Two',
          body: 'Testing a Second Script',
        },
        {
        scriptId: 3,
        name: 'Script Three',
        body: 'Testing a Third Script',
          },
      ]
      
      it('deletes script with correct ID from backend & ScriptStore on success', async () => {

        //arrange
        const scriptStore = useScriptStore()
        scriptStore.setScripts(mockScripts);
        scriptStore.setScript(mockScripts[1]);
        wrapper = mount(DeleteScript)
        const toggleButton = wrapper.find('#toggle-button');
        

        const mockScriptID = 2;
       
        const mockResponse: AxiosResponse<any, any> = {
          status: 200, 
          data:{}, 
            statusText:'',
        headers: {},
        config: {} as any,}
      
        vi.mocked(scriptService.deleteScriptById).mockResolvedValue(mockResponse);
        await toggleButton.trigger('click');
        await wrapper.vm.$nextTick();
        const yesButton = wrapper.find('#yes-button');
        //act
        await yesButton.trigger('click');

        //assert
        expect(scriptService.deleteScriptById).toHaveBeenCalledOnce();
        expect(scriptService.deleteScriptById).toHaveBeenCalledWith(mockScriptID);
        expect(scriptStore.scripts.length).toEqual(2);
        expect(scriptStore.scripts[1].scriptId).toEqual(3);

      })
    });