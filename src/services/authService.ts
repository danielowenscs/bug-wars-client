import axios from "axios";


export default{

    async login(user: any) {
        
      return await axios.post('api/auth/login', user);
    
      },

    register(newUser: any) {
      return axios.post('api/auth/register', newUser)
    }

}