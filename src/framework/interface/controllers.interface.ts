import { AbstractController } from "../abstract.controller";

export interface IControllers {
	[name: string]:  AbstractController;
}