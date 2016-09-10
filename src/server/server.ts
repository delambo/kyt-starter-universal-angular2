import 'angular2-universal/polyfills';
import * as path from 'path';
import * as http from 'http';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as compression from 'compression';
import { ngApp } from './app';

const DEBUG = process.env.NODE_ENV !== 'production';
const PORT = parseInt(process.env.SERVER_PORT, 10);

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());
app.use(morgan(DEBUG ? 'dev' : 'combined'));

// Serve static files
app.use(express.static(path.join(process.cwd(), process.env.PUBLIC_DIR)));

app.use('*', ngApp);

server.listen(PORT);
