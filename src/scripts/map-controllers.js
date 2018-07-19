const fs = require('fs');
const { join } = require('path');

const controllersDir = __dirname + '/../app/controllers/';

const isDirectory = source => fs.lstatSync(source).isDirectory()
const getDirectories = source =>
  fs.readdirSync(source).map(name => join(source, name)).filter(isDirectory);

let controllers = [];

getDirectories(controllersDir).forEach(
    dir => {
        const name = dir.substring(dir.lastIndexOf('/') + 1);
        const data = fs.readFileSync(dir + '/' + name + '.controller.ts');
        const file = data.toString();
        const controller = file.substring(file.indexOf('export class') + 13, file.indexOf('extends AbstractController') - 1);
        controllers.push({ controller, name });
    }
);

const controllersFileDir = __dirname + '/../framework/controllers.ts';

fs.readFile(controllersFileDir, (err, data) => {
    let text = 'import { AbstractController } from "./abstract.controller";';
    text += '\n';
    text += 'import { IControllers } from "./interface/controllers.interface";';
    for (let ctrl of controllers) {
        text += '\n';
        text += 'import { ' + ctrl.controller + ' } from "../app/controllers/' + ctrl.name + '/' + ctrl.name + '.controller";';
    }
    text += '\n \n';
    text += 'export const Controllers: IControllers = { \n';
    for (let ctrl of controllers) {
        text += '\n';
        text += '\t\'' + ctrl.name + '\':' + ' new ' + ctrl.controller + '(),';
    }
    text += '\n \n';
    text += '} \n';
    fs.writeFile(controllersFileDir, text, (err) => {
        if (!err) {
            console.log('Controllers:')
            for (let ctrl of controllers) {
                console.log(ctrl.controller);
            }
            console.log('added to controllers.ts file');
        } else {
            console.log(err);
        }
    });
});