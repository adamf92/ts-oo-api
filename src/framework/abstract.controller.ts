import { NextFunction, Request, Response, RequestParamHandler } from "express";
import { ControllerRoute, Route } from "./interface/route.interface";
import { Controllers } from "./controllers";

export abstract class AbstractController {

    [key: string]: Function;

    abstract routes(): ControllerRoute[];
    abstract mainPath(): string;

    protected errorHandler(error: any) {
        // TODO
    }

    public getRoutes() {
        return this.routes().map<Route>(r => this._createRoute(r));
    }

    private _createRoute(route: ControllerRoute): Route {
        let result: any = {};
        result.method = route.method;
        if (this.mainPath() !== '') {
            result.path = '/' + this.mainPath() + '/' + route.path;
        } else {
            result.path = '/' + route.path;
        }

        result.controller = Controllers[this._parseControllerName()][route.use];
        return result as Route;
    }

    private _parseControllerName() {
        let name: string = (<any> this.__proto__.constructor).name;
        name = name.substring(0, name.indexOf('Controller'));
        return name.replace(/([A-Z])/g, (s) => `-${s[0].toLowerCase()}`).substring(1);
    }

}

