import request from '@/util/request'

enum API {
    AUTHENTICATE_URL = 'api/user-service/authenticate',
    Query_URL = 'api/user-service/actual/query',
    UPDATE_URL = 'api/user-service/update'
}
export const reqAuthenticate = (data: any) => request.post<any, any>(API.AUTHENTICATE_URL, data)
export const reqQuery = (username: string) => request.get<any, any>(API.Query_URL + `?username=${username}`)
export const reqUpdate = (data: any) => request.post<any, any>(API.UPDATE_URL, data)