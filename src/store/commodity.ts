import { defineStore } from 'pinia'
export const useCommodityStore = defineStore('commodity', {
    state: () => {
        return {
            useCommodityId: '',
            useCommodityType: '',
            useCommodityPrice: "",
        }
    },
    getters: {
        getCommodityId(): any {
            return this.useCommodityId
        },
        getCommodityType(): any {
            return this.useCommodityType
        },
        getCommodityPrice(): any {
            return this.useCommodityPrice
        },
    },
    actions: {
        saveCommodity(id: any, type: any, price: any) {
            this.useCommodityId = id
            this.useCommodityType = type
            this.useCommodityPrice = price
        },
    }
})