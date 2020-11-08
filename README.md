# empty-project

Empty project.

## Building and running on localhost

First install dependencies:

```sh
npm install
```

Attention: webpack-manifest-plugin is having issue, skip it or prefer below link to fix

```sh
https://github.com/shellscape/webpack-manifest-plugin/issues/219
```

Enviroment: Use docker-compose to repair service

```sh
docker-compose up
```

Database: Use Sequelize-cli to repair data
```sh
npm run migrate
npm run seed
```

To run development:

```sh
npm start
```

To build production:

```sh
npm run build
```

Generate favicon for production:

```sh
npm run favicon
```

## Running

```sh
npm run serve
```

## Testing

To run unit tests:

```sh
npm test
```
