FROM node:14-alpine

WORKDIR /app

ADD ./functions/package.json /app/functions

ADD ./functions/package-lock.json /app/functions

RUN npm install -g firebase-tools

RUN npm install

RUN apk update && apk --no-cache add openjdk11 --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

ADD . .

WORKDIR /app/functions

CMD ["npm", "run", "serve-watch"]

EXPOSE 5002