import { describe, expect, it,vi,beforeEach } from 'vitest';
import { useToast } from 'vue-toastification';
import NewScript from './NewScript.vue';
import { VueWrapper, mount } from '@vue/test-utils';
import axios from 'axios';


describe('NewScript.vue', () => {
  let wrapper: VueWrapper<any, any>;
 let toastSpy: any;

 beforeEach(() => {
   toastSpy = vi.spyOn(useToast(), 'success');
   
   vi.mock('axios', async () => {
    const actual = await vi.importActual('axios');
    return{
      ...actual,
      post: vi.fn().mockResolvedValue({ status: 201 }),
    }
     
   });
  });
  it('renders properly', () => {
    wrapper = mount(NewScript);
    expect(wrapper.findComponent(NewScript).exists()).toBe(true);
  });

  it('saves editor script', async () => {
    const wrapper = mount(NewScript)
    const createButton = wrapper.find('button');
    const postMock = vi.spyOn(axios,'post');

// Specify what the function should return when called
    postMock.mockResolvedValueOnce({ status: 201 });
    await createButton.trigger('click');
    await wrapper.vm.$nextTick();

    console.log(wrapper.html());
    const scriptNameInput = wrapper.find('#script-title');
    const scriptBodyTextarea = wrapper.find('#script-editor-box');
    const submitButton = wrapper.find('#save-button');
 
    await scriptNameInput.setValue('Test Script');
    await scriptBodyTextarea.setValue('Hello, world!');
    
    await submitButton.trigger('submit.prevent');
   
    expect(postMock).toHaveBeenCalledWith('/api/scripts', {
      script_name: 'Test Script',
      script_body: 'Hello, world!',
    });
 
    // expect(toastSpy).toHaveBeenCalledWith("Successful Save");
    expect(wrapper.vm.showNewEditor).toBe(true);
  });


});