FROM node:10.15.1-slim AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install && npm run build

FROM node:10.15.1-slim AS dependencies
COPY package.json /usr/src/app/package.json
WORKDIR /usr/src/app
RUN npm install --only prod

FROM node:10.15.1-slim
EXPOSE 4000
COPY --from=build /usr/src/app/build /opt/app/build
COPY --from=build /usr/src/app/public /opt/app/public
COPY --from=build /usr/src/app/static /opt/app/static
COPY --from=dependencies /usr/src/app/node_modules /opt/app/node_modules
WORKDIR /opt/app
CMD ["node", "build/bundle.js"]
