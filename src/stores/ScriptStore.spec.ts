import { useEditorStore } from './ScriptStore';
import { beforeEach, describe, expect, it } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { mount } from '@vue/test-utils';

describe('ScriptStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders the component', () => {
    const wrapper = mount(useEditorStore, {
      global: {
        plugins: [createPinia()],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('toggles the button state', async () => {
    // More tests here for toggling
  });

  it('saves the new script', async () => {
    // tests here for the save functionality
  });
 it('cancels the new script', async () => {
   // tests here for the cancel functionality
 });
  //future tests that might be needed:
      //**API Calls**/
});

