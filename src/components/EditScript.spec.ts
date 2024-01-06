import { describe, expect, it } from 'vitest';

import EditScript from '@/components/EditScript.vue';
import { shallowMount } from '@vue/test-utils';


describe('EditScript.vue', () => {
  it('renders edit buttons for each script', () => {
    const scripts = [
      { scriptId: 1, name: 'Script 1', body: 'Body 1' },
      { scriptId: 2, name: 'Script 2', body: 'Body 2' },
    ];

    const wrapper = shallowMount(EditScript, {
      props: { scripts },
    });

    expect(wrapper.findAll('button').length).toEqual(scripts.length);
  });

  it('shows form when edit button is clicked', async () => {
    const wrapper = shallowMount(EditScript);

    await wrapper.find('button').trigger('click');
    expect(wrapper.find('form').isVisible()).toBe(true);
  });

});