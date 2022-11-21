FROM node:16-buster-slim
RUN apt update && apt install -y curl

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
CMD [ "node", "index.js" ]
