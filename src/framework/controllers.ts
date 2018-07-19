import { AbstractController } from "./abstract.controller";
import { IControllers } from "./interface/controllers.interface";
import { AboutMeController } from "../app/controllers/about-me/about-me.controller";
import { HomeController } from "../app/controllers/home/home.controller";
import { ProjectsController } from "../app/controllers/projects/projects.controller";
 
export const Controllers: IControllers = { 

	'about-me': new AboutMeController(),
	'home': new HomeController(),
	'projects': new ProjectsController(),
 
} 
