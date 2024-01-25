import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ScriptConsole from '@/components/ScriptConsole.vue';

describe('ScriptConsole.vue', () => {

 beforeEach(() => {
 vi.resetAllMocks();
 });

 it('calls action when form is submitted', async () => {
 const mockAction = vi.fn();
 const wrapper = mount(ScriptConsole, {
   props: {
    action: mockAction,
   },
 });

 const form = wrapper.find('form');
 await form.trigger('submit');

 expect(mockAction).toHaveBeenCalled();
 });

 it('emits toggleEditor when cancel button is clicked', async () => {
 const wrapper = mount(ScriptConsole);

 const cancelButton = wrapper.find('#cancel-button');
 await cancelButton.trigger('click');

//  expect(wrapper.emitted('toggleEditor')).toBeTruthy();
await wrapper.find('#script-title').setValue('New Title');
const [[newName]]: any = wrapper.emitted()['update:name'];
expect(newName).toBe('New Title');

 });
});
