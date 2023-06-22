# syntax=docker/dockerfile:1
FROM node:12-alpine
COPY . .
RUN npm install --production
RUN npm run test
CMD ["node", "server.js"]