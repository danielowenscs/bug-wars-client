import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();
export default{
    async createNewScript(script: any){
        return axios.post('/api/scripts', script)
        // .catch(error => {
        //     return Promise.reject(error);
        // });
    },

    async getAllScripts(){
        return axios.get('/api/scripts')
        .catch(error => {
            console.error(error);
            return Promise.reject(error);
        })},

    async updateScript(script: any, scriptId: string){
        console.log(scriptId);
        return axios.put(`/api/scripts/${scriptId}`, script)
        .catch(error => {
            console.error(error); 
            return Promise.reject(error);
        })},
    
    async deleteScriptById(scriptId: number) {
        console.log(`Deleting script with ID: ${scriptId}`);
        return axios.delete(`/api/scripts/${scriptId}`)
            .catch(error => {
                console.error(error);
                return Promise.reject(error);
            });
    }

}