FROM node:lts

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV GOOGLE_APPLICATION_CREDENTIALS /usr/src/app/fancrew-dev-labo-30c840de0531.json
#ENV GOOGLE_APPLICATION_CREDENTIALS /usr/src/app/action-ff8122b99dfa.json

CMD tail -f /dev/null
