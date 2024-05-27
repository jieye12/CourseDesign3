import { defineStore } from 'pinia'
export const useUserStateStore = defineStore('user', {
    state: () => {
        return {
            userLoginState: false
        }
    },
    actions: {
        userLogin() {
            this.userLoginState = true
        },
        userLogout() {
            this.userLoginState = false
        }
    }
})