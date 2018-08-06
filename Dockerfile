FROM node:8.10-alpine

# Create app directory
WORKDIR /usr/src/app

# Create and give permissions to jenkins user
RUN addgroup -g 82 -S jenkins \
  && adduser -u 82 -D -S -G jenkins jenkins
RUN chown -R jenkins:jenkins .
USER jenkins

# Bundle app source
COPY --chown=jenkins:jenkins . .

# Install app dependencies
RUN npm install

# Compile typescript
RUN npm run build:tsc

EXPOSE 3000
CMD [ "npm", "start" ]
