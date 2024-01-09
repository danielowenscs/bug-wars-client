import { defineStore } from "pinia";
import axios from "axios";

const currentToken = localStorage.getItem('token');
//TODO: remove currentUser
const currentUser = localStorage.getItem('username');
if (currentToken != null) {
	axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export const useAuthStore = defineStore("auth", {
	state: () => ({
		token: currentToken || '',
		//TODO: remove user
		user: currentUser || '',
	}),
	getters: {
		// Add your getters here
	},
	actions: {

		setAuthToken(token:any) {
			this.token = token;
			localStorage.setItem('token', token);
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
		},
		setUser(user:any) {
			this.user = user;
			localStorage.setItem('username', user);
           
		},
		logout() {
			localStorage.removeItem('token');
			localStorage.removeItem('username');
			this.token = '';
			this.user = '';
		
			axios.defaults.headers.common = {};
		},
	},
});
