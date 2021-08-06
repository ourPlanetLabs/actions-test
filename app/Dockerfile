# syntax=docker/dockerfile:1
 FROM node:12-alpine
 COPY . .
 RUN yarn install --production
 RUN yarn test
 CMD ["node", "server.js"]