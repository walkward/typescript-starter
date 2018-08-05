#!/bin/sh

# Run tests...
set -x
cd /usr/src/app
mkdir -p node_modules/.cache
chmod 644 node_modules/.cache
npm test
