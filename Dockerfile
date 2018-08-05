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
COPY internals/shell/test.sh ./internals/shell/test.sh

# Compile typescript
RUN npm run build:tsc

# Create and give permissions to jenkins user
RUN adduser -S jenkins
RUN chown -R jenkins: .
USER jenkins

EXPOSE 3000
CMD [ "npm", "start" ]
