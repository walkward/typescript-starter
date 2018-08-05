#!/bin/sh

# Start with clean slate!
npm run cleanup

# Install packages
npm install

# Compile typescript
npm run build:tsc

# Build docker image
npm run build:docker
