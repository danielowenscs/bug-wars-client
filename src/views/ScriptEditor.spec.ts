import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import ScriptEditorViewVue from './ScriptEditorView.vue';

describe('HomeView', () => {
  it('renders properly', () => {
    const wrapper = mount(ScriptEditorViewVue, { props: { msg: 'Script Editor' } });
    expect(wrapper.text()).toContain('Script Editor');
  });
});
