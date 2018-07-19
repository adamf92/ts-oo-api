# TS ObjectOriented API Framework
Object Oriented Rest API Framework written in TypeScript & Node.js  
It's build on Express.js, but instead of callbacks it`s using Controllers.

#### version 0.0.1 - only first simple features

## Usage

Base directory for application is src/app
### Controllers
#### Structure
All controllers should be placed in src/app/controllers folders  
in separate folders for each controller. Folders and Controllers should  
have same name. Controller class should be named in CamelCase and should have  
Controller suffix.  
Example: HomeController should be placed in src/app/controllers/home/home.controller.ts file  
TwoWordsController should be placed in src/app/controllers/two-words/two-words.controller.ts file

#### Controller Class

Controller class should extends AbstractController and implements
mainPath() and routes() abstract methods.

##### mainPath()
mainPath method should return main resource path string ex. 'home'

##### routes()
routes method should return array of ControllerRoute objects:
```typescript
{
    method: HttpMethod,
    path: string,
    use: string
}
```

##### Controller Methods
'use' field of ControllerRoute object is a name of controller method to handle route  
Controller methods should have two arguments: Request and Response (from express)  
and should be public. At this moment their implementation is the same as request handlers callbacks in express.

##### Controller example
```typescript
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
```

## Compilation & Running
It`s important to not compile project with only **tsc**, because it needs
to run pre-compilation script for mapping controllers classes.

To compile project use **npm run build**.  
To compile & run use **npm start**.

## ToDo
* Middlewares
* Models & Database Connection
* CLI Tools
* NPM package
* Framework Name
* Production compilation
* Dependency Injection
* Views
* Documentation
* & More!

## Dependencies
* [TypeScript](https://github.com/Microsoft/TypeScript)
* [Express](https://github.com/expressjs/express)
* [@types/express](https://github.com/DefinitelyTyped/DefinitelyTyped)
