#!/bin/sh

# Run tests...
set -x
chmod 644 /etc/passwd
whoami
cd /usr/src/app
npm test
