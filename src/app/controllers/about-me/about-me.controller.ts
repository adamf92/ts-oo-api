import { AbstractController } from "../../../framework/abstract.controller";
import { NextFunction, Request, Response } from "express";
import { HttpMethod } from "../../../framework/interface/route.interface";

export class AboutMeController extends AbstractController {
    
    mainPath() {
        return 'about-me';
    }

    routes() {
        return [
            {
                method: HttpMethod.get,
                path: '',
                use: 'index'
            }
        ];
    }

    public index(req: Request, res: Response): any {
        res.send('About me! TEST');
    }
}