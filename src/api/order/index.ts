import request from '@/util/request'

enum API {
    GetOrdersByUserId_URL = 'api/order-service/order/page',
    CreateOrder_URL = 'api/order-service/order/create',
    QueryOrderById_URL = 'api/order-service/order/query',
    CancelOrder_URL = 'api/order-service/order/cancel',
    CloseOrder_URL = 'api/order-service/order/close',
}
export const reqGetOrdersByUserId = (data: any) => request.post<any, any>(API.GetOrdersByUserId_URL, data)
export const reqCreateOrder = (data: any) => request.post<any, any>(API.CreateOrder_URL, data)
export const reqQueryOrder = (orderSn: any) => request.get<any, any>(API.QueryOrderById_URL + `?orderSn=${orderSn}`)
export const reqCancelOrder = (data: any) => request.post<any, any>(API.CancelOrder_URL, data)
export const reqCloseOrder = (data: any) => request.post<any, any>(API.CloseOrder_URL, data)