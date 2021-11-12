FROM node:10

WORKDIR /usr/app

COPY . .

RUN yarn install

COPY package*.json .

CMD [ "yarn", "dev" ]