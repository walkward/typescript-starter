#!/bin/sh

# Run tests...
set -x
echo $BUILD_USER
cd /usr/src/app
npm test
