import request from '@/util/request'

enum API {
    HangOut_URL = 'api/commodity-service/ListProducts',
    GetProduct_URL = 'api/commodity-service/ObtainProduct',
    SearchProduct_URL = 'api/commodity-service/SearchProduct',
    GetAllProductByUserId_URL = 'api/commodity-service/GetAllProductByUserId',
    ViewProductDetails_URL = 'api/commodity-service/ViewProductDetails',
}
export const reqHangOut = (data: any) => request.post<any, any>(API.HangOut_URL, data)
export const reqGetProduct = (productType: string) => request.get<any, any>(API.GetProduct_URL + `?productType=${productType}`)
export const reqSearchProduct = (nameOrType: any, productNameOrType: any) => request.get<any, any>(API.SearchProduct_URL + `?nameOrType=${nameOrType}` + `&productNameOrType=${productNameOrType}`)
export const reqGetAllProductByUserId = (id: any) => request.get<any, any>(API.GetAllProductByUserId_URL + `?id=${id}`)
export const reqViewProductDetails = (id: any) => request.get<any, any>(API.ViewProductDetails_URL + `?id=${id}`)