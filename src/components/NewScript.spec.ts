import { describe, expect, it,vi,beforeEach,afterEach } from 'vitest';
// import { useToast } from 'vue-toastification';
import NewScript from './NewScript.vue';
import { mount } from '@vue/test-utils';
import {type AxiosResponse} from 'axios';
import scriptService from '@/services/scriptService';


let wrapper;
vi.mock('@/services/scriptService');

describe('NewScript.vue', () => {
//  let toastSpy: any;

 beforeEach(() => {
  vi.resetAllMocks();
   });
   it('renders properly', () => {
    wrapper = mount(NewScript);
    expect(wrapper.findComponent(NewScript).exists()).toBe(true);
  });

  it('saves editor script', async () => {
    const wrapper = mount(NewScript)
    const createButton = wrapper.find('button');
    const mockScriptRequest = {script_name: 'Test Script', script_body:'Hello world!'}
    const expectedSuccessStatus = 201;
    const mockResponse: AxiosResponse<any, any> = {
      status: 201, 
      data:{
        script_id: 1, 
        name:'Test Script',body:'Hello world!'}, 
        statusText:'',
    headers: {},
    config: {} as any,}
    // let toastSpy = vi.spyOn(useToast(), 'success');

    vi.mocked(scriptService.createNewScript).mockResolvedValue(mockResponse);
    await createButton.trigger('click');
    await wrapper.vm.$nextTick();
    const scriptNameInput = wrapper.find('#script-title');
    const scriptBodyTextarea = wrapper.find('#script-editor-box');
    const submitButton = wrapper.find('#save-button');
    await scriptNameInput.setValue('Test Script');
    await scriptBodyTextarea.setValue('Hello world!');
  
    await submitButton.trigger('submit.prevent');
   
    expect(scriptService.createNewScript).toHaveBeenCalledWith(mockScriptRequest);
 
    expect(mockResponse.status).toStrictEqual(expectedSuccessStatus);
    expect(wrapper.vm.showNewEditor).toBe(false);
  });




  });
  
