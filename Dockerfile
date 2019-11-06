FROM node:lts

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV GOOGLE_APPLICATION_CREDENTIALS /usr/src/app/action-3670d5950362.json

CMD tail -f /dev/null
