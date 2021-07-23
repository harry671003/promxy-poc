FROM node:16

WORKDIR /usr/src/app
COPY package*.json ./
COPY config.yml ./
RUN npm install
COPY ./dist/ .

EXPOSE 8080
ENTRYPOINT [ "node", "index.js" ]
