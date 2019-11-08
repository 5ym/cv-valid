FROM node:lts

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV GOOGLE_APPLICATION_CREDENTIALS /usr/src/app/fancrew-dev-labo-30c840de0531.json

CMD tail -f /dev/null
