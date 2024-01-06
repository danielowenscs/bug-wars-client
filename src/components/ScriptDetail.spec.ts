import { mount } from '@vue/test-utils'
import ScriptDetail from './ScriptDetail.vue'
import { useScriptStore } from '@/stores/ScriptStore'
import { createPinia } from 'pinia'
import { describe, it, expect, vi } from 'vitest'

describe('ScriptDetail', () => {
 it('renders script details', async () => {
 const pinia = createPinia()
 const store = useScriptStore(pinia)

 store.setScript({
   scriptId: 1,
   name: 'Script One',
   body: 'Testing a Script',
 })

 const wrapper = mount(ScriptDetail, {
  global: {
    plugins: [pinia],
  },
 })

 await wrapper.vm.$nextTick() // Wait for Vue to update the DOM
 const scriptDetails = wrapper.findAll('div')
 expect(scriptDetails.length).toBe(4)
 expect(scriptDetails[1].text()).toBe('Script ID: 1')
 expect(scriptDetails[2].text()).toBe('Title: Script One')
 expect(scriptDetails[3].text()).toBe('Body: Testing a Script')
 })
})
