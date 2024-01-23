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
const props = {
  name: 'Test Script',
  body: "Hello world!",
  modelValue: false
 }

describe('UpdateScript.vue', () => {

 beforeEach(() => {
  vi.resetAllMocks();
   });
   it('renders properly', () => {
    const pinia = createPinia()
   const store = useScriptStore(pinia)
    wrapper = mount(UpdateScript);
    expect(wrapper.findComponent(UpdateScript).exists()).toBe(true);
  });
})