FROM node:14-alpine AS development
ENV NODE_ENV development

WORKDIR /app

# Cache and Install dependencies - very important step
COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]