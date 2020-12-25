FROM node:10.16

RUN mkdir -p /app

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

WORKDIR /app/build

RUN npm i -g http-server

CMD http-server -p 4200