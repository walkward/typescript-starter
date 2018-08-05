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

# Setting permissions for node_modules & modules .cache
RUN find /usr/src/app -type d -exec chmod 755 {} \;

EXPOSE 3000
CMD [ "npm", "start" ]
