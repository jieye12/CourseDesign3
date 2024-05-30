import { defineStore } from 'pinia'
export const useUserStateStore = defineStore('user', {
    state: () => {
        return {
            userLoginState: true,
            userAuthenticationState: false,
        }
    },
    actions: {
        userLogin() {
            this.userLoginState = true
        },
        userLogout() {
            this.userLoginState = false
        },
        userAuthentication() {
            this.userAuthenticationState = true;
        }
    }
})