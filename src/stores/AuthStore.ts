
// import { defineStore } from "pinia";
// import axios from "axios";

// const currentToken = localStorage.getItem('token')
// let currentUser = localStorage.getItem('user');
// const currentRefreshToken = localStorage.getItem('refreshToken');
// if (currentToken != null) {
//    axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
// }
// if (currentUser !== null && currentUser !== undefined) {
//    currentUser = JSON.parse(currentUser);
// }

// export const useAuthStore = defineStore("auth", {
// 	state: () => {
// 		return {
//             token: currentToken || '',
//             refreshToken: currentRefreshToken || '',
//             user: currentUser || {},

// 		};
// 	},
//     getters: {

//     },
// 	actions: {
//         setAuthToken(token: any, refreshToken: any) {
//             this.token = token;
//             this.refreshToken = refreshToken;
//             localStorage.setItem('token', token);
//             localStorage.setItem('refreshToken', refreshToken);
//             axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
//           },
//           setUser(user: any) {
//             this.user = user;
//             localStorage.setItem('user', JSON.stringify(user));
//           },
//           logout() {
//             localStorage.removeItem('token');
//             localStorage.removeItem('refreshToken');
//             localStorage.removeItem('user');
//             this.token = '';
//             this.refreshToken = '';
//             this.user = {};
//             axios.defaults.headers.common = {};
//           },

// 	},
// });
import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
	state: () => ({
		token: '',
		user: {},
	}),
	getters: {
		// Add your getters here
	},
	actions: {
		init() {
			const currentToken = localStorage.getItem('token');
			const currentUser = localStorage.getItem('user');
			if (currentToken != null) {
				this.token = currentToken;
				axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
			}
			if (currentUser != null) {
                try {
                    this.user = JSON.parse(currentUser);
                } catch (error) {
                    this.user = {};
                    
                }
				
			}
		},
		setAuthToken(token:any) {
			this.token = token;
			localStorage.setItem('token', token);
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            console.log("TOKEN READY")
		},
		setUser(user:any) {
			this.user = user;
			localStorage.setItem('user', JSON.stringify(user));
            console.log("USER READY")
		},
		logout() {
			localStorage.removeItem('token');
			localStorage.removeItem('user');
			this.token = '';
			this.user = {};
			delete axios.defaults.headers.common['Authorization'];
		},
	},
});
