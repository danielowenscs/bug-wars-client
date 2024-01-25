import { defineStore } from "pinia";
import axios from "axios";

const currentToken = localStorage.getItem('token');

if (currentToken != null) {
	axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export const useAuthStore = defineStore("auth", {
	state: () => ({
		token: currentToken || '',

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

		logout() {
			localStorage.removeItem('token');
						
			this.token = '';
			
		
			axios.defaults.headers.common = {};
		},
	},
});
