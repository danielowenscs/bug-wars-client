import axios from "axios";

export default{
    async createNewScript(script: any){
        return axios.post('/api/scripts', script)
    },

    async getAllScripts(){
        return axios.get('/api/scripts')
        .catch(error => {
            console.error(error);
            return Promise.reject(error);
        })},

    async updateScript(script: any, scriptId: string){
        console.log(scriptId);
        return axios.put(`/api/scripts/${scriptId}`, script);},
    
    async deleteScriptById(scriptId: number) {
        console.log(`Deleting script with ID: ${scriptId}`);
        return axios.delete(`/api/scripts/${scriptId}`);
    }

}