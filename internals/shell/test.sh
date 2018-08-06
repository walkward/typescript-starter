#!/bin/sh

# Run tests...
set -x

mkdir -p ${DIR}/reports
${DIR}/node_modules/.bin/ava-ts --tap | ${DIR}/node_modules/.bin/tap-xunit > ${DIR}/reports/junit.xml
