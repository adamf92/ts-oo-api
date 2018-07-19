import { RequestHandlerParams } from "express-serve-static-core";

export interface Route {
    method: HttpMethod,
    path: string,
    controller: Function
}

export interface ControllerRoute {
    method: HttpMethod,
    path: string,
    use: string
}

export enum HttpMethod {
    get = 'get',
    post = 'post',
    put = 'put',
    patch = 'patch',
    delete = 'delete'
}