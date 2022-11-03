FROM node:16-slim

WORKDIR /app
COPY . /app

RUN yarn
RUN yarn build

CMD npm run start
EXPOSE 3000