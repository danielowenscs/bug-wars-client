import axios from "axios";


export default{

    login(user: any) {
        return axios.post('api/auth/login', user)
      },

}