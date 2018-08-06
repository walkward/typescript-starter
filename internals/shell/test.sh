#!/bin/sh

# Run tests...
set -x
su jenkins -c 'echo "hello from $USER"'
cd /usr/src/app
npm test
