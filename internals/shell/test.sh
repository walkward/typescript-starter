#!/bin/sh

# Run tests...
set -x
echo "$(whoami)"
cd /usr/src/app
npm test
