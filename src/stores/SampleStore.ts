import { defineStore } from "pinia";

export const useSampleStore = defineStore("customer", {
	state: () => {
		return {
			customers: ["Dan Malarkey", "Precious Cobalt", "Puxatawnee Fill"],
		};
	},
    getters: {
        getFirstCustomer(state){
            return state.customers[0];
        }
    },
	actions: {
		setCustomers(customerList: string[]) {
			this.customers = customerList;
		},
	},
});
