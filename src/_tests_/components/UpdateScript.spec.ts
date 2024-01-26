import { describe, expect, it,vi,beforeEach,afterEach } from 'vitest';
import UpdateScript from '@/components/UpdateScript.vue';
import ScriptConsole from '@/components/ScriptConsole.vue';
import { useScriptStore } from '@/stores/ScriptStore';
import { createPinia } from 'pinia';
import { mount } from '@vue/test-utils';
import {type AxiosResponse} from 'axios';
import scriptService from '@/services/scriptService';

let wrapper;
vi.mock('@/services/scriptService');
const pinia = createPinia()
const mockScript = {
  scriptId: 1,
  name: 'Test Script',
  body: "Hello world!",
  modelValue: true
 }

describe('UpdateScript.vue', () => {

 beforeEach(() => {
  vi.resetAllMocks();
   });
   it('renders properly', () => {
    
   const store = useScriptStore(pinia)
    wrapper = mount(UpdateScript);
    expect(wrapper.findComponent(UpdateScript).exists()).toBe(true);
  });

  it('saves updated scripts', async () => {
    const store = useScriptStore(pinia)
    store.setScript(mockScript);

     wrapper = mount(UpdateScript);
     const createButton = wrapper.find('button');
     const mockScriptRequest = {name: 'Test2Script2', body:'Goodbye world!'}
    
     const mockResponse: AxiosResponse<any, any> = {
      status: 200, 
      data:{
        script_id: 1, 
        name:'Test2Script2',body:'Goodbye world!'}, 
        statusText:'',
    headers: {},
    config: {} as any,}

    vi.mocked(scriptService.updateScript).mockResolvedValue(mockResponse);
    await createButton.trigger('click');
    await wrapper.vm.$nextTick();

    // Find the ScriptConsole component
 const scriptConsoleWrapper = wrapper.getComponent(ScriptConsole);

 // Find the inputs within the ScriptConsole component
  const scriptNameInput = scriptConsoleWrapper.find('input');
  const scriptBodyTextarea = scriptConsoleWrapper.find('#script-editor-box');
  const submitButton = scriptConsoleWrapper.find('#save-button');
  
  scriptNameInput.setValue(mockScriptRequest.name);
    scriptBodyTextarea.setValue(mockScriptRequest.body);
  
    await wrapper.vm.$nextTick();

    submitButton.trigger('submit.prevent');
    
    expect(scriptService.updateScript).toHaveBeenCalledOnce();
    await wrapper.vm.$nextTick();
    expect(scriptService.updateScript).toHaveBeenCalledWith(mockScriptRequest, mockScript.scriptId.toString());
   
   });

})

