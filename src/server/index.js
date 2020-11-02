import 'regenerator-runtime/runtime';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import csrf from 'csurf';
import cors from 'cors';
import xssClean from 'xss-clean';
import http from 'http';
import { graphqlHTTP } from 'express-graphql';
import { StatusCodes } from 'http-status-codes';
import schema from './schemas';
import authenticateService from './services/authentication-service';
import sendCsrfService from './services/csrf-service';
import loggerService from './services/logger-service';
import shieldService from './services/shield-service';

dotenv.config({ path: path.join(__dirname, `../../.env/server.${process.env.TYPE ? process.env.TYPE : 'development'}.env`) });
const app = express();
if (process.env.TYPE === 'development') {
  app.get('/test', (req, res) => { res.send('ok'); });
  app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: StatusCodes.NO_CONTENT,
  }));

  app.use([
    cookieParser(),
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
  ]);
  app.use(
    '/graphql',
    authenticateService,
    graphqlHTTP((req, res) => ({ schema, context: { req, res }, graphiql: true })),
  );
} else if (process.env.TYPE === 'build') {
  app.use(cors({
    origin: ['https://kampir.com', 'http://kampir.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: StatusCodes.NO_CONTENT,
  }));
  app.use([
    helmet(),
    csrf({ cookie: true }),
    compression(),
    cookieParser(),
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
    loggerService,
    shieldService,
    xssClean(),
  ]);

  app.use(
    '/graphql',
    authenticateService,
    graphqlHTTP((req, res) => ({ schema, context: { req, res }, graphiql: false })),
  );

  app.use(sendCsrfService, express.static(path.join(__dirname, '../../', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../', 'dist', 'index.html'));
  });
}

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
server.listen(PORT, (req, res) => console.log(PORT));
export default server;
