import { AbstractController } from "../../../framework/abstract.controller";
import { NextFunction, Request, Response } from "express";
import { HttpMethod } from "../../../framework/interface/route.interface";

export class HomeController extends AbstractController {
    
    mainPath() {
        return '';
    }

    routes() {
        return [
            {
                method: HttpMethod.get,
                path: '',
                use: 'index'
            }, {
                method: HttpMethod.get,
                path: 'home',
                use: 'index'
            }
        ];
    }

    public index(req: Request, res: Response): any {
        res.send('Hello world!');
    }
}
