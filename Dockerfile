FROM node:8.10-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --only=production

# Bundle app source
COPY src ./src
COPY .env ./.env
COPY tsconfig.json ./tsconfig.json

# Compile typescript
RUN npm run build:tsc

RUN chown -R jenkins:jenkins node_modules

EXPOSE 3000
CMD [ "npm", "start" ]
