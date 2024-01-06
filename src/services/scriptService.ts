import axios from "axios";



export default{
    async createNewScript(script: any){
        console.log(script);
       return axios.post('/api/scripts',script)
        .catch(error => {
            console.error(error);})},

    async deleteScriptById(scriptId: string) {
        console.log(`Deleting script with ID: ${scriptId}`);
        return axios.delete(`/api/scripts/${scriptId}`)
            .catch(error => {
                console.error(error);
            });
    }

}