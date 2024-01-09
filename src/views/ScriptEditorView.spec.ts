
import { describe, expect, it,vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ScriptEditorViewVue from './ScriptEditorView.vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

vi.mock('vue-router', async () => {
  const actual = await vi.importActual("vue-router")
  return {
    ...actual,
  resolve: vi.fn(),
  RouterLink: {
      template: '<div><slot></slot></div>',
    }, 
 }});

describe('ScriptEditorView.vue', () => {
 it('renders properly', async () => {
   const pinia = createPinia();
   const app = createApp(ScriptEditorViewVue);
   app.use(pinia);
   
   const mockRouter = {
    push: vi.fn(),
    resolve: vi.fn().mockImplementation((to) => ({ href: to })),
  }

   const wrapper = mount(ScriptEditorViewVue,{
    global: {
     
      mocks: {
        $router: mockRouter,
      },
    },
  });
   expect(wrapper.text());
 });
});