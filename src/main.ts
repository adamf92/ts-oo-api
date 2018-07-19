import * as express from 'express';
import { Router } from './framework/router';

const app = express();

Router.start(app);

app.listen(1234, () => {
    console.log('Server started on localhost:1234');
});