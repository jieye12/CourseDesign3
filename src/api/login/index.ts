import request from '@/util/request'

enum API {
    // 192.168.136.59
    LOGIN_URL = 'api/user-service/v1/login',
    REGISTER_URL = 'api/user-service/register',
}
export const reqLogin = (data: any) => request.post<any, any>(API.LOGIN_URL, data)
export const reqRegister = (data: any) => request.post<any, any>(API.REGISTER_URL, data)