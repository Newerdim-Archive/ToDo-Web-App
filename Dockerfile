FROM node:16-alpine As node

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build --prod

FROM nginx:1.21.1-alpine

EXPOSE 80

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=node /usr/src/app/dist/ToDo-Web-App/ /usr/share/nginx/html