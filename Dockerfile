FROM node:10.15.1-slim
COPY server /usr/src/app/server
COPY node_modules /usr/src/app/node_modules
WORKDIR /usr/src/app
EXPOSE 4000
CMD ["node", "server/index.js"]
