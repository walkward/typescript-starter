FROM node:8.10-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Using unsafe-perm & allow-root to properly set permissions on .cache
RUN sudo npm install --unsafe-perm=true --allow-root --only=production

# Bundle app source
COPY src ./src
COPY .env ./.env
COPY tsconfig.json ./tsconfig.json

# Compile typescript
RUN npm run build:tsc

EXPOSE 3000
CMD [ "npm", "start" ]
