FROM node:lts

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

CMD tail -f /dev/null
