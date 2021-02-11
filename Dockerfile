FROM node:10.16-alpine as packages
RUN mkdir -p /app
WORKDIR /app
RUN ["apk", "add", "git"]
COPY package.json package.json
RUN npm install

FROM node:10.16-alpine as build
WORKDIR /app
COPY . .
COPY --from=packages /app /app
RUN npm run build

FROM node:10.16-alpine
WORKDIR /app/build
COPY --from=build /app /app
EXPOSE 80
ENTRYPOINT [ "/app/node_modules/.bin/serve", "-s", ".", "-l", "80" ]