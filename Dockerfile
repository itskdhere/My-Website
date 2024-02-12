FROM node:20.11.0-alpine3.19

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3500

CMD ["npm", "start"]