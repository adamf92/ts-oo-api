import { Express } from 'express';
import { RequestHandlerParams } from 'express-serve-static-core';
import { Route } from './interface/route.interface';
import { Controllers } from './controllers';

export class Router {

    private static instance: Router = null;

    private _routes: Route[] = [];

    public static start(app: Express) {
        if (!Router.instance) {
            Router.instance = new Router(app);
        }
    }

    public static getRouter(): Router {
        if (!Router.instance) {
            throw new ReferenceError('Router instance is not defined. Try with start(app: Express) method')
        }
        return Router.instance;
    }

    private constructor(private app: Express) {
        this._createRoutes();
        this._registerRoutes(app);
    }

    private _createRoutes() {
        for (let ctrl in Controllers) {
            this._routes.push(...Controllers[ctrl].getRoutes());
        }
    }

    private _registerRoutes(app: Express) {
        for (let route of this._routes) {
            app[route.method](route.path, (<RequestHandlerParams> route.controller));
        }
    }
    

}