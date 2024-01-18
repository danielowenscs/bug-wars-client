import { beforeEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { type AxiosResponse } from 'axios';
import RegisterView from '@/views/RegisterView.vue';
import authService from '@/services/authService';
import { useRouter } from 'vue-router';

let wrapper;
vi.mock('@/services/authService');
vi.mock('vue-router', async () => {
    const actual = await vi.importActual('vue-router');
    return {
        ...actual,
        useRouter: vi.fn().mockReturnValue({
            push: vi.fn(),
        }),
    };
});

describe('RegisterView.vue', () => {
    const pinia = createPinia();

    beforeEach(() => {
        setActivePinia(pinia);
    });

    it('User is able to register successfully and is pushed to login screen', async () => {
        wrapper = mount(RegisterView, {
            global: { plugins: [pinia] },
        });

        const mockNewUser = {username: 'newguy', email:'newguy@gmail.com', password: 'newguy1'};

        const mockResponse: AxiosResponse<any, any> = {
            data: {email:'newguy@gmail.com', id: 2, username: 'newguy'},
            status: 201,
            statusText: "",
            headers: {},
            config: {} as any,
        };

        vi.mocked(authService.register).mockResolvedValue(mockResponse);

        const usernameInput = wrapper.find('input[type="text"]');
        const emailInput = wrapper.find('input[type="email"]');
        const passwordInput = wrapper.find('#password');
        const passwordConfirmInput = wrapper.find('#passwordDuplicate');
        await usernameInput.setValue('newguy');
        await emailInput.setValue('newguy@gmail.com');
        await passwordInput.setValue('newguy1');
        await passwordConfirmInput.setValue('newguy1');

        const registerButton = wrapper.find('button');
        const spy = vi.spyOn(registerButton, 'trigger');
        await registerButton.trigger('submit.prevent');

        expect(authService.register).toHaveBeenCalledWith(mockNewUser);
        expect(spy).toHaveBeenCalledOnce;
        expect(useRouter().push).toHaveBeenCalledWith('/login');
    })

    it('Displays an error message if passwords do not match', async () => {
        wrapper = mount(RegisterView, {
            global: { plugins: [pinia] },
        });

        const mockNewUser = {username: 'newguy2', email:'newguy@gmail2.com', password: 'newguy2'};
    
        const usernameInput = wrapper.find('input[type="text"]');
        const emailInput = wrapper.find('input[type="email"]');
        const passwordInput = wrapper.find('#password');
        const passwordConfirmInput = wrapper.find('#passwordDuplicate');
        await usernameInput.setValue('newguy2');
        await emailInput.setValue('newguy2@gmail.com');
        await passwordInput.setValue('newguy2');
        await passwordConfirmInput.setValue('newguy1');

        const registerButton = wrapper.find('button');
        const spy = vi.spyOn(registerButton, 'trigger');
        await registerButton.trigger('submit.prevent');

        expect(spy).toHaveBeenCalledOnce();
        const errorMessage = wrapper.find('span')
        expect(errorMessage.text()).toEqual('Passwords must be matching')
    })

    
})