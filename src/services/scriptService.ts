import axios from "axios";



export default{
    async createNewScript(script: any){
        console.log(script);
       return axios.post('/api/scripts',script)
        .catch(error => {
            console.error(error);})},

    async getAllScripts(){
        return axios.get('/api/scripts')
        .catch(error => {
            console.error(error);})},

    async updateScript(script: any, scriptId: string){
        console.log(scriptId);
        return axios.put(`/api/scripts/${scriptId}`, script)
        .catch(error => {
            console.error(error);})},
    
    async deleteScriptById(scriptId: number) {
        console.log(`Deleting script with ID: ${scriptId}`);
        return axios.delete(`/api/scripts/${scriptId}`)
            .catch(error => {
                console.error(error);
            });
    }

}