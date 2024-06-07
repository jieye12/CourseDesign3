import { defineStore } from 'pinia'
export const useOrderStore = defineStore('order', {
    state: () => {
        return {
            useOrderId: '',
            useOrderStatus: "",
        }
    },
    getters: {
        getOrderId(): any {
            return this.useOrderId
        },
        getOrderStatus(): any {
            return this.useOrderStatus
        },
    },
    actions: {
        saveOrder(id: any) {
            this.useOrderId = id
        },
    }
})