FROM node
WORKDIR /usr/app

COPY ./src ./src
COPY .env ./
COPY nodemon.json ./
COPY package*.json ./
COPY webpack.config.js ./
RUN npm install
COPY node_modules/webpack-manifest-plugin/lib/ ./node_modules/webpack-manifest-plugin/lib/

EXPOSE 80 8080
