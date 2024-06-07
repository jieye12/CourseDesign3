import request from '@/util/request'

enum API {
    APPLYSTORE_URL = 'api/commodity-service/ApplyStore',
}
export const reqApplyStore = (data: any) => request.post<any, any>(API.APPLYSTORE_URL, data)
// export const reqAuthenticate = (data: any) => request.post<any, any>(API.AUTHENTICATE_URL, data)
// export const reqQuery = (username: string) => request.get<any, any>(API.Query_URL + `?username=${username}`)
// export const reqUpdate = (data: any) => request.post<any, any>(API.UPDATE_URL, data)