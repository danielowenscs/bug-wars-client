// import scriptService from "@/services/scriptService";
// import { useToast } from 'vue-toastification';
// import { useScriptStore } from "@/stores/ScriptStore";

// const toast = useToast();
// const scriptStore = useScriptStore();

// export async function createScript (script:any){
//     scriptService
//     .createNewScript(script)
//     .then((response) => {
//       console.log(response);
//       if (response.status == 201) {
//         scriptStore.addNewScript(response.data);
//         toast.success('Successful Save');
//         console.log('DATA: ' + response.data);
//         // toggleNewEditor();
//       }
//     })
//     .catch((error) => {
//       if (error.response && error.response.status == 409) {
//         toast.error('Script with that name already exists');
//       } else {
//         toast.error('Error Saving Script, Try again');
//       }
//     });
// }

// export async function updateScript (script: any) {
//     const scriptId = scriptStore.script.scriptId.toString();
//     scriptService.updateScript(script, scriptId).then((response) => {
//       if (response.status == 201) {
//         scriptStore.addNewScript(response.data);
//         console.log('DATA: ' + response.data);
//         scriptStore.setScript(response.data);
//         toast.success('Successful Update');
//         // cancelEdit();
//       }
//     })   .catch((error) => {
//         if (error.response && error.response.status == 409) {
//           toast.error('Script with that name already exists');
//         } else {
//           toast.error('Error Updating Script. Try again');
//         }
//       });
//   };