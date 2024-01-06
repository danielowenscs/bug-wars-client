import axios from "axios";



export default{
    async createNewScript(script: any){
        console.log(script);
       return axios.post('/api/scripts',script)
        .catch(error => {
            console.error(error);})}

}