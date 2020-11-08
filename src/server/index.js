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

const app = express();
if (process.env.TYPE === 'development') {
  dotenv.config({ path: path.join(__dirname, '../../.env/server.development.env') });
  app.get('/test', (req, res) => { res.send('ok'); });
  app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: StatusCodes.NO_CONTENT,
  }));

  app.use([
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'", 'blob:'],
        baseUri: ["'self'"],
        blockAllMixedContent: [],
        frameAncestors: 'self',
        imgSrc: ["'self'", 'cdnjs.cloudflare.com', 'data:'],
        objectSrc: ["'none'"],
        scriptSrc: ["'self'", 'blob:'],
        scriptSrcAttr: ["'none'"],
        styleSrc: ["'self'", "https: 'unsafe-inline'"],
        upgradeInsecureRequests: [],
        workerSrc: 'blob:',
      },
    }),
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
  dotenv.config({ path: path.join(__dirname, '../.env/server.build.env') });
  app.use(cors({
    origin: [process.env.DOMAIN],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: StatusCodes.NO_CONTENT,
  }));
  app.use([
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'", 'blob:'],
        baseUri: ["'self'"],
        blockAllMixedContent: [],
        frameAncestors: 'self',
        imgSrc: ["'self'", 'cdnjs.cloudflare.com', 'data:'],
        objectSrc: ["'none'"],
        scriptSrc: ["'self'"],
        scriptSrcAttr: ["'none'"],
        styleSrc: ["'self'", "https: 'unsafe-inline'"],
        upgradeInsecureRequests: [],
      },
    }),
    helmet.dnsPrefetchControl(),
    helmet.expectCt(),
    helmet.frameguard(),
    helmet.hidePoweredBy(),
    helmet.hsts(),
    helmet.ieNoOpen(),
    helmet.noSniff(),
    helmet.permittedCrossDomainPolicies(),
    helmet.referrerPolicy(),
    helmet.xssFilter(),
    compression(),
    cookieParser(),
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
    csrf({ cookie: true }),
    loggerService,
    shieldService,
    xssClean(),
  ]);
  app.use(
    '/graphql',
    authenticateService,
    graphqlHTTP((req, res) => ({ schema, context: { req, res }, graphiql: false })),
  );

  app.use(sendCsrfService, express.static(path.join(__dirname, '../', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'dist', 'index.html'));
  });
}

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
server.listen(PORT, (req, res) => console.log(PORT));
export default server;
