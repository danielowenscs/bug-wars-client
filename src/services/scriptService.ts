import axios from "axios";



export default{
    async createNewScript(script: any){
       return axios.post('/api/scripts')
        .catch(error => {
            console.error(error);})}




}