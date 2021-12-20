FROM node:14-alpine

ENV WEATHER_FETCHER_URL="weather-service.error404.nu:5001"
ENV NEWS_FETCHER_URL="news-service.error404.nu:5001"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

ENTRYPOINT ["node", "index.js"]