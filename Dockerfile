FROM node:10.15.1-slim AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
RUN npm run build

FROM node:10.15.1-slim AS dependencies
COPY package.json /usr/src/app/package.json
WORKDIR /usr/src/app
RUN npm install --only prod

FROM node:10.15.1-slim
EXPOSE 4000
COPY --from=build /usr/src/app/build /opt/app
COPY --from=dependencies /usr/src/app/node_modules /opt/app/node_modules
WORKDIR /opt/app
CMD ["node", "bundle.js"]
