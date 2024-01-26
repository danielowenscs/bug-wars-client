import { describe, expect, it,vi,beforeEach,afterEach } from 'vitest';
import NewScript from '@/components/NewScript.vue';
import ScriptConsole from '@/components/ScriptConsole.vue';
import { useScriptStore } from '@/stores/ScriptStore';
import { createPinia } from 'pinia';
import { mount } from '@vue/test-utils';
import {type AxiosResponse} from 'axios';
import scriptService from '@/services/scriptService';


let wrapper;
vi.mock('@/services/scriptService');
const props = {
  name: 'Test Script',
  body: "Hello world!",
  modelValue: false
 }

describe('NewScript.vue', () => {

 beforeEach(() => {
  vi.resetAllMocks();
   });
   it('renders properly', () => {
    const pinia = createPinia()
   const store = useScriptStore(pinia)
    wrapper = mount(NewScript);
    expect(wrapper.findComponent(NewScript).exists()).toBe(true);
  });

  it('saves editor script', async () => {
    
    const wrapper = mount(NewScript)
    const createButton = wrapper.find('button');
    const mockScriptRequest = {name: 'Test Script', body:'Hello world!'}
    const expectedSuccessStatus = 201;
    const mockResponse: AxiosResponse<any, any> = {
      status: 201, 
      data:{
        script_id: 1, 
        name:'Test Script',body:'Hello world!'}, 
        statusText:'',
    headers: {},
    config: {} as any,}
  
    vi.mocked(scriptService.createNewScript).mockResolvedValue(mockResponse);
    await createButton.trigger('click');
    await wrapper.vm.$nextTick();
    // Find the ScriptConsole component
 const scriptConsoleWrapper = wrapper.getComponent(ScriptConsole);

 // Find the inputs within the ScriptConsole component
  const scriptNameInput = scriptConsoleWrapper.find('input');
  const scriptBodyTextarea = scriptConsoleWrapper.find('#script-editor-box');
  const submitButton = scriptConsoleWrapper.find('#save-button');
  
    scriptNameInput.setValue(props.name);
    scriptBodyTextarea.setValue(props.body);
  
    await wrapper.vm.$nextTick();
    
    // const [[newName]]: any = scriptConsoleWrapper.emitted()['update:name'];
    // const [[newBody]]: any = scriptConsoleWrapper.emitted()['update:body'];
    // const mockScriptRequest = {name: newName, body:newBody};
    console.log("MOCK REQUEST: " + mockScriptRequest);
  
   submitButton.trigger('submit.prevent');
    console.log("SENT: " + mockScriptRequest);
    // expect(scriptService.createNewScript).toHaveBeenCalledOnce();
    await wrapper.vm.$nextTick();
    expect(scriptService.createNewScript).toHaveBeenCalledWith(mockScriptRequest);
    const response = await scriptService.createNewScript(mockScriptRequest);
    
    expect(response.status).toStrictEqual(expectedSuccessStatus);


  });

  });
  
