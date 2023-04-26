FROM node:18.13.0

COPY package.json /

RUN npm install

COPY . .

ENV port=5000

CMD [ "node", "index.js" ]