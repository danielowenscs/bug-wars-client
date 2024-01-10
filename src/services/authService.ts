import axios from "axios";


export default{

    login(user: any) {
        return axios.post('api/auth/login', user)
      },

    register(newUser: any) {
      return axios.post('api/auth/register', newUser)
    }

}