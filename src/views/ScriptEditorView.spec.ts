import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import ScriptEditorViewVue from './ScriptEditorView.vue';

describe('ScriptEditorView.vue', () => {
  it('renders properly', () => {
    const wrapper = mount(ScriptEditorViewVue);
    expect(wrapper.text());
  });
});
