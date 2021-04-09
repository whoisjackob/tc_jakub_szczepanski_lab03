FROM node:alpine
WORKDIR /opt/app
COPY ./package.json ./
RUN yarn install
COPY index.js .
COPY /test ./
EXPOSE 3000