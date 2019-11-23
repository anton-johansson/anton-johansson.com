FROM node:10.15.1-slim
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install \
 && cd client \
 && npm install \
 && cd .. \
 && npm run build
EXPOSE 4000
CMD ["node", "server/index.js"]
