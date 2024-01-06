import { test,vi,expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LoginView from '@/views/LoginView.vue'
import { useAuthStore } from '@/stores/AuthStore'
import authService from '@/services/authService'
import { useRouter } from 'vue-router'
import axios from 'axios'

vi.mock('axios')

// Mock dependencies
vi.spyOn(useAuthStore, 'default').mockReturnValue({
 init: vi.fn(),
 setAuthToken: vi.fn(),
 setUser: vi.fn(),
})

vi.spyOn(authService, 'login').mockResolvedValue({
 data: {
 token: 'test-token',
 user: {},
 },
})

vi.spyOn(useRouter, 'default').mockReturnValue({
 push: vi.fn(),
})

// Mock Axios
axios.post.mockResolvedValue({
 data: {
 token: 'test-token',
 user: {},
 },
})

// Mock the login method
vi.spyOn(LoginView.methods, 'login').mockImplementation(() => {
 // Implement your logic here
})

test('renders the login form', () => {
 const wrapper = mount(LoginView)
 expect(wrapper.find('.login-form').exists()).toBe(true)
})

test('submits the form correctly', async () => {
 const wrapper = mount(LoginView)
 await wrapper.find('form').trigger('submit.prevent')
 expect(authService.login).toHaveBeenCalled()
 expect(axios.post).toHaveBeenCalledWith('your-endpoint-url', loginData)
})
