#!/bin/sh

# Run tests...
set -x
cd /usr/src/app
chmod 644 node_modules/.cache
npm test
