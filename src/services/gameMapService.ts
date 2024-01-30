import axios from "axios";

export default{

    async getAllMaps(){
        return axios.get('/api/maps')
        .catch(error => {
            console.error(error);
            return Promise.reject(error);
        })},


}


