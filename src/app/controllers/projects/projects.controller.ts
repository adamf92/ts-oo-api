import { AbstractController } from "../../../framework/abstract.controller";
import { NextFunction, Request, Response } from "express";
import { HttpMethod } from "../../../framework/interface/route.interface";

export class ProjectsController extends AbstractController {

    mainPath() {
        return 'projects';
    }

    routes() {
        return [
            {
                method: HttpMethod.get,
                path: '',
                use: 'index'
            }
        ]
    }

    public index(req: Request, res: Response): any {
        res.json({
            projects: [
                'API framework',
                'ts-utils'
            ]
        });
    }
}