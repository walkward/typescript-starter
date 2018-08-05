#!/bin/sh

# Run tests...
set -x
whoami
cd /usr/src/app
npm test
