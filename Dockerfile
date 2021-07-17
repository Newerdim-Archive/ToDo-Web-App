FROM node:12.16.1-alpine As builder

WORKDIR /usr/src/app

COPY ./ToDo.WebApp .

RUN npm install

RUN npm run build --prod

FROM nginx:1.15.8-alpine

EXPOSE 80

COPY --from=builder /usr/src/app/dist/ToDo-WebApp/ /usr/share/nginx/html