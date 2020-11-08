## Introduction

This project combine Express & React in single source with webpack

## Prepare environment

Enviroment: Use docker-compose to repair service

```sh
docker-compose up
```

Database: Use Sequelize-cli to repair data

```sh
npm run migrate
npm run seed
```

## Run development mode

Install dependencies:

```sh
npm install
```

Attention: webpack-manifest-plugin is having issue, skip it or prefer below link to fix

```sh
https://github.com/shellscape/webpack-manifest-plugin/issues/219
```

Run development:

```sh
npm start
```

## Run build mode

Build production:

```sh
npm run build
```

Generate favicon for production:

```sh
npm run favicon
```

Run server with build directory

```sh
npm run serve
```

## Testing

Run tests:

```sh
npm test
```

## Eslint

Check Eslint:

```sh
npm run eslint
```